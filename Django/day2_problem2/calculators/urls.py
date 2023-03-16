from django.urls import path
from . import views

urlpatterns = [
    path('calculator/<int:a>/<int:b>/', views.calculator)
]
