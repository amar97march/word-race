from django.db import models

class Stat(models.Model):
    """Class for Book information"""
    name = models.CharField(max_length=200)
    level = models.IntegerField(default=1)
    score = models.IntegerField(default=0)
    created_at = models.DateTimeField('Created at', auto_now_add=True)

    def __str__(self):
        return self.title