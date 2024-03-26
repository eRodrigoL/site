//..........ALTURA DA COLUNA..........
// Adicionar função para ajustar o tamanho da coluna
function ajustarTamanhoColunas() {
    var altura = window.innerHeight;
    var topColuna = document.getElementById('colunas').getBoundingClientRect().top;
    document.getElementById('colunas').style.height = (altura - topColuna) + 'px';
}

// Chamar a função de ajuste do tamanho da coluna quando a janela for carregada
window.onload = ajustarTamanhoColunas;

// Adicionar um listener para chamar a função de ajuste do tamanho da coluna quando a janela for redimensionada
window.addEventListener('resize', ajustarTamanhoColunas);

//..........ROLAGEM INFINITA..........
// Função para adicionar conteúdo dinâmico à div scrollable
function addDynamicContent() {
    var contentContainerRede = document.getElementById('contentContainerRede');
    var divPostagem = document.createElement('div');
    divPostagem.className = 'divPostagem';

    var content = `
        <div class="image-with-text">
            <img src="perfis/foto.png" alt="Imagem" height="30">
            <strong><em class="usuario-postagem">Fulano de Tal</em></strong>
        </div>
        <div class="date-time-location">15 / jan / 2024 &nbsp;&nbsp;&nbsp;10:00 am&nbsp;&nbsp;&nbsp;Mauá - SP</div>
        <img src="rede/jogoteste.jpg" style="height: 280px;">
        <div><p><strong>Everdell</strong></p></div>
        <div><p>Hoje foi dia de conhecer a expansão de Everdell</p></div>
        <div class="icons">
            <a href="#"><img src="icones/like.png" height="20" alt="Ícone 1"></a>
            <a href="#"><img src="icones/dislike.png" height="20" alt="Ícone 2"></a>
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

//..........ROLAGEM LIMITADA SEM SCROLLBAR..........
document.getElementById('contentContainer').addEventListener('scroll', function() {
    this.classList.toggle('hide-scrollbar', this.scrollHeight <= this.clientHeight);
});