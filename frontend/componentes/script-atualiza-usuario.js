function formatarData(data) {
    const [ano, mes, dia] = data.split('T')[0].split('-');
    return `${ano}-${mes}-${dia}`;
}

async function carregarDadosUsuario() {
    const id = localStorage.getItem('id');
    if (!id) {
        console.error('ID do usuário não encontrado no localStorage.');
        return;
    }

    try {
        const response = await fetch(`https://api-noob-1.onrender.com/api/usuarios/${id}`);
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados do usuário: ${response.statusText}`);
        }

        const usuario = await response.json();

        // Preencher os campos do formulário com os dados do usuário
        document.getElementById('nome-usuario').value = usuario.nome || '';
        document.getElementById('apelido-usuario').value = usuario.apelido || '';
        document.getElementById('email-usuario').value = usuario.email || '';
        if (usuario.nascimento) {
            const dataFormatada = formatarData(usuario.nascimento);
            document.getElementById('nascimento-usuario').value = dataFormatada;
        }
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        alert('Erro ao carregar dados do usuário.');
    }
}

// Executar a função quando o conteúdo do DOM estiver carregado
document.addEventListener('DOMContentLoaded', carregarDadosUsuario);


document.getElementById('atualizarUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    const id = localStorage.getItem('id');
    console.log('User ID:', id); // Verificar o ID

    const nome = document.getElementById('nome-usuario').value;
    const apelido = document.getElementById('apelido-usuario').value;
    const email = document.getElementById('email-usuario').value;
    const nascimento = document.getElementById('nascimento-usuario').value;
    const file = document.getElementById('upload').files[0];
    

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('apelido', apelido);
    formData.append('email', email);
    formData.append('nascimento', nascimento);
    if (file) {
        formData.append('file', file);
    }

    try {
        const response = await fetch(`https://api-noob-1.onrender.com/api/usuarios/${id}`, {
            method: 'PUT',
            body: formData
        });

        const responseData = await response.json();
        console.log('API Response:', responseData); // Log da resposta completa

        if (response.ok) {
            console.log('nome', responseData.usuario.nome);
            console.log('apelido', responseData.usuario.apelido);
            console.log('email', responseData.usuario.email);
            console.log('nascimento', responseData.usuario.nascimento);

            alert('Usuário atualizado com sucesso!');
            // Atualiza os dados no localStorage
           /* localStorage.setItem('nome', responseData.usuario.nome);
            localStorage.setItem('apelido', responseData.usuario.apelido);
            localStorage.setItem('email', responseData.usuario.email);
            localStorage.setItem('nascimento', responseData.usuario.nascimento);*/
        } else {
            alert(`Erro ao atualizar usuário: ${responseData.msg}`);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar usuário.');
    }
});


 






