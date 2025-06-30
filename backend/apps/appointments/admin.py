# backend/apps/appointments/admin.py
from django.contrib import admin
from .models import Appointment

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['user', 'doctor', 'date', 'time', 'status']
    list_filter = ['status', 'date']
    search_fields = ['user__email', 'doctor__name']