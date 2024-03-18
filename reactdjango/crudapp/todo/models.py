from django.db import models

# Create your models here.
class listmodel(models.Model):
    image = models.ImageField(upload_to='upload/images', height_field=None, width_field=None, max_length=100)
    title = models.TextField(max_length=20)
    
    def __str__(self):
        return self.title
    