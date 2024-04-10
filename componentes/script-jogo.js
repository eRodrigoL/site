//..........BARRA DE AJUSTE..........
document.addEventListener("DOMContentLoaded", function() {
    const barraDificuldade = document.getElementById("barraDificuldade");
    const valorDificuldade = document.getElementById("valorDificuldade");
  
    barraDificuldade.addEventListener("input", function() {
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
    modal.style.display = "none";
    }
}


//..........GRÁFICO AVALIAÇÃO..........
// Dados para o gráfico
var dados = {
    labels: ["Qualidade dos Componentes", "Beleza do Jogo", "Divertimento", "Tempo de Duração", "Preço", "Tam. da caixa / Armaz. dos Comp."],
    datasets: [{
        label: "Avaliação",
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
    }]
};
  
// Configurações do gráfico
var opcoes = {
    scale: {
        angleLines: {
            display: true
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
};
  
// Criar o gráfico radar
var ctx = document.getElementById('avaliacao').getContext('2d');
var avaliacao = new Chart(ctx, {
    type: 'radar',
    data: dados,
    options: opcoes
});



//..........GRÁFICO ESTILO..........
// Dados para o gráfico
var dados = {
    labels: ["Sorte", "Azar", "Destreza", "Outros"],
    datasets: [{
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(105, 105, 105, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(105, 105, 105, 1)'
        ],
        borderWidth: 1
    }]
};
  
// Configurações do gráfico
var opcoes = {
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            display: false
        }]
    }
};
  
// Criar o gráfico de pizza
var ctx = document.getElementById('estilo').getContext('2d');
var estilo = new Chart(ctx, {
    type: 'doughnut',
    data: dados,
    options: opcoes
});



//..........GRÁFICO JOGABILIDADE..........
// Dados para o gráfico
var dados = {
    labels: ["R. Dados", "Leilão", "Desenho", "P. Dados", "C. Mapa", "A. Recursos", "L. Trabalhadores", "Mira", "Cartas"],
    datasets: [{
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
    }]
};
  
// Configurações do gráfico
var opcoes = {
    scales: {
        yAxes: [{
            display: false
        }],
        xAxes: [{
            display: false
        }]
    }
};
  
// Criar o gráfico de pizza
var ctx = document.getElementById('jogabilidade').getContext('2d');
var estilo = new Chart(ctx, {
    type: 'pie',
    data: dados,
    options: opcoes
});