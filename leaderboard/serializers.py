"""Serializer for stat"""
from rest_framework import serializers
from .models import *


class StatSerializer(serializers.ModelSerializer):
    """ Serializer for Stat"""
    class Meta:
        model = Stat
        fields = ['id', 'name', 'score', 'level', "created_at"]
