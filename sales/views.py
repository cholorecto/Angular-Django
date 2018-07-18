from rest_framework import viewsets, status
from rest_framework.response import Response

from .models import Item
from .serializers import ItemSerializer


class ItemViewset(viewsets.ViewSet):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()

    def list(self, *args):
        serializer = self.serializer_class(self.queryset, many=True)
        return Response(serializer.data)

    def create(self, *args):
        serializer = self.serializer_class(data=self.request.data)
        import pdb;pdb.set_trace()
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)