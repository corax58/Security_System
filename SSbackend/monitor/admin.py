from django.contrib import admin
from .models import cameras

# Register your models here.
class cameraAdmin(admin.ModelAdmin):
    list_display = ("name","ip_address","Monitored")



admin.site.register(cameras,cameraAdmin)