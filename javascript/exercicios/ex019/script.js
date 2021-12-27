let botao = document.querySelector('button')
let resultado = document.querySelector('section')

botao.addEventListener('click', calcular)

function calcular(){
    let n1 = Number(prompt('Digite o primeiro valor:'))
    let n2 = Number(prompt('Digite o segundo valor: '))
    let escolha = Number(prompt(`Valores informados ${n1} e ${n2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))

    switch (escolha){
        case 1: 
            let somar = n1 + n2
            resultado.innerHTML = '<h2>Calculando...</h2>'
            resultado.innerHTML += `${n1} + ${n2} = <strong>${somar}</strong>` 
            break;
        case 2:
            let subtrair = n1 - n2
            resultado.innerHTML = '<h2>Calculando...</h2>'
            resultado.innerHTML += `${n1} - ${n2} = <strong>${subtrair}</strong>` 
            break
        case 3:
            let multiplicar = n1 * n2
            resultado.innerHTML = '<h2>Calculando...</h2>'
            resultado.innerHTML += `${n1} * ${n2} = <strong>${multiplicar}</strong>`             
            break
        case 4:
            let dividir = n1 / n2
            resultado.innerHTML = '<h2>Calculando...</h2>'
            resultado.innerHTML += `${n1} / ${n2} = <strong>${dividir}</strong>`            
            break
    }
}