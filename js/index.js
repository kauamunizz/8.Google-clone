'stric mode';

const index = (() => {
    function pesquisar () {
        const { campo } = document.forms.busca;
        
        location.href = 'https://www.google.com.br/search?q=' + campo.value;
    }

    function events() {
        document.forms.busca.addEventListener('submit', event => {
            event.preventDefault();
        
            pesquisar();
        });

        document.querySelectorAll('.submit').forEach(element => {
            element.addEventListener('click', pesquisar);
        });
    
        document.getElementById('dropButton').addEventListener('click', () => {
            const icons = document.getElementById('icons');
            icons.classList.toggle('active');
        });
    }

    function init() {
        events();
    }

    return { init };
})();

index.init();