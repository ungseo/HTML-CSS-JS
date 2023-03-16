from django.shortcuts import render

# Create your views here.
# 실행시킬 함수 적기 !!
def index(request):
    return render(request,'articles/index.html')