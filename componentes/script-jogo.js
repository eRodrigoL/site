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


