from django.db import models

# Create your models here.
class cameras(models.Model):
    name = models.CharField(max_length=255)
    ip_address = models.CharField(max_length=255)
    Monitored = models.BooleanField(default=True)
    def __str__(self):
        return self.name
    
        