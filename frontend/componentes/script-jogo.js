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

    // modal .....
    var modal = document.getElementById("modal");
    var openModalBtn = document.getElementById("cadastrar-jogo");
    var cancelBtn = document.getElementById("btnCancelarJogo");

    openModalBtn.onclick = function() {
        console.log("Abrindo modal");
        modal.style.display = "block";
    }

    cancelBtn.onclick = function() {
        console.log("Cancelando e fechando modal");
        closeModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            console.log("Fechando modal ao clicar fora");
            closeModal();
        }
    }

    const formularioCadastro = document.getElementById('cadastroJogos');

    document.getElementById('btnCadastrarJogo').addEventListener('click', async function(event) {
        event.preventDefault();

        const formData = new FormData(formularioCadastro);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        console.log("Dados do formulário:", userData);

        if (userData.titulo.trim() !== '') {
            try {
                const response = await fetch('https://web-eg08riks0c18.up-de-fra1-k8s-1.apps.run-on-seenode.com/api/jogos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });

                console.log("Resposta do servidor:", response);

                if (!response.ok) {
                    throw new Error('Erro ao cadastrar jogo');
                }

                alert('Jogo cadastrado com sucesso!');
                formularioCadastro.reset();
                closeModal();
            } catch (error) {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao cadastrar o jogo. Por favor, tente novamente mais tarde.');
            }
        } else {
            alert('Por favor, preencha o título do jogo!');
        }
    });

    function closeModal() {
        modal.style.display = "none";
    }
    // modal .....

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
