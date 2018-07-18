from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField()
    quantity = models.IntegerField()
    price = models.IntegerField()

    def __str__(self):
        return self.name