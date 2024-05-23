//const formularioLogin = getElementById('login');
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
            //throw new Error('Erro ao fazer login: ' + response.statusText);
            return alert('Usuário não encontrado, ou senha incorreta. Por favor revisar!');
        }
        localStorage.setItem('login', apelido);
        alert('Usuário logado com sucesso!');
        console.log('Login bem-sucedido');
        window.location.href = '../paginas/rede.html'
        // Faça o redirecionamento ou manipulação do DOM aqui
    })
    .catch(function(error) {
        console.error(error);
    });
});