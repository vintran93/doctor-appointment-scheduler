# backend/apps/doctors/admin.py
from django.contrib import admin
from .models import Doctor

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ['name', 'specialty', 'created_at']
    list_filter = ['specialty']
    search_fields = ['name', 'specialty']