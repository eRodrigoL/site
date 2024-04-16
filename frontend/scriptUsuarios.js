// Importando elementos
const usuarioId = document.getElementById('usuarioId');
const usuarioIdDeletar = document.getElementById('usuarioIdDeletar');
const btnPesquisar = document.getElementById('btnPesquisar');
const btnListar = document.getElementById('btnListar');
const conteudo = document.getElementById('conteudo');
const conteudoDeletar = document.getElementById('conteudoDeletar');
const conteudoCadastrar = document.getElementById('conteudoCadastrar');
const conteudoListar = document.getElementById('conteudoListar');
const image = document.getElementById('img');
const btnReset = document.getElementById('btnReset');
const containerResult = document.getElementById('result-style');
const btnDeletar = document.getElementById('btnDeletar');


// MANIPULANDO OS USUÁRIOS

// 1 - Pesquisando um usuário por ID:

// função que busca os dados desejados da API a partir da chave do usuário
const fetchApi = (value) => {
    const result = fetch(`http://localhost:3000/api/usuarios/${value}`)
    .then((res) => res.json())
    .then((data) => {
        /*console.log(data);*/
        return{
            cpf :data.cpf,
            nome: data.nome,
            apelido: data.apelido,
            email: data.email,
            senha: data.senha,
            nascimento: data.nascimento
        }; 
    });

    return result;
}


// função que configura o botão de pesquisa, esperando o resultado da API e imprimindo na tela.

btnPesquisar.addEventListener('click', async(event) => {
    event.preventDefault();

    if(usuarioId.value === ''){
        return conteudo.innerHTML = 'É necessário fazer um filtro';
    }
    else{
       /* containerResult.className ='result-style';*/
        let resultadoFormatado = '';
    
        const result = await fetchApi(usuarioId.value);
        /*conteudo.textContent = `${JSON.stringify(result, undefined, 2)}`;*/

// convertendo o JSON para uma forma mais legível de leitura 
        for (const key in result){
            resultadoFormatado += `${key} : ${result[key]}\n`;
        }

    conteudo.textContent = resultadoFormatado;
     /*foto.src = `${result.foto}`;*/
    }  
});

btnReset.addEventListener('click', () => location.reload());


// 2- Listando todos os usuários

async function listarUsuarios() {
    const userListElement = document.getElementById('conteudoListar');

    try {
        const response = await fetch('http://localhost:3000/api/usuarios/');
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Erro ao obter usuários');
        }

        // Limpar a lista antes de adicionar os novos registros
        userListElement.textContent = '';

        data.forEach(user => {
            userListElement.textContent += `CPF: ${user.cpf}, Nome: ${user.nome}, Apelido: ${user.apelido}, Email: ${user.email}, Data de Nascimento: ${user.nascimento}\n`;
        });
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao obter a lista de usuários. Por favor, tente novamente mais tarde.');
    }
}



// 3 - Deletando os usuários

btnDeletar.addEventListener('click', async(event) => {
    event.preventDefault();

    const valor = usuarioIdDeletar.value;

    try {
        const result = await fetch(`http://localhost:3000/api/usuarios/${valor}`,{
        method: 'DELETE'});

        if (result.ok){
           console.log(`Usuario com ID ${valor} excluido com sucesso.`);
           return conteudoDeletar.innerHTML = 'Usuário excluido com sucesso';
        }
        else{
           return conteudoDeletar.innerHTML = 'Erro ao excluir usuário';
        }
   } catch (error) {
       console.error('Ocorreu um erro:', error);
   }
    
});


// 3- Cadastrando usuários

document.getElementById('cadastroUsuarios').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    try {
        const response = await fetch('http://localhost:3000/api/usuarios/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            return conteudoCadastrar.innerHTML = 'Erro ao cadastrar usuário!'
            //throw new Error('Erro ao cadastrar usuário');
        }
        return conteudoCadastrar.innerHTML = 'Usuário cadastrado com sucesso!' 
        //alert('Usuário cadastrado com sucesso!');
        // Limpar o formulário após o cadastro
        this.reset();
    } catch (error) {
        console.error('Erro:', error);
        return conteudoCadastrar.innerHTML = 'Erro ao cadastrar usuário! Tente novamente'
        //alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente mais tarde.');
    }
});


// FIM DA MANIPULAÇÃO DOS USUÁRIOS