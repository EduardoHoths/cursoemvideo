let botao = document.getElementById('contar')
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passo = document.getElementById('passo')
let res = document.getElementById('resultado')

botao.addEventListener('click', contar)

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0) {
        alert('[ERRO] Digite os valores e tente novamente')
        res.innerHTML = '<p>Impossivel contar!</p>'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = '<p>Contando</p>'
        if (p == 0) {
            alert('Passo inválido. Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for (let index = i; index <= f; index += p) {
                res.innerHTML += `&#x1F449; ${index}`
            }            
        } else {
            for (index = i; index >= f; index -= p) {
                res.innerHTML += `&#x1F449; ${index}`
            }
            
        }
        res.innerHTML += `&#X1f3c1`        
    }

}







