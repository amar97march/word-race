from locale import RADIXCHAR
from .models import *
from rest_framework.response import Response
from django.db.models import Avg
from rest_framework.views import APIView
import logging
from faker import Faker
import random

faker = Faker()


class Words(APIView):
    """Review view api"""
        
    def get(self, request):
        """User data fetch method"""


        words_list = faker.words(20)
        bonus_word = random.choice(words_list)

        data = {"words_list":words_list,
                "bonus_word": bonus_word
                }
        return Response({"status": 200, "data": data})