// Declarando constantes e atribuindo os elementos ID para elas
const searchInput = document.getElementById('inputSearch');
const searchButton = document.getElementById('buttonSearch');
const searchResultsContainers = document.querySelectorAll('.search-results-container');

// Função para realizar a pesquisa com comparação exata
function performSearch(searchTerm) {
    searchResultsContainers.forEach(container => {
        const genre = container.dataset.genre.toLowerCase();

        if (genre === searchTerm) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

// Adicionando um evento para o click do mouse no botão 'Pesquisar'
searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    performSearch(searchTerm);
});

// Adicionando um evento para a tecla 'Enter' do teclado
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase().trim();
        performSearch(searchTerm);
    }
});

//======================================================================

function buscarLivros() {
    const genero = document.getElementById('inputGenre').value;
    const publico = document.querySelector('inputPublic').value;
    const valorMaximo = document.getElementById('inputValor').value;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${genero}+${publico}&maxResults=40`; // Adapte a URL para a API escolhida

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Processar os dados da API e exibir os resultados
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = ''; // Limpar resultados anteriores

            data.items.forEach(item => {
                const livro = item.volumeInfo;
                const divLivro = document.createElement('div');
                divLivro.innerHTML = `
                    <h2>${livro.title}</h2>
                    <p>Autor: ${livro.authors}</p>
                    <p>Preço: ${livro.saleInfo.saleability === 'FOR_SALE' ? livro.saleInfo.retailPrice.amount : 'Não disponível'}</p>
                `;
                resultados.appendChild(divLivro);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar livros:', error);
        });
}