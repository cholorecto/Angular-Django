from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from .views import ItemViewset, LoginViewset


item_list = ItemViewset.as_view({
    'get' : 'list',
    'post' : 'create',
    })

login_user = LoginViewset.as_view({
    'post' : 'login_user',
    })

urlpatterns = format_suffix_patterns({
    url(r'^items/$', item_list, name="items"),
    url(r'^login/$', login_user, name="login_user"),
})