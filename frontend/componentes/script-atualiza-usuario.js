function formatarData(data) {
    const [ano, mes, dia] = data.split('T')[0].split('-');
    return `${ano}-${mes}-${dia}`;
}

async function carregarDadosUsuario() {
    const id = localStorage.getItem('id');
   // const src = localStorage.getItem('src');

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
        if(usuario.src){
            const imgElement = document.getElementById('preview-img');
            imgElement.src = usuario.src;
    
        }
       
    } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        alert('Erro ao carregar dados do usuário.');
    }
}

document.addEventListener('DOMContentLoaded', carregarDadosUsuario());


// atualização de perfil

document.getElementById('atualizarUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const id = localStorage.getItem('id');
    const apiUrl =  `https://api-noob-1.onrender.com/api/usuarios/${id}`;

   
    // Captura os dados do formulário
    const nome = document.getElementById('nome-usuario').value;
    const apelido = document.getElementById('apelido-usuario').value;
    const dataNascimento = document.getElementById('nascimento-usuario').value;
    const email = document.getElementById('email-usuario').value;

    // Cria o objeto com os dados do usuário
    const usuario = {
        nome: nome,
        apelido: apelido,
        nascimento: dataNascimento,
        email: email
    };

    try {
        // Faz a requisição PUT para a API
        const response = await fetch(apiUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
        }

        const data = await response.json();
        alert('Usuário atualizado com sucesso!');
        console.log('Usuário atualizado:', data);
        carregarDadosUsuario();

        
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar usuário. Por favor, tente novamente.');
    }
});







 






