from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Jogador(models.Model):
    tentativas = models.IntegerField(null=False)
    dataPartida = models.DateTimeField(null=False)
    
    usuario = models.ForeignKey(User, on_delete=models.CASCADE, null=False)

    def __str__(self):
        return self.usuario.username