//..........CABEÇALHO..........
// Verifica se o documento foi completamente carregado
document.addEventListener("DOMContentLoaded", function() {
    // Criação dos elementos HTML
    var logo = document.createElement("div");
    logo.className = "colunaCabecalho logo";
    logo.innerHTML = "<h1>Noob</h1>";

    var links = document.createElement("div");
    links.className = "colunaCabecalho links";
    links.innerHTML = '<a href="../paginas/jogo.html">Jogos</a>' +
                      '<a href="../paginas/perfil.html">Perfil</a>' +
                      '<a href="../paginas/rede.html">Rede</a>';

    var login = document.createElement("div");
    login.className = "colunaCabecalho login";
    login.innerHTML = '<input type="text" id="nome" name="nome" placeholder="Usuário">' +
                      '<input type="password" id="senha" name="senha" placeholder="Senha">' +
                      'Esqueceu a senha? <button>Entrar</button>';

    // Seleciona o elemento header de cada página e adiciona os elementos criados
    var headers = document.querySelectorAll("header");
    headers.forEach(function(header) {
        header.appendChild(logo.cloneNode(true));
        header.appendChild(links.cloneNode(true));
        header.appendChild(login.cloneNode(true));
    });
});



//..........ALTURA DA COLUNA..........
// Adicionar função para ajustar o tamanho da coluna meio
function ajustarTamanhoColunas() {
    var altura = window.innerHeight;
    var topMeio = document.getElementById('colunas').getBoundingClientRect().top;
    var alturaScrollable = altura - topMeio;
    document.querySelector('.scrollable').style.height = alturaScrollable + 'px';
}

// Chamar a função de ajuste do tamanho da coluna meio quando a janela for carregada
window.onload = ajustarTamanhoColunas;

// Adicionar um listener para chamar a função de ajuste do tamanho da coluna meio quando a janela for redimensionada
window.addEventListener('resize', ajustarTamanhoColunas);

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