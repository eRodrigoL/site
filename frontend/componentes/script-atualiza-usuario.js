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
    const apiUrl = `https://api-noob-1.onrender.com/api/usuarios/${id}`;

    // Cria um objeto FormData a partir do formulário
    const formData = new FormData();
    formData.append('nome', document.getElementById('nome-usuario').value);
    formData.append('apelido', document.getElementById('apelido-usuario').value);
    formData.append('nascimento', document.getElementById('nascimento-usuario').value);
    formData.append('email', document.getElementById('email-usuario').value);

    // Adiciona o arquivo de foto, se houver
    const fileInput = document.getElementById('upload');
    if (fileInput.files.length > 0) {
        formData.append('file', fileInput.files[0]);
    }

    try {
        // Faz a requisição PUT para a API
        const response = await fetch(apiUrl, {
            method: 'PUT',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar usuário: ${response.statusText}`);
        }

        const data = await response.json();
        alert('Usuário atualizado com sucesso!');
        console.log('Usuário atualizado:', data);

        // Atualiza os dados no localStorage
        localStorage.setItem('nome', data.usuario.nome);
        localStorage.setItem('apelido', data.usuario.apelido);
        localStorage.setItem('nascimento', data.usuario.nascimento);
        localStorage.setItem('email', data.usuario.email);
        localStorage.setItem('src',data.usuario.src);

        carregarDadosUsuario();

    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao atualizar usuário. Por favor, tente novamente.');
    }
});


document.getElementById('upload').onchange = function (evt) {
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // Verifica se foi selecionada alguma imagem
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            var img = document.getElementById('preview-img');
            img.src = fr.result;
            img.style.display = 'block'; // Exibe a imagem
        }
        fr.readAsDataURL(files[0]);
    }
};






 






