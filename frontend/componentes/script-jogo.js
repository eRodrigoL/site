//..........BARRA DE AJUSTE..........
document.addEventListener('DOMContentLoaded', function() {
    const barraDificuldade = document.getElementById('barraDificuldade');
    const valorDificuldade = document.getElementById('valorDificuldade');
  
    barraDificuldade.addEventListener('input', function() {
      const valor = parseInt(barraDificuldade.value);
      valorDificuldade.textContent = valor;
    });
  
    // Atualizar o valor inicial
    valorDificuldade.textContent = barraDificuldade.value;
});


//..........MODAL CADASTRAR JOGO..........
document.getElementById('cadastrar-jogo').addEventListener('click', function() {
    // Mostra o modal
    document.getElementById('modal').style.display = 'block';

    // Carrega o conteúdo do arquivo HTML especificado
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('modal-cadastrar-jogo').innerHTML = this.responseText;
    }
    };
    xhttp.open('GET', 'cadastro-jogo.html', true);
    xhttp.send();
});

// Fecha o modal quando o usuário clica fora dele
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
    modal.style.display = 'none';
    }
}


//..........GRÁFICO AVALIAÇÃO..........
// Dados do gráfico
var data = {
    labels: ['Qualidade dos Componentes', 'Beleza do Jogo', 'Divertimento', 'Tempo de Duração', 'Preço', 'Tam. da caixa / Armaz. dos Comp.'],
    datasets: [{
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2
    }]
};

// Opções do gráfico
var options = {
    title: {
        display: true,
        text: 'Desempenho por Categoria'
    },
    scale: {
        angleLines: {
            display: false // Remover as linhas de ângulo
        },
        ticks: {
            beginAtZero: true,
            min: 0,
            max: 100
        }
    },
    animation: {
        animateRotate: false, // Desativar a animação de rotação
        animateScale: true
    }
};

// Configurando o contexto do gráfico
var ctx = document.getElementById('avaliacao').getContext('2d');

// Criando o gráfico de área polar
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: data,
    options: options
});



//..........GRÁFICO ESTILO..........
// Dados para o gráfico de pizza
var dadosPizza = {
    labels: ['Sorte', 'Azar', 'Destreza', 'Outros'],
    datasets: [{
        label: "Preferências de Estilo",
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], // Valores fictícios para exemplificação
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2
    }]
};
  
// Configurações do gráfico de pizza
var opcoesPizza = {
    // Adicione opções aqui, se necessário
};
  
// Criar o gráfico de pizza
var ctxPizza = document.getElementById('estilo').getContext('2d');
var estiloChart = new Chart(ctxPizza, {
    type: 'doughnut',
    data: dadosPizza,
    options: opcoesPizza
});



//..........GRÁFICO JOGABILIDADE..........
//..........GRÁFICO ESTILO..........
// Dados para o gráfico de pizza
var dadosPizza = {
    labels: ['R. Dados', 'Leilão', 'Desenho', 'P. Dados', 'C. Mapa', 'A. Recursos', 'L. Trabalhadores', 'Mira', 'Cartas'],
    datasets: [{
        label: "Preferências de Estilo",
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], // Valores fictícios para exemplificação
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2
    }]
};
  
// Configurações do gráfico de pizza
var opcoesPizza = {
    // Adicione opções aqui, se necessário
};
  
// Criar o gráfico de pizza
var ctxPizza = document.getElementById('jogabilidade').getContext('2d');
var estiloChart = new Chart(ctxPizza, {
    type: 'doughnut',
    data: dadosPizza,
    options: opcoesPizza
});