
function pesquisar () {
    const busca = document.getElementById('pesquisa');
    const valor = busca.value
    
    console.log('https://www.google.com.br/search?q=' + valor);

    window.location.href = 'https://www.google.com.br/search?q=' + valor;
}

// dropdown

const dropButton = document.getElementById('dropButton');

function toggleMenu () {
    const icons = document.getElementById('icons');
    icons.classList.toggle('active')
}

dropButton.addEventListener('click', toggleMenu)