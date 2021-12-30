function verificar(){
    let res = document.querySelector('#resultado')
    let ano = Number(prompt('Qual é o ano que você quer verificar?'))
    res.innerHTML = `<H2>Analisando o ano de ${ano}...</H2>`
    if (ano % 4 == 0){
        res.innerHTML += `<p>
            O ano de ${ano} <strong>
                <mark style='background: rgba(0, 128, 0, 0.472)';><span style='color: rgb(4, 71, 4)';>É BISSEXTO</span></mark>
            </strong>&#X2705;
        </p>`
    } else {
        res.innerHTML += `<p>
        O ano de ${ano} <strong>
            <mark style='background: rgba(255, 0, 0, 0.534)';><span style='color: rgb(83, 5, 5)';>NÃO É BISSEXTO</span></mark>
        </strong>&#X274C;
    </p>`
    }
}