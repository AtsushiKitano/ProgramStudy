from django import forms
from .models import Friend

class HelloForm(forms.Form):
  name = forms.CharField(label='name')
  mail = forms.EmailField(label='mail')
  birthday = forms.DateField(label='birthday')
  url = forms.URLField(label='url')
  age = forms.CharField(label='age')
  check = forms.BooleanField(label='Checkbox', required=False)

class SearchByIDForm(forms.Form):
  id = forms.IntegerField(label='id')

class CRUDForm(forms.Form):
  name = forms.CharField(label='name')
  mail = forms.EmailField(label='email')
  gender = forms.BooleanField(label='gender', required=False)
  age = forms.IntegerField(label='age')
  birthday = forms.DateField(label='birth')

class FriendForm(forms.ModelForm):
  class Meta:
    model = Friend
    fields = ['name', 'mail', 'gender', 'age', 'birthday']

class FindForm(forms.Form):
  find = forms.CharField(label='find', required=False)
