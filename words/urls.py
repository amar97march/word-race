"""Urls for books APIs"""
from django.urls import path

from .views import *


urlpatterns = [

    path('words/', Words.as_view()),
]
