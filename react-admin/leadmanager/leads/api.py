from leads.models import Project
from rest_framework import viewsets
from dry_rest_permissions.generics import DRYPermissions
from .serializers import ProjectSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    permission_classes = (DRYPermissions,)
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer