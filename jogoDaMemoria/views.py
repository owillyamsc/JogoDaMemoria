from django.shortcuts import render, redirect
from jogoDaMemoria.models import Jogador
from django.contrib.auth.decorators import login_required

@login_required
def index(request):
    return render(request, 'index.html')

def rankings(request):
    # Ranking com menos tentativas
    ranking_menos_tentativas = Jogador.objects.all().order_by('tentativas')
    
    # Ranking mais recente
    ranking_mais_recente = Jogador.objects.all().order_by('-dataPartida')
    
    return render(request, 'rankings.html', {
        'ranking_menos_tentativas': ranking_menos_tentativas,
        'ranking_mais_recente': ranking_mais_recente
    })

def save(request):
    if request.POST:
        dados=request.POST
        jogador = Jogador(tentativas=dados.get("tentativas"),dataPartida=dados.get("dataPartida"), usuario=request.user)
        jogador.save()
        return redirect(rankings)
# Create your views here.
