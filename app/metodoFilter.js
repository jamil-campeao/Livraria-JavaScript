const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', fFiltrarLivros));

function fFiltrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? fFiltrarPorDisponibilidade() : fFiltrarPorCategoria(categoria); 
    fExibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        const valorTotal = fCalcularValorTotalLivrosDisp(livrosFiltrados);
        fExibirValorTotalLivrosDisponiveis(valorTotal);
    }
}

function fFiltrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function fFiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function fExibirValorTotalLivrosDisponiveis(valorTotal) {
    elementoValorTotalLivrosDisp.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
} 