let res = document.querySelector('#resultado')
let inicio = document.querySelector('#inicio')
let fim = document.querySelector('#fim')

function contar() {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let subTit = document.createElement('h2')
    subTit.innerHTML = `Contando de ${i} até ${f}`
    res.appendChild(subTit)

    if (i == f) {
        res.innerHTML += 'Não é possível contar, pois os números são iguais &#X1F3C1;'
    } else {
        for(let c = i; c <= f; c++){
            res.innerHTML += ` ${c} &#X1F449;`
        }
    }
    res.innerHTML += '&#X1F3C1;'
}