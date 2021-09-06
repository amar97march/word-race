from .models import *
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin
import requests
from .serializers import *
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
        serializer = StatSerializer(stat_data, many = True)
        data = serializer.data
        return Response({"status": 200, "data": data})