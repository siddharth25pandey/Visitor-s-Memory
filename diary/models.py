from django.db import models

# Create your models here.



class React(models.Model):
    name=models.CharField(max_length=50)
    experience=models.CharField(max_length=500)




