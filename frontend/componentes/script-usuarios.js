
document.getElementById('cadastroUsuarios').addEventListener('submit', async function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome-usuario').value;
    const apelido = document.getElementById('apelido-usuario').value;
    const nascimento = document.getElementById('nascimento-usuario').value;
    const email = document.getElementById('email-usuario').value;
    const senha = document.getElementById('senha-usuario').value;
    const confirmacao = document.getElementById('confirmacao').value;

       // Validar se os campos obrigatórios estão preenchidos
       if (!nome || !apelido || !email || !senha || !confirmacao) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validar se a senha e a confirmação são iguais
    if (senha !== confirmacao) {
        alert('As senhas não coincidem.');
        return;
    }

    const dados = {
        nome: nome,
        apelido: apelido,
        nascimento: nascimento,
        email: email,
        senha: senha
    };

    try {
        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
           return alert('O apelido ou email já está em uso!');
        }

        //const resultado = await response.json();
        return alert('Usuário cadastrado com sucesso!');
        //console.log(resultado);
        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao cadastrar usuário');
    }
});


