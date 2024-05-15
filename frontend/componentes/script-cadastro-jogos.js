const nome = document.getElementById('nome-jogo');
const formularioCadastro = document.getElementById('cadastroJogos');

// Cadastrando Jogos
document.getElementById('btnCadastrarJogo').addEventListener('click', async function(event) {
    event.preventDefault();

    const formData = new FormData(formularioCadastro);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });


    if(nome.value.trim() !== ''){
        try {
            const response = await fetch('http://localhost:3000/api/jogos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                throw new Error('Erro ao cadastrar jogo');
            }

            alert('Jogo cadastrado com sucesso!');
            // Limpar o formulário após o cadastro
            formularioCadastro.reset();

        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao cadastrar o jogo. Por favor, tente novamente mais tarde.');
        }
    }
    else{
        alert('Por favor, preencha o nome do jogo!');
    }    
});