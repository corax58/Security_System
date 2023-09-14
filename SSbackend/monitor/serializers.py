from rest_framework import serializers

from .models import cameras

# create a serializer class
class cameraSerializer(serializers.ModelSerializer):

	# create a meta class
	class Meta:
		model = cameras
		fields = ('id', 'name','ip_address','Monitored')
