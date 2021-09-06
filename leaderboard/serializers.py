"""Serializer for user"""
from rest_framework import serializers
from .models import *


class StatSerializer(serializers.ModelSerializer):
    """ Serializer for user"""
    class Meta:
        model = Stat
        fields = ['id','name', 'score', 'level',"created_at"]

    # def create(self, validated_data):
    #     user = User.objects.create(email=validated_data['email'],
    #                                phone=validated_data["phone"],
    #                                )
    #     user.set_password(validated_data['password'])
    #     user.save()
    #     return user

    # def update(self, user, validated_data):
    #     user.email = validated_data.get('email', user.email)
    #     user.first_name = validated_data.get('first_name', user.first_name)
    #     user.last_name = validated_data.get('last_name', user.last_name)
    #     user.phone = validated_data.get('phone', user.phone)
    #     user.description = validated_data.get('description', user.description)
    #     user.save()
    #     return user
