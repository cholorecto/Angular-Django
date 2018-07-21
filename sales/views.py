from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

from .models import Item
from .serializers import ItemSerializer


class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny, ]

    def login_user(self, request, *args, **kwargs):
        data = request.data

        user = authenticate(username=data.get('username'), password=data.get('password'))

        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class ItemViewset(viewsets.ViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def list(self, *args):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, *args):
        serializer = self.serializer_class(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
