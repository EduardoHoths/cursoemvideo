let num = document.querySelector("#num")
let tab = document.querySelector('#seltab')

for(let c = 0; c <= 10; c++){
    let item = document.createElement('option')
    item.text = '0 x 0'
    tab.appendChild(item)
}

function gerarTabuada() {
    if (num.value.length == 0) {
        alert('[ERRO] Digite um número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (index = 0; index <= 10; index++) {
            let item = document.createElement('option')
            item.text = `${n} x ${index} = ${n * index}`
            tab.appendChild(item)
        }
    }


}