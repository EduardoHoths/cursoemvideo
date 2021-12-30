let res = document.querySelector('#resultado')

function contar() {
    res.innerHTML = '<p>Aperte o botão acima para contar</p>'
    let subTit = document.createElement('h2')
    subTit.innerHTML = 'Contagem Regressiva de 10 a 1'
    res.appendChild(subTit)
    for (let c = 10; c >= 1; c--){
        res.innerHTML += ` ${c} &#X1F449;`
    }
    res.innerHTML += '&#X1F3C1;'
}