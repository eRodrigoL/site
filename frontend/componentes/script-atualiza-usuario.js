function formatarData(data) {
     // Extrai apenas a parte da data (ano, mês e dia) da string
     const [ano, mes, dia] = data.split('T')[0].split('-');
     return `${ano}-${mes}-${dia}`;
}


// Preenche os dados no formulário
document.addEventListener('DOMContentLoaded',  function() {
    // Recupera os dados do localStorage
    
    const nome = localStorage.getItem('nome');
    const apelido = localStorage.getItem('apelido');
    const email = localStorage.getItem('email');
    const nascimento = localStorage.getItem('nascimento');

    // Preenche os campos do formulário com os dados recuperados
    if (nome) {
        document.getElementById('nome-usuario').value = nome;
    }
    if (apelido) {
        document.getElementById('apelido-usuario').value = apelido;
    }
    if (email) {
        document.getElementById('email-usuario').value = email;
    }
    if (nascimento) {
        const dataFormatada = formatarData(nascimento);
        document.getElementById('nascimento-usuario').value = dataFormatada;
    }
});

const form = document.getElementById('atualizarUsuarios');
 form.addEventListener('submit', async function(event) {
     event.preventDefault(); // Impede o comportamento padrão do formulário
 
     const id = localStorage.getItem('id');
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
 
         if (response.ok) {
             alert('Usuário atualizado com sucesso!');
             // Atualiza os dados no localStorage
             localStorage.setItem('nome', responseData.usuario.nome);
             localStorage.setItem('apelido', responseData.usuario.apelido);
             localStorage.setItem('email', responseData.usuario.email);
             localStorage.setItem('nascimento', responseData.usuario.nascimento);
         } else {
             alert(`Erro ao atualizar usuário: ${responseData.msg}`);
         }
     } catch (error) {
         console.error('Erro:', error);
         alert('Erro ao atualizar usuário.');
     }
 });



 






