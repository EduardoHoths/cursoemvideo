

function fatorial() {
    let num = document.querySelector('#num')
    let res = document.querySelector('#resultado')
    let n = Number(num.value)
    if (n > 21 || n <= 0) {
        res.innerHTML = ''
    } else {
        let subTit = document.createElement('h2')
        subTit.innerHTML += `Calculando ${n}!`
        res.appendChild(subTit)
        let fat = 1
        for (let c = n; c > 1; c--) {
            fat *= c
            res.innerHTML += `${c} x `
            
        }
        res.innerHTML += `1 = <strong>${fat.toLocaleString()}</strong>`
    }

}