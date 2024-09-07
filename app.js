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
