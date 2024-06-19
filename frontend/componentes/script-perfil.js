  //..........GRÁFICO DESEMPENHO..........

function atualizarGraficoDesempenho(dados){
 // Cria o gráfico
 if (chart) {
    chart.destroy(); // Destroi o gráfico existente, se houver
}

var ctx = document.getElementById('desempenho').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            //data: [75, 40], // Vitórias, Derrotas
            data: dados,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)', // Vitórias
                'rgba(54, 162, 235, 0.5)', // Derrotas  
            ],
        }],
        labels: ['Vitórias', 'Derrotas'] // Labels para a legenda
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
}

  //..........GRÁFICO DE VITORIAS POR CATEGORIA..........
var ctxVitorias = document.getElementById('vitorias-categoria').getContext('2d');
var chartVitorias = new Chart(ctxVitorias, {
    type: 'polarArea',
    data: {
        labels: ["Competitivos", "Competitivos de grupo", "Cooperativos", "Semi-cooperativos", "Solo", "Sorte", "Estratégia", "Destreza", "Outros"],
        datasets: [{
            label: "Vitórias por Categoria",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Inicialmente vazio
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
    },
    options: {
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
    }
});


//..........GRÁFICO NÚMERO DE DISPUTAS POR CATEGORIA..........
// Configurando o contexto do gráfico
var ctxDisputas = document.getElementById('disputas-categoria').getContext('2d');

// Criando o gráfico de rosca
var chartDisputas = new Chart(ctxDisputas, {
    type: 'doughnut',
    data: {
        labels: ["Competitivos", "Competitivos de grupo", "Cooperativos", "Semi-cooperativos", "Solo", "Sorte", "Estratégia", "Destreza", "Outros"],
        datasets: [{
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0], // Inicialmente vazio
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
    },
    options: {
        title: {
            display: true,
            text: 'Disputas por Categoria'
        }
    }
});

// Função para calcular a idade a partir da data de nascimento
function calcularIdade(dataNascimento) {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    return idade;
}

// Carregar informações do usuário do localStorage
document.addEventListener("DOMContentLoaded", async () => {
    const nome = localStorage.getItem('nome');
    const nascimento = localStorage.getItem('nascimento');
    const apelido = localStorage.getItem('apelido');
    const src = localStorage.getItem('src');

    // Adiciona um log para verificar o valor de 'src'
    console.log('Valor de src:', src);
    
    // Atualizar o conteúdo dos elementos HTML
    if (nome) {
        document.getElementById('nome-usuario-perfil').textContent = nome;
    }
    if (nascimento) {
        const idade = calcularIdade(nascimento);
        document.getElementById('idade-usuario-perfil').textContent = `(${idade} anos)`;
    }
    // Verifica se o valor existe e define o atributo 'src' da imagem
    if (src) {
        document.getElementById('preview-img').src = src;
    }

    try {
        const response = await fetch('https://api-noob-1.onrender.com/api/atividades');
        const atividades = await response.json();

        let dadosDesempenho = [0, 0]; // Inicializa com zero vitórias e zero derrotas
        let contador_partidas = 0;
        let contador_vitorias= 0;
        

        atividades.forEach(atividade => {
            // Contar ocorrências no array de usuários
            atividade.usuarios.forEach(usuario => {
                if (usuario.nome === apelido) {
                    contador_partidas++;
                }
            });

            // Contar ocorrências no array de vencedores
            atividade.vencedor.forEach(vencedor => {
                if (vencedor.nome === apelido) {
                    contador_vitorias++;
                }
            });
        });

        const derrotas = contador_partidas - contador_vitorias;

         // Atualiza os dados no array
        dadosDesempenho = [contador_vitorias, derrotas];

        atualizarGraficoDesempenho(dadosDesempenho);

        document.getElementById('num-partidas').textContent = contador_partidas;
        document.getElementById('num-vitorias').textContent = contador_vitorias;
        document.getElementById('num-derrotas').textContent = derrotas;

    } catch (error) {
        console.error('Erro ao buscar as avaliações:', error);
        /*document.getElementById('resultado').innerText = 'Erro ao buscar as avaliações.';*/
    }

});

// Função para atualizar o gráfico de vitórias por categoria
async function atualizaGraficoVitoriaCategoria() {
    const apelido = localStorage.getItem('apelido');
    if (!apelido) return;

    try {
        const responseJogos = await fetch('https://api-noob-1.onrender.com/api/jogos');
        const jogos = await responseJogos.json();

        const responseAtividades = await fetch('https://api-noob-1.onrender.com/api/atividades');
        const atividades = await responseAtividades.json();

        const vitoriasPorCategoria = {
            "Competitivo": 0,
            "Competitivo de grupo": 0,
            "Cooperativo": 0,
            "Semi-cooperativo": 0,
            "Solo": 0,
            "Sorte": 0,
            "Estratégia": 0,
            "Destreza": 0,
            "Outros": 0
        };

        // Conta as vitórias por categoria
        atividades.forEach(atividade => {
            atividade.vencedor.forEach(vencedor => {
                if (vencedor.nome === apelido) {
                    const jogo = jogos.find(j => j.titulo === atividade.jogo[0].titulo);
                    if (jogo) {
                        const categoria = jogo.categoria;
                        if (vitoriasPorCategoria.hasOwnProperty(categoria)) {
                            vitoriasPorCategoria[categoria]++;
                        } else {
                            vitoriasPorCategoria["Outros"]++;
                        }
                    }
                }
            });
        });

        // Atualiza os dados do gráfico de vitórias
        chartVitorias.data.datasets[0].data = [
            vitoriasPorCategoria["Competitivo"],
            vitoriasPorCategoria["Competitivo de grupo"],
            vitoriasPorCategoria["Cooperativo"],
            vitoriasPorCategoria["Semi-cooperativo"],
            vitoriasPorCategoria["Solo"],
            vitoriasPorCategoria["Sorte"],
            vitoriasPorCategoria["Estratégia"],
            vitoriasPorCategoria["Destreza"],
            vitoriasPorCategoria["Outros"]
        ];

        chartVitorias.update();
    } catch (error) {
        console.error('Erro ao atualizar o gráfico:', error);
    }
}

// Chama a função para atualizar o gráfico ao carregar a página
document.addEventListener('DOMContentLoaded', atualizaGraficoVitoriaCategoria);


// Função para atualizar o gráfico de número de disputas por categoria
async function atualizaGraficoDisputasCategoria() {
    try {
        const responseJogos = await fetch('https://api-noob-1.onrender.com/api/jogos');
        const jogos = await responseJogos.json();

        const responseAtividades = await fetch('https://api-noob-1.onrender.com/api/atividades');
        const atividades = await responseAtividades.json();

        const disputasPorCategoria = {
            "Competitivo": 0,
            "Competitivo de grupo": 0,
            "Cooperativo": 0,
            "Semi-cooperativo": 0,
            "Solo": 0,
            "Sorte": 0,
            "Estratégia": 0,
            "Destreza": 0,
            "Outros": 0
        };

        // Conta o número de disputas por categoria
        atividades.forEach(atividade => {
            const jogo = jogos.find(j => j.titulo === atividade.jogo[0].titulo);
            if (jogo) {
                const categoria = jogo.categoria;
                if (disputasPorCategoria.hasOwnProperty(categoria)) {
                    disputasPorCategoria[categoria]++;
                } else {
                    disputasPorCategoria["Outros"]++;
                }
            }
        }); 

        // Atualiza os dados do gráfico de disputas
        chartDisputas.data.datasets[0].data = [
            disputasPorCategoria["Competitivo"],
            disputasPorCategoria["Competitivo de grupo"],
            disputasPorCategoria["Cooperativo"],
            disputasPorCategoria["Semi-cooperativo"],
            disputasPorCategoria["Solo"],
            disputasPorCategoria["Sorte"],
            disputasPorCategoria["Estratégia"],
            disputasPorCategoria["Destreza"],
            disputasPorCategoria["Outros"]
        ];

        chartDisputas.update();
    } catch (error) {
        console.error('Erro ao atualizar o gráfico:', error);
    }
}

// Chama a função para atualizar o gráfico ao carregar a página
document.addEventListener('DOMContentLoaded', atualizaGraficoDisputasCategoria);

