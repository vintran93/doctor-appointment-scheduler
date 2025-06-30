# backend/apps/appointments/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.AppointmentListCreateView.as_view(), name='appointments'),
]