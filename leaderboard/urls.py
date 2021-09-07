"""Urls for Leaderboard APIs"""
from django.urls import path

from .views import *


urlpatterns = [

    path('stat/', CreateStat.as_view()),
]
