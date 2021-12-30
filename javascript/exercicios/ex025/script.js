let final = document.querySelector('#fim')
let res = document.querySelector("#resultado")

function contar() {
    let f = Number(final.value)
    if (f <= 0) {
        alert('Digite um número positivo ou maior que zero para contar!')
    } else {
        let subTit = document.createElement('h2')
        subTit.innerHTML = `Contando de 0 até ${f}`
        res.appendChild(subTit)
        for(let c = 0; c <= f; c++){
            res.innerHTML += ` ${c} &#X1F449;`
        }
    }
    res.innerHTML += '&#X1F3C1;'
}