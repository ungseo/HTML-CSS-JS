from django.shortcuts import render

# Create your views here.

product_price = {"라면":980,"홈런볼":1500,"칙촉":2300, "식빵":1800}

def calc(request, food, ea):
    if food in product_price.keys():
        rst = product_price[food] * ea
        
    else:
        rst = 0
    context = {
        'food':food,
        'ea': ea,
        'rst': rst
    }
    
    return render(request, 'prices/price.html', context )