
function pesquisar () {
    const busca = document.getElementById('pesquisa');
    const valor = busca.value
    
    console.log('https://www.google.com.br/search?q=' + valor);

    window.location.href = 'https://www.google.com.br/search?q=' + valor;
}
