function formatarData(data) {

     // Extrai apenas a parte da data (ano, mês e dia) da string
     const [ano, mes, dia] = data.split('T')[0].split('-');
     return `${ano}-${mes}-${dia}`;
}


// Preenche os dados no formulário
document.addEventListener('DOMContentLoaded', async function() {
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




