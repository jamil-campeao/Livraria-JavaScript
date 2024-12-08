let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
fGetBuscarLivrosAPI();
const elementosInserirLivros = document.getElementById('livros');


async function fGetBuscarLivrosAPI() {
    const res = await fetch(endPointAPI);
    livros = await res.json();
    console.table(livros);
    fExibirOsLivrosNaTela(livros);
}


function fExibirOsLivrosNaTela(listaLivros) {
    listaLivros.forEach(livro => {
        elementosInserirLivros.innerHTML += `
            <div class="livro">
            <img class="livro__imagens" src="${livro.imagem}"
            alt"${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    });
}