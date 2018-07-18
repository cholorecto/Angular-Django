from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from .views import ItemViewset


item_list = ItemViewset.as_view({
    'get' : 'list',
    'post' : 'create'
    })


urlpatterns = format_suffix_patterns({
    url(r'^items/$', item_list, name="items")
})