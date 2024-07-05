from django.http import HttpResponse
from django.shortcuts import render
from visit.models import Feedback


def index(request):    
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        feedback = Feedback(name=name, email=email, message=message)
        feedback.save()
    return render(request, template_name='index.html')
