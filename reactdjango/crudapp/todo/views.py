from django.shortcuts import render

# Create your views here.
from .models import listmodel
from .serializers import listserializer
from rest_framework import generics
from rest_framework.permissions import IsAdminUser,AllowAny

class UserList(generics.ListCreateAPIView):
    queryset = listmodel.objects.all()
    serializer_class = listserializer
    permission_classes = [AllowAny]
    
    
class UserListUpdate(generics.RetrieveUpdateAPIView):
    queryset = listmodel.objects.all()
    serializer_class = listserializer
    permission_classes = [AllowAny] 
    lookup_field = "id"  

class UserListdelete(generics.DestroyAPIView):
    queryset = listmodel.objects.all()
    serializer_class = listserializer
    permission_classes = [AllowAny] 
    lookup_field = "id" 
        