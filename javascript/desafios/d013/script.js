function media(){
    let situação = document.querySelector('#situação')
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = Number(prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(prompt(`Segunda nota de ${nome}:`))
    let média = (n1 + n2) / 2
    
    situação.innerHTML += `<h2>Analisando a situação de ${nome}</h2>`
    situação.innerHTML += `<p>Com as notas ${n1.toLocaleString()} e ${n2.toLocaleString()} a <strong>média é ${média.toLocaleString()}</strong></p>`
    if(média >= 6){
        situação.innerHTML += `Com a média acima de 6,0, o aluno está <MARK style='background: lightgreen';><SPAN style='color: darkgreen';>APROVADO</SPAN></MARK>`
    } else if(média >=3 && média <6) {
        situação.innerHTML += `Com a média entre de 3,0 e 6,0, o aluno está em <MARK style='background: lightyellow';><SPAN style='color: orange';>RECUPERAÇÃO</SPAN></MARK>`
    }else{
        situação.innerHTML += `Com a média abaixo de 3,0, o aluno está <MARK style='background: rgba(255, 0, 0, 0.397)';><SPAN style='color: rgb(82, 6, 6)';>REPROVADO</SPAN></MARK>`
    }
}