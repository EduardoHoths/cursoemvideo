function desconto(){
    let produto = prompt('Qual é o produto que você está comprando?')
    let preço = Number(prompt(`Qual o valor do ${produto}?`))
    let res = document.querySelector('#resultado')
    let desc = (preço * 0.10)
    let valorF = preço - desc
    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>Preço original era ${preço.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `No fim, você vai pagar ${valorF.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${produto}. `
}