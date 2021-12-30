function calcular(){
    let res = document.querySelector('#resultado')
    let a = Number(prompt('Qual é o valor de a?'))
    let b = Number(prompt('Qual é o valor de b?'))
    let c = Number(prompt('Qual é o valor de c?'))
    let delta = (b ** 2) - (4 * a * c)
    res.innerHTML = '<h2>Resolvendo Bhashara</h2>'
    res.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b} + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&#X2206; = ${b}<sup>2</sup> - 4 * ${a} * ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <mark><strong>&#X2206; = ${delta}</strong></mark></p>`
}