function verificar(){
    let preçoProdutoAntigo = Number(prompt('Qual era o preço anterior do produto?'))
    let preçoProdutoAtual = Number(prompt('Qual é o preço atual do produto?'))
    let res = document.querySelector('#resultado')
    let difValor = preçoProdutoAtual - preçoProdutoAntigo
    let variação = ((preçoProdutoAtual * 100) / preçoProdutoAntigo) - 100

    res.innerHTML = '<h1>Analisando os valores informados</h1>'
    res.innerHTML += `O produto custava ${preçoProdutoAntigo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${preçoProdutoAtual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`
    if(preçoProdutoAtual > preçoProdutoAntigo){
        res.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        res.innerHTML += `<p>O preço subiu ${difValor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de +${variação.toLocaleString()}%.</p>`
    } else {
        res.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        res.innerHTML += `<p>O preço caiu ${difValor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${variação.toLocaleString()}% .</p>`
    }
}