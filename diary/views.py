from django.shortcuts import render
from rest_framework.views import APIView
from . models import  *
from rest_framework.response import Response
from .serializer import *


class ReactView(APIView):
    serializer_class= ReactSerializer
    
    def get(self,request):
        detail=[{"name":detail.name,"experience":detail.experience} for detail in React.objects.all()]
        return Response(detail)
    
    def post(self,request):
        serializer=ReactSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


    def delete(self,request):
        #detail=[{"name":detail.name,"experience":detail.experience} for detail in React.objects.all()]
        #detail.clear()
        React.objects.all().delete()
        return Response("No data found")



        


# Create your views here.
