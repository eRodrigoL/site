document.getElementById('cadastroUsuarios').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obter os valores do formulário
    var nome = document.getElementById('nome-usuario').value;
    var apelido = document.getElementById('apelido-usuario').value;
    var nascimento = document.getElementById('nascimento-usuario').value;
    var email = document.getElementById('email-usuario').value;
    var senha = document.getElementById('senha-usuario').value;
    var confirmacao = document.getElementById('confirmacao').value;
    var foto = document.getElementById('foto-usuario').files[0]; // apenas o primeiro arquivo

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

    // Criar um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('nome', nome);
    formData.append('apelido', apelido);
    formData.append('nascimento', nascimento);
    formData.append('email', email);
    formData.append('senha', senha);
    formData.append('confirmacao', confirmacao);

    // Verificar se foi selecionada uma foto
    if (foto) {
        formData.append('file', foto);
    }

    // Enviar a requisição POST para a API
    fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário.');
        }
        return response.json();
    })
    .then(data => {
        alert('Usuário cadastrado com sucesso!');
        // Limpar o formulário após o cadastro
        document.getElementById('cadastroUsuarios').reset();
    })
    .catch(error => {
        alert(error.message);
    });
});    
 
// Limpa o formulário quando clico em cancelar
    document.getElementById('btnCancelar').addEventListener('click', function() {

    document.getElementById('cadastroUsuarios').reset();
});
    


