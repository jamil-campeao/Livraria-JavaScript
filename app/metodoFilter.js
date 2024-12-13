const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', fFiltrarLivros));

function fFiltrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter
    (livro => livro.quantidade > 0) : livros.filter(livro => livro.
        categoria == categoria);
    fExibirOsLivrosNaTela(livrosFiltrados);
}