let res = document.querySelector('#resultado')

function contar(){
    res.innerHTML = '<p>Aperte o botão acima para contar</p>'
    let subTitulo = document.createElement('h2')
    subTitulo.innerHTML = 'Contando de 1 até 10, marcando os pares'
    res.appendChild(subTitulo)
    for (let c = 1; c <= 10; c++){        
        if(c % 2 == 0){
            res.innerHTML += `<mark> <strong>${c}</strong> </mark> &#X1F449;`
        }else{
            res.innerHTML += ` ${c} &#X1F449;`
        }
    }
    res.innerHTML += `&#X1F3C1;`
}