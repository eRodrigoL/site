//..........ROLAGEM INFINITA..........
// Função para adicionar conteúdo dinâmico à div scrollable
function addDynamicContent() {
    var contentContainerRede = document.getElementById('contentContainerRede');
    var divPostagem = document.createElement('div');
    divPostagem.className = 'principal postagens';

    var content = `
        <div class="image-with-text">
            <img src="../imagens/perfis/foto.png" alt="Imagem" height="30">
            <b><em class="titulo-postagem">Fulano de Tal</em></b>
        </div>
        <div class="date-time-location">15 / jan / 2024 &nbsp;&nbsp;&nbsp;10:00 am&nbsp;&nbsp;&nbsp;Mauá - SP</div>
        <img src="../imagens/rede/jogoteste.jpg" style="height: 280px;">
        <div><p><strong>Everdell</strong></p></div>
        <div><p>Hoje foi dia de conhecer a expansão de Everdell</p></div>
        <div class="likes">
            <a href="#"><img src="../imagens/icones/like.png" height="20" alt="Ícone 1"></a>
            <a href="#"><img src="../imagens/icones/dislike.png" height="20" alt="Ícone 2"></a>
            123456 (nº like - dislike)
        </div>
    `;

    divPostagem.innerHTML = content;
    contentContainerRede.appendChild(divPostagem);
}

// Função para replicar o conteúdo continuamente quando o mouse é movido sobre a área desejada
function replicateContentOnMouseMove() {
    var contentContainerRede = document.getElementById('contentContainerRede');
    contentContainerRede.addEventListener('mousemove', function() {
        addDynamicContent();
    });
}

// Chamar a função de replicar o conteúdo continuamente
replicateContentOnMouseMove();

// Selecionar o elemento de entrada de faixa e a div de valor
var barraDificuldade = document.getElementById('barraDificuldade');
var valorDificuldade = document.getElementById('valorDificuldade');

// Adicionar um ouvinte de evento de mudança à barra de dificuldade
barraDificuldade.addEventListener('input', () => {
    // Atualizar o conteúdo da div com o valor atual da faixa
    valorDificuldade.textContent = barraDificuldade.value;
});