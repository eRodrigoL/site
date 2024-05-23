document.addEventListener('DOMContentLoaded', function() {
    const formularioCadastro = document.getElementById('cadastroJogos');
    const titulo = document.getElementById('titulo-jogo');
    const modal = document.getElementById('modal');

    // Cadastrando Jogos
    document.getElementById('btnCadastrarJogo').addEventListener('click', async function(event) {
        console.log('você clicou em Cancelar')
        event.preventDefault();

        const formData = new FormData(formularioCadastro);
        const userData = {};
        formData.forEach((value, key) => {
            userData[key] = value;
        });

        if (titulo.value.trim() !== '') {
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
                // Fechar o modal após o cadastro
                modal.style.display = 'none';

            } catch (error) {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao cadastrar o jogo. Por favor, tente novamente mais tarde.');
            }
        } else {
            alert('Por favor, preencha o titulo do jogo!');
        }
    });

    // Fechar o modal ao clicar em cancelar
    document.getElementById('btnCancelarJogo').addEventListener('click', function() {
        console.log('você clicou em Cancelar')
        modal.style.display = 'none';
    });

    // Fecha o modal quando o usuário clica fora dele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
