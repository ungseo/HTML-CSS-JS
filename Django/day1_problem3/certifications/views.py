from django.shortcuts import render

# Create your views here.
name = ['Kim Ungseo','Jung Hoyoon','Kim Seungjun']
age = list(range(25,31))
grade = ['a','b','c','s']
context = {
    'name': name,
    'age':age,
    'grade':grade,
}
    

def certifi1(request):
    return render(request, 'certifications/certifi1.html', context)

def certifi2(request):
    return render(request, 'certifications/certifi2.html', context)

def certifi3(request):
    return render(request, 'certifications/certifi3.html', context)