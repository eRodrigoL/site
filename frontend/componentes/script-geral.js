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

function checkLogin(){
    const isLogin = localStorage.getItem('login');
    const isLista = window.location.href.indexOf('lista-jogos') > 0
    const isCadastro = window.location.href.indexOf('cadastro-usuario') > 0
    const isSobre = window.location.href.indexOf('sobre') > 0
    if(!isLogin && !isLista && !isCadastro && !isSobre){
        window.location.href = '../paginas/sobre.html?logado=false'
    }
}

checkLogin()