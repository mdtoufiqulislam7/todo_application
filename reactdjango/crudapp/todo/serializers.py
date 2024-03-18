from rest_framework import serializers
from .models import listmodel


class listserializer(serializers.ModelSerializer):
    class Meta:
        model = listmodel
        fields = '__all__'