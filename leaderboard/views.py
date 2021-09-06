from .models import *
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin
import requests
from .serializers import *
from django.db.models import Avg

from rest_framework.views import APIView
import logging

# class CreateStat(APIView):
#     """Class for book reviews"""
#     # permission_classes = [IsAuthenticated]

#     def post(self, request):
#         """Create review for books"""
#         # user = request.user
#         data = request.data
#         try:
#             stat_obj = Stat.objects.create(name = data["name"], score = data["score"], level = data["level"])
            
#             return Response({"status": 200, "message": "Stat added successfully"})
#         except Exception as e:
#             logging.error(e)
#         return Response({"status": 404, "error": "something went wrong"})

class CreateStat(CreateModelMixin, GenericAPIView):
    """Review view api"""

    queryset = Stat.objects.all()
    serializer_class = StatSerializer

    def post(self, request, *args, **kwargs):
        """ User Creation API """
        return self.create(request, *args, **kwargs)
        
    def get(self, request):
        """User data fetch method"""
        stat_data = Stat.objects.all()
        top_10 = stat_data.order_by("-score")[0:10]
        serializer = StatSerializer(top_10, many = True)
        top_data = serializer.data
        top_score = stat_data.order_by("-score").first().score
        max_level = stat_data.order_by("-level").first().level
        average_score = Stat.objects.aggregate(Avg("score"))

        data = {"top_ten":top_data,
                "top_score": top_score,
                "max_level": max_level,
                "number_of_games_played":stat_data.count(),
                "average_score": average_score["score__avg"]
                }
        return Response({"status": 200, "data": data})