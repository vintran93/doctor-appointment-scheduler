# backend/apps/accounts/serializers.py
from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    """Read‑only user info returned to the frontend."""
    class Meta:
        model = User
        fields = ("id", "email", "username")  # add more fields if you need them
        read_only_fields = fields


# -------------------------------------------------------------------------
# Registration
# -------------------------------------------------------------------------
class RegisterSerializer(serializers.ModelSerializer):
    """
    Creates a new user.
    • Accepts email, username, password, password2 (confirmation).
    • Validates matching passwords and unique email.
    """
    password = serializers.CharField(write_only=True, style={"input_type": "password"})
    password2 = serializers.CharField(write_only=True, style={"input_type": "password"})

    class Meta:
        model = User
        fields = ("email", "username", "password", "password2")

    def validate_email(self, value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError(_("A user with this email already exists."))
        return value

    def validate(self, data):
        if data["password"] != data["password2"]:
            raise serializers.ValidationError(_("Passwords do not match."))
        return data

    def create(self, validated_data):
        validated_data.pop("password2")      # remove the confirmation
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


# -------------------------------------------------------------------------
# Login
# -------------------------------------------------------------------------
class LoginSerializer(serializers.Serializer):
    """
    Authenticates a user and returns the user instance.
    Accepts email + password.
    """
    email = serializers.EmailField()
    password = serializers.CharField(style={"input_type": "password"}, trim_whitespace=False)

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            # By default Django’s `authenticate` expects `username`, so we pass email as username.
            user = authenticate(username=email, password=password)
            if not user:
                raise serializers.ValidationError(_("Unable to log in with provided credentials."), code="authorization")
        else:
            raise serializers.ValidationError(_("Must include both email and password."), code="authorization")

        attrs["user"] = user
        return attrs