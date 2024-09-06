let livros = [
    {
      nome: "It: A Coisa",
      autor: "Stephen King",
      preco: 84.58,
      imagem: "./assets/it.jpg",
      genero: "terror",
      link: "https://www.amazon.com.br/coisa-Stephen-King/dp/8560280944"
    },

    {
        nome: "O Chamado de Cthulhu",
        autor: "H.P. Lovecraft",
        preco: 58.83,
        imagem: "./assets/chamado.jpg",
        genero: "terror",
        link: "https://www.amazon.com.br/Chamado-Cthulhu-H-P-Lovecraft/dp/6555981083/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr="
    },

    {
        nome: "Entrevista com o Vampiro",
        autor: "Anne Rice",
        preco: 54.60,
        imagem: "./assets/annerice.jpg",
        genero: "terror",
        link: "https://www.amazon.com.br/Entrevista-vampiro-EDI%C3%87%C3%83O-CAPA-DURA/dp/8532531830"
    },

//     {
//         nome: "Eu, Robô",
//         autor: "Isaac Asimov",
//         preco: 45.99,
//         imagem: "./assets/Eu_Robo.jpg",  // Substitua por um caminho de imagem válido
//         genero: "ficção cientifica"
//     },

//     {
//         nome: "2001: Uma Odisseia no Espaço",
//         autor: "Arthur C. Clarke",
//         preco: 62.50,
//         imagem: "./assets/2001_Uma_Odisseia_no_Espaço.jpg",  // Substitua por um caminho de imagem válido
//         genero: "ficção cientifica"
//     },

//     {
//         nome: "Duna",
//         autor: "Frank Herbert",
//         preco: 59.90,
//         imagem: "./assets/Duna.jpg",  // Substitua por um caminho de imagem válido
//         genero: "ficção cientifica"
//     },

//     {
//         nome: "O Senhor dos Anéis",
//         autor: "J.R.R. Tolkien",
//         preco: 75.00,
//         imagem: "./assets/O_Senhor_dos_Aneis.jpg",  // Substitua por um caminho de imagem válido
//         genero: "fantasia"
//     },

//     {
//         nome: "A Guerra dos Tronos",
//         autor: "George R.R. Martin",
//         preco: 68.99,
//         imagem: "./assets/A_Guerra_dos_Tronos.jpg",  // Substitua por um caminho de imagem válido
//         genero: "fantasia"
//     },

//     {
//         nome: "O Livro do Cemitério",
//         autor: "Neil Gaiman",
//         preco: 53.75,
//         imagem: "./assets/O_Livro_do_Cemiterio.jpg",  // Substitua por um caminho de imagem válido
//         genero: "fantasia"
//     }

    
//     // ... outros livros
];

    let section = document.getElementById('booksContent');

    for (let dado of livros) {

    section.innerHTML += `

    <div class="books-content" id="booksContent">

        <div class="books-list" id="terror">

            <div class="livro">
                <a href="${dado.link}" target="_blank"><img src="${dado.imagem}" alt="Capa do livro 1"></a>
                <h2>${dado.nome}</h2>
                <p>Autor: ${dado.autor}</p>
                <p>Preço: R$${dado.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            </div>
        
        </div>

        `;
    };

 

