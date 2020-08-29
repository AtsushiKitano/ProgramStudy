from django.urls import path
from . import views
from .views import HelloView

urlpatterns = [
  path('',views.index, name='index'),
  path('rest/<int:id>/<nickname>', views.restindex, name='restindex'),
  path('template/', views.template, name='template'),
  path('template/next', views.nexttemplate, name='nexttemplate'),
  path('form/', views.form, name='form'),
  path('class/', HelloView.as_view(), name='class'),
  path('dbinfo/', views.dbview, name='dbinfo'),
  path('idsearch/', views.idsearch, name='idsearch'),
  path('allvalue/', views.values, name='allvalue'),
  path('idnamevalue/', views.name_id_values, name='idnamevalue'),
  path('index/',views.index2, name='index'),
  path('create/',views.create, name='create'),
  path('createform/',views.create_friend_form, name='create_friend_form'),
  path('edit/<int:num>',views.edit, name='edit'),
  path('delete/<int:num>',views.delete, name='delete'),
  path('find',views.find, name='find'),
]
