const itemsPerPage = 15;
let currentPage = 1;
let items = [];

async function fetchItems() {
    try {
        const response = await fetch('https://api-noob-1.onrender.com/api/jogos');
        if (!response.ok) {
            throw new Error(`Erro HTTP! status: ${response.status}`);
        }
        items = await response.json();
        renderItems();
    } catch (error) {
        console.error('Erro ao buscar itens:', error);
    }
}

function renderItems() {
    const listaJogo = document.getElementById('lista-jogo');
    listaJogo.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'jogo-item';

        const imgSrc = item.capa || '../../backend/uploads/1714174787744.jpg';
        const categoria = item.categoria || '(categoria não informada)';

        itemElement.innerHTML = `
            <a href="jogo.html?id=${item._id}">
                <img src="${imgSrc}" alt="${item.titulo}">
                <h3>${item.titulo}</h3>
                <p>${categoria}</p>
            </a>
        `;
        
        listaJogo.appendChild(itemElement);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(items.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.disabled = i === currentPage;
        button.addEventListener('click', () => {
            currentPage = i;
            renderItems();
        });
        pagination.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', fetchItems);
