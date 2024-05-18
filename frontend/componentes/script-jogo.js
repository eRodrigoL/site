document.addEventListener('DOMContentLoaded', function() {
    // Barra de Ajuste
    const barraDificuldade = document.getElementById('barraDificuldade');
    const valorDificuldade = document.getElementById('valorDificuldade');

    barraDificuldade.addEventListener('input', function() {
        const valor = parseInt(barraDificuldade.value);
        valorDificuldade.textContent = valor;
    });

    // Atualizar o valor inicial
    valorDificuldade.textContent = barraDificuldade.value;

    // Modal Cadastrar Jogo
    document.getElementById('cadastrar-jogo').addEventListener('click', function() {
        const modalContainer = document.getElementById('modal-cadastrar-jogo');
        const modal = document.getElementById('modal');

        // Mostra o modal
        modal.style.display = 'block';

        // Carrega o conteúdo do arquivo HTML especificado
        fetch('cadastro-jogo.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar o conteúdo do modal: ' + response.statusText);
                }
                return response.text();
            })
            .then(html => {
                modalContainer.innerHTML = html;
                executeScripts(modalContainer);
            })
            .catch(error => {
                console.error(error);
            });
    });

    // Fecha o modal quando o usuário clica fora dele
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    function executeScripts(container) {
        const scripts = container.querySelectorAll('script');
        scripts.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript);
        });

        // Adiciona o script necessário
        const scriptCadastroJogo = document.createElement('script');
        scriptCadastroJogo.src = '../componentes/script-cadastro-jogos.js';
        scriptCadastroJogo.type = 'module'; // Caso seja necessário
        document.body.appendChild(scriptCadastroJogo);
    }

    // Gráfico Avaliação
    const dataAvaliacao = {
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

    const optionsAvaliacao = {
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

    const ctxAvaliacao = document.getElementById('avaliacao').getContext('2d');
    new Chart(ctxAvaliacao, {
        type: 'polarArea',
        data: dataAvaliacao,
        options: optionsAvaliacao
    });

    // Gráfico Estilo
    const dadosPizzaEstilo = {
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

    const opcoesPizzaEstilo = {};

    const ctxPizzaEstilo = document.getElementById('estilo').getContext('2d');
    new Chart(ctxPizzaEstilo, {
        type: 'doughnut',
        data: dadosPizzaEstilo,
        options: opcoesPizzaEstilo
    });

    // Gráfico Jogabilidade
    const dadosPizzaJogabilidade = {
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

    const opcoesPizzaJogabilidade = {};

    const ctxPizzaJogabilidade = document.getElementById('jogabilidade').getContext('2d');
    new Chart(ctxPizzaJogabilidade, {
        type: 'doughnut',
        data: dadosPizzaJogabilidade,
        options: opcoesPizzaJogabilidade
    });
});
