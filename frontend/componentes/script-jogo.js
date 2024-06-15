document.addEventListener('DOMContentLoaded', async function() {
    // Barra de Ajuste
    const barraDificuldade = document.getElementById('barraDificuldade');
    const valorDificuldade = document.getElementById('valorDificuldade');

    barraDificuldade.addEventListener('input', function() {
        const valor = parseInt(barraDificuldade.value);
        valorDificuldade.textContent = valor;
    });

    // Atualizar o valor inicial
    valorDificuldade.textContent = barraDificuldade.value;

    // Função para obter parâmetros da query string
    function getQueryParams() {
        const params = {};
        const queryString = window.location.search.substring(1);
        const queryArray = queryString.split('&');

        queryArray.forEach(param => {
            const [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
        });

        return params;
    }

    // Carregar página com informações do banco
    const params = getQueryParams();
    const jogoId = params.id;

    if (jogoId) {
        try {
            const response = await fetch(`https://api-noob.onrender.com/api/jogos/${jogoId}`);
            if (!response.ok) {
                throw new Error(`Erro HTTP! status: ${response.status}`);
            }
            const jogo = await response.json();
            renderJogoDetails(jogo);
        } catch (error) {
            console.error('Erro ao buscar os detalhes do jogo:', error);
        }
    }

    function renderJogoDetails(jogo) {
        
        // Carregar informações de texto sobre o jogo
        document.querySelector('#tituloJogo').innerText = jogo.titulo;
        document.querySelector('#ano').innerText = jogo.ano;
        document.querySelector('#idade').innerText = jogo.idade;
        document.querySelector('#designer').innerText = jogo.designer;
        document.querySelector('#artista').innerText = jogo.artista;
        document.querySelector('#editora').innerText = jogo.editora;
        document.querySelector('#descricao').innerText = jogo.descricao;

        // Carregar a imagem do jogo
        const imgElement = document.querySelector('#capa');
        if (jogo.capa && jogo.capa.trim() !== "") {
            console.log("Carregando imagem do link:", jogo.capa);  // Log para depuração
            imgElement.src = jogo.capa;
        } else {
            console.log("Mantendo imagem padrão");  // Log para depuração
            imgElement.src = "../backend/uploads/1714174787744.jpg";
        }
        
        // ⬇ ⬇ ⬇ ⬇ ⬇ CRIAR BOTÃO DA VERSÃO DIGITAL ⬇ ⬇ ⬇ ⬇ ⬇
        // Seleciona o elemento com id "digital"
        const elementoDigital = document.querySelector('#digital');

        // Verifica se o link está disponível e não é vazio
        if (jogo.digital && jogo.digital.trim() !== "") {
            const url = jogo.digital.trim();

            // Inicializa o texto do botão como vazio
            let buttonText = "";

            // Determina o texto do botão com base no link usando switch
            switch (true) {
                case url.startsWith('https://play.google.com/'):
                    buttonText = 'Play Store';
                    break;
                case url.startsWith('https://www.example.com/'):
                    buttonText = 'Example Site';
                    break;
                case url.startsWith('https://another.example.com/'):
                    buttonText = 'Another Site';
                    break;
                default:
                    buttonText = 'Aqui';
                    console.log('Link desconhecido:', url);
            }

            // Se o texto do botão foi definido, cria e adiciona o botão
            if (buttonText !== "") {
                // Cria o botão
                const botao = document.createElement('button');
                botao.innerText = buttonText;

                // Adiciona um evento de clique ao botão
                botao.addEventListener('click', function() {
                    window.open(url, '_blank');
                });

                // Insere o botão no elemento
                elementoDigital.appendChild(botao);
            }
        } else {
            console.log('Link digital não está disponível ou é inválido.');
        }
        // ⬆ ⬆ ⬆ ⬆ ⬆ CRIAR BOTÃO DA VERSÃO DIGITAL ⬆ ⬆ ⬆ ⬆ ⬆

        // Carregar a nota do jogo
        document.querySelector('.resumo .nota').innerText = jogo.nota || '0';
        document.querySelector('.resumo .dificuldade input').value = jogo.dificuldade || '0';
        document.querySelector('.resumo .dificuldade #valorDificuldade').innerText = jogo.dificuldade || '0';
        document.querySelector('.resumo .competitivo').innerText = jogo.competitivo || '';
        document.querySelector('.resumo .componentes').innerText = jogo.componentes || '';
        // Atualizar gráficos com base nos dados do jogo, se necessário.
    }

    // Modal .....
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
                const response = await fetch('https://api-noob-1.onrender.com/api/jogos', {
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
    // Modal .....

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
