let dolar = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
while (dolar == 0){
    dolar = Number(prompt("Digite a cotação atual:"))
}
function converter(){
    let res = document.querySelector('#resultado')
    
    let carteira = Number(prompt('Quantos R$ você tem na carteira?'))
    let comprarDolar = carteira / dolar 
    
    res.innerHTML += `<h2>Com ${carteira.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL'})} é possível comprar ${comprarDolar.toLocaleString('en-us',{ style: 'currency', currency: 'usd'})} Dolar</h2>`
}