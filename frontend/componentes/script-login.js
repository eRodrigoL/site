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
    fetch('https://api-noob-1.onrender.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(async function(response) {
        if (!response.ok) {
            //throw new Error('Erro ao fazer login: ' + response.statusText);
            return alert('Usuário não encontrado, ou senha incorreta. Por favor revisar!');
        }

        const responseData = await response.json();

        const { usuario } = responseData;

        localStorage.setItem('login', apelido);

        localStorage.setItem('id', usuario.id);
        localStorage.setItem('nome', usuario.nome);
        localStorage.setItem('apelido', usuario.apelido);
        localStorage.setItem('nascimento', usuario.nascimento);
        localStorage.setItem('email', usuario.email);
        localStorage.setItem('src', usuario.src);

       alert('Usuário logado com sucesso!');
       
       //alert(`Usuário logado com sucesso!\nNome: ${usuario.nome}\nApelido: ${usuario.apelido}\nEmail: ${usuario.email}\nData de Nascimento: ${usuario.nascimento}`);
        
      // alert(`Usuário logado com sucesso!\nid: ${usuario.id}`);

       console.log('Login bem-sucedido');
        window.location.href = '../paginas/lista-jogos.html'
        // Faça o redirecionamento ou manipulação do DOM aqui
    })
    .catch(function(error) {
        console.error(error);
    });
});



