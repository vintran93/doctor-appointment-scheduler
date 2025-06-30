# backend/apps/doctors/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.DoctorListView.as_view(), name='doctor-list'),
]