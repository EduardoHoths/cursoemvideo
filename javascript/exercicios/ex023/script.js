let res = document.querySelector('#resultado')

function contar(){
    res.innerHTML = '<p>Aperte o botão acima para contar</p>'
    let subTit = document.createElement('h2')
    subTit.innerHTML = 'Números pares de 1 até 10'
    res.appendChild(subTit)
    for (let c = 1; c <=10; c++){
        if (c % 2 == 0){
            res.innerHTML +=` ${c} &#X1F449;`
        }
    }
    res.innerHTML += `&#X1F3C1;`
}