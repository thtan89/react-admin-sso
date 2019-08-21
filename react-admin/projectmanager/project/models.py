from django.db import models
from django.contrib.auth.models import User

class Project(models.Model):
    #owner = models.ForeignKey('User')
    
    @staticmethod
    def has_read_permission(request):
        return True
      
    def has_object_read_permission(self, request):
        return True
      
    @staticmethod
    def has_write_permission(request):
        return True
      
    @staticmethod
    def has_create_permission(request):
        return True