const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', fFiltrarLivros));

function fFiltrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    fExibirOsLivrosNaTela(livrosFiltrados);
}