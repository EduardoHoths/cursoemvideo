let botao = document.querySelector('button')
let resultado = document.querySelector("section")

botao.addEventListener('click', estacoes)

function estacoes(){
    let mes = prompt('Digite o mês (ex: Setembro ou 9)')
    let estacao 
    switch(mes.toUpperCase()){
        case '1': case 'JANEIRO': case '2': case 'FEVEREIRO': case '3': case 'MARÇO':
            estacao = 'VERÃO'
            break
        case '4': case 'ABRIL': case '5': case 'MAIO': case '6': case 'JUNHO':
            estacao = 'OUTONO'
            break
        case '7': case 'JULHO': case '8': case 'AGOSTO': case '9': case 'SETEMBRO':
            estacao = 'INVERNO'
            break
        case '10': case 'OUTUBRO': case '11': case 'NOVEMBRO': case '12': case 'DEZEMBRO':
            estacao = 'PRIMAVERA'
            break
        default:
            estacao = 'INDEFINIDA'
    }
    resultado.innerHTML = `<p>No mês de <mark>${mes.toUpperCase()}</mark>, estamos na estação <mark>${estacao}</mark></p>`
}