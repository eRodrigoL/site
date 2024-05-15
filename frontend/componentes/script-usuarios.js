document.getElementById('cadastroUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o comportamento padrão do formulário

    // Obter os valores do formulário
    const nome = document.getElementById('nome-usuario').value;
    const apelido = document.getElementById('apelido-usuario').value;
    const nascimento = document.getElementById('nascimento-usuario').value;
    const email = document.getElementById('email-usuario').value;
    const senha = document.getElementById('senha-usuario').value;
    const confirmacao = document.getElementById('confirmacao').value;
    const foto = document.getElementById('foto-usuario').files[0]; // apenas o primeiro arquivo

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
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('apelido', apelido);
    formData.append('nascimento', nascimento);
    formData.append('email', email);
    formData.append('senha', senha);

    // Verificar se foi selecionada uma foto
    if (foto) {
        formData.append('file', foto);
    }
    else{
        formData.append('file', "#");
    }

    // Enviar a requisição POST para a API
    try{
        const response = await fetch('http://localhost:3000/api/usuarios', {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        //throw new Error('O seu email ou apelido já está em uso, por gentileza alterar!');
        return alert('O seu email ou apelido já está em uso, por gentileza alterar!');
    };

    alert('Usuário cadastrado com sucesso!');
    document.getElementById('cadastroUsuarios').reset();

    } catch(error){
        console.log(error);
        alert('Teste');
    }
}); 
