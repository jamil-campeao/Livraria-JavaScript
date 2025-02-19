const elementosInserirLivros = document.getElementById('livros');
const elementoValorTotalLivrosDisp = document.getElementById('valor_total_livros_disponiveis');


function fExibirOsLivrosNaTela(listaLivros) {
    elementosInserirLivros.innerHTML = '';
    elementoValorTotalLivrosDisp.innerHTML = '';
    listaLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livros_imagens indisponivel'; 
        elementosInserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}"
            alt"${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    });
}