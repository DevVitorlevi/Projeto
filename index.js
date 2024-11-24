// Seleciona todos os botões com a classe 'but'
const btns = document.querySelectorAll('.but')
// Seleciona os elementos que têm as classes 'primeiro' e 'segundo'
const first = document.querySelector('.primeiro')
const second = document.querySelector('.segundo')

// Adiciona o evento de clique aos botões
btns.forEach(button => {
    button.addEventListener('click', () => {
        // Alterna entre mostrar e esconder os conteúdos
        if (first.style.display === 'none') {
            first.style.display = 'flex' // Mostra o conteúdo primeiro
            second.style.display = 'none'  // Esconde o conteúdo segundo
        } else {
            first.style.display = 'none' // Esconde o conteúdo primeiro
            second.style.display = 'flex'   // Mostra o conteúdo segundo
        }
    })
})