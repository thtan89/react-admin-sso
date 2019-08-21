from rest_framework import serializers
from project.models import Project
from dry_rest_permissions.generics import DRYPermissionsField


class ProjectSerializer(serializers.ModelSerializer):
    permissions = DRYPermissionsField()
    
    class Meta:
        model = Project
        fields = ('id', 'permissions')