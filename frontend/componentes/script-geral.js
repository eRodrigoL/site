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
    login.innerHTML = '<div>' +
                      '<input type="text" id="nome" name="nome" placeholder="Usuário">' +
                      '<input type="password" id="senha" name="senha" placeholder="Senha">' +
                      '<Button>Entrar</Button>' +
                      '</div>' +
                      '<p>Ainda não tem conta?<a href="cadastro-usuario.html">Cadastre-se</a></p>';

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