from django.shortcuts import redirect
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import TemplateView
from .forms import HelloForm
from .forms import SearchByIDForm
from .forms import CRUDForm
from .models import Friend
from .forms import FriendForm
from .forms import FindForm

# Create your views here.

def index(request):
  print('index function')
  if 'msg' in request.GET:
    msg = request.GET['msg']
    result = 'you typed: ' + msg + '.'
  else:
    result = 'please send msg parameter!'
  return HttpResponse(result)

def restindex(request, id, nickname):
  rest_result = 'your id:' + str(id) + ', name:' + nickname + '.'
  return HttpResponse(rest_result)

def template(request):
  params = {
    'title': 'Hello/Index',
    'msg': 'This is sample page',
    'goto': 'nexttemplate',
    'page': 'next'
  }
  return render(request, 'test.html', params)

def nexttemplate(request):
  params = {
    'title': 'Hello/NextIndex',
    'msg': 'This is next page',
    'goto': 'template',
    'page': 'prev'
  }
  return render(request, 'test.html', params)

def form(request):
  params = {
    'title': 'Hello/NextIndex',
    'message': 'your data:',
    'formtest': HelloForm()
  }
  if (request.method == 'POST'):
    params['message'] = 'name: ' + request.POST['name'] + \
      '<br>mail: ' + request.POST['mail'] + \
      '<br>age: ' + request.POST['age']
    params['formtest'] = HelloForm(request.POST)  #HelloFormにrequest.POSTの値を入力してオブジェクト化するため、submit後値がcacheされる
  return render(request, 'index.html',params)

def dbview(request):
  data = Friend.objects.all()
  params = {
    'title': 'Friends List',
    'message': 'all friends.',
    'data': data
  }
  return render(request, 'dbinfo.html', params)

class HelloView(TemplateView):

  def __init__(self):
    self.params = {
      'title': 'Hello',
      'message': 'your data:',
      'formtest': HelloForm()
    }

  def get(self, request):
    return render(request, 'index.html', self.params)

  def post(self, request):
    msg = 'your name is <b>' + request.POST['name'] + \
      '(' + request.POST['age'] + ')</b> <br>email address is <b>' + \
      request.POST['mail'] + '.'
    self.params['message'] = msg
    self.params['formtest'] = HelloForm(request.POST)
    return render(request, 'index.html', self.params)

def idsearch(request):
  params = {
    'title': 'IDSearchPage',
    'message': 'all friends.',
    'form': SearchByIDForm(),
    'data': []
  }
  if (request.method == 'POST'):
    num =  request.POST['id']
    item = Friend.objects.get(id=num)
    params['data'] = [item]
    params['form'] = SearchByIDForm(request.POST)
  else:
    params['data'] = Friend.objects.all()

  return render(request, 'search_by_id.html', params)

def values(request):
  data = Friend.objects.all().values()
  params = {
    'title': 'All Friends Value',
    'data': data
  }
  return render(request,'allvalue.html',params)

def name_id_values(request):
  data = Friend.objects.all().values('id','name')
  params = {
    'title': 'id and name value',
    'data': data
  }

  return render(request,'allvalue.html',params)


def index2(request):
  data = Friend.objects.all()
  params = {
    'title': 'Make Friends!!',
    'data': data
  }

  return render(request,'dbinfo.html',params)

def create(request):
  params = {
    'title': 'Create User Inofs',
    'form': CRUDForm()
  }
  if (request.method == 'POST'):
    name = request.POST['name']
    mail = request.POST['mail']
    gender = 'gender' in request.POST
    age = int(request.POST['age'])
    birth = request.POST['birthday']
    friend = Friend(name=name,mail=mail,gender=gender,age=age,birthday=birth)
    friend.save()
    return redirect(to='/hello/dbinfo')
  return render(request,'create.html',params)

def create_friend_form(request):
  if (request.method == 'POST'):
    obj = Friend()
    friend = FriendForm(request.POST, instance=obj)
    friend.save()
    return redirect(to='/hello/dbinfo')
  params = {
    'title': 'Create Friend Data',
    'form': FriendForm()
  }
  return render(request, 'create.html', params)

def edit(request, num):
  obj = Friend.objects.get(id=num)
  if (request.method == 'POST'):
     friend = FriendForm(request.POST, instance=obj)
     friend.save()
     return redirect(to='/hello/dbinfo')
  params = {
    'title': 'Friends List',
    'form': FriendForm(instance=obj),
    'id': num
  }
  return render(request,'edit.html',params)

def delete(request,num):
  friend = Friend.objects.get(id=num)
  if (request.method == 'POST'):
     friend.delete()
     return redirect(to='/hello/dbinfo')
  params = {
    'title': 'Friends List',
    'obj': friend,
    'id': num
  }
  return render(request,'delete.html',params)

def find(request):
  if (request.method == 'POST'):
    msg = 'search result:'
    form = FindForm(request.POST)
    str = request.POST['find']
    data = Friend.objects.filter(name=str)
  else:
    msg = 'search words...'
    form = FindForm()
    data = Friend.objects.all()
  params = {
    'title': 'Filter Users',
    'message': msg,
    'form': form,
    'data': data
  }
  return render(request, 'find.html', params)
