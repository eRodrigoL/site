document.getElementById('btnLogin').addEventListener('click', async function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtém os valores dos campos do formulário
    var apelido = document.getElementById('apelido').value;
    var senha = document.getElementById('senha').value;

    // Constrói o objeto de dados a ser enviado
    var data = {
        apelido: apelido,
        senha: senha
    };

    // Realiza a solicitação POST usando fetch
    fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response) {
        if (!response.ok) {
            return alert('Usuário não encontrado, ou senha incorreta. Por favor revisar!');
        }
        return response.json();
    })
    .then(function(data) {
        if (data) {
            alert('Usuário logado com sucesso!');
            console.log('Login bem-sucedido');

            // Armazena o token no localStorage
            localStorage.setItem('token', data.token);
            
            // Extrair as informações necessárias do retorno da API
            const usuario = data.usuario;
            const nome = usuario.nome;
            const nascimento = new Date(usuario.nascimento);
            const idade = calcularIdade(nascimento);
            
            // Atualizar o conteúdo da página
            atualizarPagina(nome, idade);
        }
    })
    .catch(function(error) {
        console.error(error);
    });
});

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mes = hoje.getMonth() - dataNascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  return idade;
}

function atualizarPagina(nome, idade) {
  const elementoNome = document.getElementById('nome-usuario-perfil');
  const elementoIdade = document.getElementById('idade-usuario');
  elementoNome.textContent = nome;
  elementoIdade.textContent = `(${idade} anos)`;
}


// Função para incluir o token nas solicitações subsequentes
function incluirToken(headers = {}) {
    const token = localStorage.getItem('token');
    if (token) {
        headers['Authorization'] = 'Bearer ' + token;
    }
    return headers;
}

/*// Exemplo de uso do token em uma solicitação subsequente
function fetchComToken(url, options = {}) {
    options.headers = incluirToken(options.headers || {});
    return fetch(url, options);
}*/

// Carregar os dados do usuário ao carregar a página (se logado)
document.addEventListener('DOMContentLoaded', function() {
    const token = localStorage.getItem('token');
    if (token) {
        fetchComToken('http://localhost:3000/api/userinfo')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Erro ao carregar informações do usuário');
            })
            .then(data => {
                if (data) {
                    const usuario = data.usuario;
                    const nome = usuario.nome;
                    const nascimento = new Date(usuario.nascimento);
                    const idade = calcularIdade(nascimento);
                    atualizarPagina(nome, idade);
                }
            })
            .catch(error => console.error(error));
    }
});