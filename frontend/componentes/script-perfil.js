//..........GRÁFICO DESEMPENHO..........
var ctx = document.getElementById('desempenho').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [75, 40, 5], // Vitórias, Derrotas, Empates
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Vitórias
                'rgba(54, 162, 235, 0.5)', // Derrotas
                'rgba(255, 206, 86, 0.5)' // Empates
            ],
        }],
        labels: ['Vitórias', 'Derrotas', 'Empates'] // Labels para a legenda
    },
    options: {
        circumference: 180,
        rotation: 270,
        title: {
            display: true,
            text: 'Desempenho'
        },
        animation: {
            animateRotate: false,
            animateScale: true
        }
    }
});



//..........GRÁFICO DESEMPENHO POR CATEGORIA..........
// Dados do gráfico
var data = {
    labels: ["Competitivos", "Competitivos de grupo", "Cooperativos", "Semi-cooperativos", "Solo", "Sorte", "Estratégia", "Destreza", "Outros"],
    datasets: [{
        label: "Vitórias por Categoria",
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
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
var ctx = document.getElementById('vitorias-catogoria').getContext('2d');

// Criando o gráfico de área polar
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: data,
    options: options
});



//..........GRÁFICO NÚMEOR DE DISPUTAS POR CATEGORIA..........
// Dados do gráfico
var data = {
    labels: ["Competitivos", "Competitivos de grupo", "Cooperativos", "Semi-cooperativos", "Solo"],
    datasets: [{
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2
    }]
};

// Configurações do gráfico
var options = {
    title: {
        display: true,
        text: 'Disputas por Categoria'
    }
};

// Configurando o contexto do gráfico
var ctx = document.getElementById('disputas-categoria').getContext('2d');

// Criando o gráfico de rosca
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});



//..........GRÁFICO NÚMEOR DE DISPUTAS POR TIPO..........
// Dados do gráfico
var data = {
    labels: ["Sorte", "Estratégia", "Destreza", "Outros"],
    datasets: [{
        data: [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)], // Exemplo de dados. Substitua pelos seus dados reais.
        backgroundColor: [
            'rgba(255, 99, 132, 0.5)', // Cor para "Sorte"
            'rgba(54, 162, 235, 0.5)', // Cor para "Estratégia"
            'rgba(255, 206, 86, 0.5)', // Cor para "Destreza"
            'rgba(75, 192, 192, 0.5)' // Cor para "Outros"
        ],
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 2
    }]
};

// Configurações do gráfico
var options = {
    title: {
        display: true,
        text: 'Disputas por Tipo'
    }
};

// Configurando o contexto do gráfico
var ctx = document.getElementById('disputas-tipo').getContext('2d');

// Criando o gráfico de rosca
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});