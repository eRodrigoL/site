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