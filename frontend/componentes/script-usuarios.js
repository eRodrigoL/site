const senha = document.getElementById('senha-usuario');
const confirmacao = document.getElementById('confirmacao');
const btnCancelar = document.getElementById('btnCancelar');
const btnCadastrarUsuario = document.getElementById('btnCadastrarUsuario');

// Cadastrando usuários

document.getElementById('cadastroUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    if (senha.value == confirmacao.value){

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
    }
    else{
        alert('As senhas não correspondem, por favor tentar novamente!');
    }
 
});


// Realiza o upload de imagens para a rota  http://localhost:3000/api/imagensUsuario

document.getElementById("btnCadastrarUsuario").addEventListener("click", function() {
    // Obter o elemento de entrada de arquivo
    var input = document.getElementById('foto-usuario');
    // Verificar se um arquivo foi selecionado
    if (input.files && input.files[0]) {
        var file = input.files[0];
        // Criar um objeto FormData para enviar a imagem
        var formData = new FormData();
        formData.append('file', file);

        // Criar uma solicitação XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // Definir a função de callback para quando a solicitação estiver concluída
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log("Imagem enviada com sucesso!");
            } else {
                console.error("Erro ao enviar imagem:", xhr.statusText);
            }
        };

        // Abrir a solicitação
        xhr.open('POST', 'http://localhost:3000/api/imagensUsuario', true);

        // Enviar a solicitação com o FormData contendo a imagem
        xhr.send(formData);
    } else {
        console.error("Nenhuma imagem selecionada.");
    }
});

