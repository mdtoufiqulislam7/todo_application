

from django.urls import path,include
from .views import UserList,UserListUpdate,UserListdelete

urlpatterns = [
    path('list/',UserList.as_view(),name='list'),
    path('list/<int:id>/',UserListUpdate.as_view(),name='update'),
    path('list/delete/<int:id>/',UserListdelete.as_view(),name='delete'),
    
]