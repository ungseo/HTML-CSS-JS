from django.shortcuts import render

# Create your views here.
def hello(request):
    
    info = {
        'name': 'aiden',
        'age' : 21,
        'sex' :'male'
        
            
        
    }
    return render(request, 'myapp/myapp.html', {'info':info} )