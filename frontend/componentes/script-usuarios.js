// 3- Cadastrando usuários

document.getElementById('cadastroUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/api/usuarios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            //return conteudoCadastrar.innerHTML = 'Erro ao cadastrar usuário!'
            throw new Error('Erro ao cadastrar usuário');
        }
        //return conteudoCadastrar.innerHTML = 'Usuário cadastrado com sucesso!' 
        alert('Usuário cadastrado com sucesso!');
        // Limpar o formulário após o cadastro
        this.reset();
    } catch (error) {
        console.error('Erro:', error);
        //return conteudoCadastrar.innerHTML = 'Erro ao cadastrar usuário! Tente novamente'
        alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.');
    }
});

