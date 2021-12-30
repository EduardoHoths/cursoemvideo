let res = document.querySelector('#resultado')

function contar() {
    let item = document.createElement('h2')
    item.innerHTML = 'Contando de 1 até 10'
    res.appendChild(item)
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += ` ${c} &#X1F449;`
    }
    res.innerHTML += `&#X1F3C1;`
}


