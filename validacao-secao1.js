const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const forms = document.querySelectorAll('.form')
const inputs = document.querySelectorAll('.input')
const required = document.querySelectorAll('.span-required')

document.addEventListener('keydown', (evt) => {
    if (evt.key == 'Enter') {
        impedirEnvio(evt)
    }
})
forms.forEach(form => {
    form.addEventListener('submit', impedirEnvio)
})
function impedirEnvio(ev) {
    ev.preventDefault()//Impedir o Envio do Form
    ValidarNome()
    ValidarEmail()
    ValidarSenha()
    EnvioEmail()
    EnvioSenha()
}

inputs[0].addEventListener('input', ValidarNome)
inputs[1].addEventListener('input', ValidarEmail)
inputs[2].addEventListener('input', ValidarSenha)
inputs[3].addEventListener('input', EnvioEmail)
inputs[4].addEventListener('input', EnvioSenha)

function CasoError(indice) {
    inputs[indice].style.border = '2px solid #ff2401'
    required[indice].style.display = 'block'
}

function NotError(indice) {
    inputs[indice].style.border = ''
    required[indice].style.display = 'none'
}

function ValidarNome() {
    if (inputs[0].value.length < 3) {
        CasoError(0)
    } else {
        NotError(0)
    }

}
function ValidarEmail() {
    if (emailRegex.test(inputs[1].value)) {
        NotError(1)
    } else {
        CasoError(1)
    }
}
function ValidarSenha() {
    if (inputs[2].value.length < 8) {
        CasoError(2)
    } else {
        NotError(2)
    }
}
function EnvioEmail() {
    if (emailRegex.test(inputs[3].value)) {
        NotError(3)
    } else {
        CasoError(3)
    }
}
function EnvioSenha() {
    if (inputs[4].value.length < 8) {
        CasoError(4)
    } else {
        NotError(4)
    }
}