let botao1 = document.querySelector('.acao1')
let botao2 = document.querySelector('.acao2')
let botao3 = document.querySelector('.acao3')
let botao4 = document.querySelector('.acao4')
let registro = document.querySelector('.registro')

botao1.addEventListener('click', acao1)
botao2.addEventListener('click', acao2)
botao3.addEventListener('click', acao3)
botao4.addEventListener('click', acao4)

function acao1(){
    registro.innerHTML += '<p>Você clicou no primeiro botão.</p>'
}
function acao2(){
    registro.innerHTML += '<p>Você clicou no segundo botão.</p>'
}
function acao3(){
    registro.innerHTML += '<p>Você clicou no terceiro botão.</p>'
}
function acao4(){
    registro.innerHTML += '<p>Você clicou no quarto botão.</p>'
}
