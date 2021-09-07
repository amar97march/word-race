from .models import *
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import CreateModelMixin
from .serializers import *
from django.db.models import Avg


class CreateStat(CreateModelMixin, GenericAPIView):
    """stat view api"""

    queryset = Stat.objects.all()
    serializer_class = StatSerializer

    def post(self, request, *args, **kwargs):
        """ stat Creation API """
        return self.create(request, *args, **kwargs)
        
    def get(self, request):
        """stat data fetch method"""
        stat_data = Stat.objects.all()
        top_10 = stat_data.order_by("-score")[0:10]
        serializer = StatSerializer(top_10, many=True)
        top_data = serializer.data
        top_score = stat_data.order_by("-score").first().score
        max_level = stat_data.order_by("-level").first().level
        average_score = Stat.objects.aggregate(Avg("score"))

        data = {"top_ten": top_data,
                "top_score": top_score,
                "max_level": max_level,
                "number_of_games_played": stat_data.count(),
                "average_score": average_score["score__avg"]
                }
        return Response({"status": 200, "data": data})
