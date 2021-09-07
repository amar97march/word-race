"""Views for word fetching apis"""
from rest_framework.response import Response
from rest_framework.views import APIView
from faker import Faker
import random

faker = Faker()


class Words(APIView):
    """Words view api"""
        
    def get(self, request):
        """User data fetch method"""

        words_list = faker.words(20)
        bonus_word = random.choice(words_list)

        data = {"words_list": words_list,
                "bonus_word": bonus_word
                }
        return Response({"status": 200, "data": data})
