
$(document).ready(function(){

    function embaralharCartas() {
        var cartas = $(".carta");
        var cloneCartas = cartas.clone(); 
        cartas.remove(); 
        while (cloneCartas.length > 0) { 
            var randomIndex = Math.floor(Math.random() * cloneCartas.length); 
            $("main section").append(cloneCartas[randomIndex]); 
            cloneCartas.splice(randomIndex, 1); 
        }
    }
    
    embaralharCartas();

    var tentativas = 0;
    var acertos = 0;
    var erros = 0;
    var imgUrl2 = $('.capa').attr('data-img-url');
    var primeiroClique = true;  // Variável para rastrear o primeiro clique

    // Função para lidar com o clique nas cartas
    $('.carta').click(function(){
        var cartaAtual = $(this);

        if (primeiroClique) {
            // Captura a data e hora atuais
            var agora = new Date();
            var dataHoraFormatada = agora.toISOString().slice(0, 16);

            // Define o valor do campo oculto com a data e hora atual
            $('#dataPartida').val(dataHoraFormatada);

            primeiroClique = false;  // Atualiza a variável para indicar que o primeiro clique já ocorreu
        }

        if (!cartaAtual.hasClass('virada')) { // Verifica se a carta já está virada
            cartaAtual.addClass('virada'); // Adiciona a classe 'virada' para mostrar a carta virada
            var cartasViradas = $('.virada');

            // Incrementa o contador de tentativas a cada clique
            tentativas++;
            $('.header-table p').text('Tentativas: ' + tentativas);
            $('.header-table p+p').text('Acertos: ' + acertos);
            $('.header-table p+p+p').text('Erros: ' + erros);

            $('#tentativas').val(tentativas);

            // Verifica se são duas cartas viradas
            if (cartasViradas.length === 2) {
                // Verifica se as cartas são iguais
                if (cartasViradas.eq(0).attr('data-valor') === cartasViradas.eq(1).attr('data-valor')) {
                    // Se forem iguais, incrementa o contador de acertos
                    acertos++;
                    // Remove a classe 'virada' das cartas
                    cartasViradas.removeClass('virada');
                } else {
                    // Se forem diferentes, volte à imagem padrão após um pequeno atraso
                    erros++
                    setTimeout(function() {
                        cartasViradas.css('background-image', 'url(' + imgUrl2 + ')').removeClass('virada');
                    }, 1000); // Atraso de 1 segundo para que as cartas sejam vistas antes de serem viradas de volta
                }
            }
        }
    });

    $('.carta').click(function(){
        console.log("Clicou na carta!");
        var imgUrl = $(this).attr('data-img-url');
        $(this).css('background-image', 'url(' + imgUrl + ')');
    });

});

