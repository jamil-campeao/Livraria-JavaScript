let btnOrdenarPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPreco.addEventListener('click', fOrdernarLivrosPorPreco);

function fOrdernarLivrosPorPreco() {
    let livrosOrdernados = livros.sort((a, b) => a.preco - b.preco);
    fExibirOsLivrosNaTela(livrosOrdernados);
}