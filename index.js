document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'but'
    const buttons = document.querySelectorAll('.but');
    // Seleciona os elementos que têm as classes 'primeiro' e 'segundo'
    const primeiro = document.querySelector('.primeiro');
    const segundo = document.querySelector('.segundo');

    // Adiciona o evento de clique aos botões
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Alterna entre mostrar e esconder os conteúdos
            if (primeiro.style.display === 'none') {
                primeiro.style.display = 'flex'; // Mostra o conteúdo primeiro
                segundo.style.display = 'none';  // Esconde o conteúdo segundo
            } else {
                primeiro.style.display = 'none';  // Esconde o conteúdo primeiro
                segundo.style.display = 'flex';   // Mostra o conteúdo segundo
            }
        });
    });
});