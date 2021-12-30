let num = document.querySelector('#num')
let res = document.querySelector('#resultado')

function tabuada(){
    let n = Number(num.value)
    let subTit = document.createElement('h2')
    subTit.innerHTML += `Tabuada de ${n}`
    res.appendChild(subTit)
    for(let index = 0; index <=10; index++){
        res.innerHTML += `${n} x ${index} = <strong>${n * index}</strong> <br>`
    }
}