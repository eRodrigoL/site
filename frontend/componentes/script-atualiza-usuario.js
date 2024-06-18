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


 






