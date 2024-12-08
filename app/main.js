let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
fGetBuscarLivrosAPI();

async function fGetBuscarLivrosAPI() {
    const res = await fetch(endPointAPI);
    livros = await res.json();
    let livrosComDesconto = fAplicarDesconto(livros);
    fExibirOsLivrosNaTela(livros);
}