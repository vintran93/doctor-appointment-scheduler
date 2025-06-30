# backend/apps/doctors/views.py
from rest_framework import generics
from .models import Doctor
from .serializers import DoctorSerializer

class DoctorListView(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer