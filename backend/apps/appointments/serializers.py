# backend/apps/appointments/serializers.py
from rest_framework import serializers
from .models import Appointment
from apps.doctors.serializers import DoctorSerializer

class AppointmentSerializer(serializers.ModelSerializer):
    doctor_details = DoctorSerializer(source='doctor', read_only=True)
    
    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ['user']