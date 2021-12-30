function reajustar(){
    let nome = prompt('Qual o nome do colaborador?')
    let sal = Number(prompt(`Qual o salário de ${nome}?`))
    let porc = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let res = document.querySelector('#resultado')
    let aum = sal * porc/100
    let novoSal = sal + aum

    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    res.innerHTML += `<p>O salário atual era de ${sal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>`
    res.innerHTML += `<p>Com um aumento de ${porc.toLocaleString()}%, o salário vai aumentar ${aum.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${novoSal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.</p>`
}