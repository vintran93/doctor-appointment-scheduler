# backend/apps/accounts/urls.py
from django.urls import path
from . import views  # login_view and register_view are both in views.py

urlpatterns = [
    path("register/", views.register_view, name="register"),  # NEW
    path("login/",    views.login_view,    name="login"),
]