from django.shortcuts import render

# Create your views here.
def calculator(request,a, b):
    rst1 = a+b
    rst2 = a*b
    rst3 = a-b
    if b == 0:
        rst4 = '계산할 수 없습니다'
    else:
        rst4 = a/b
        
    context = {
        'a':a,
        'b':b,
        'rst1': rst1,
        'rst2': rst2,
        'rst3': rst3,
        'rst4': rst4,
    }
    return render(request, 'calculators/calculator.html',context)