const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

const diaSem = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

let res = document.querySelector('#res')

function analise() {
    let agora = new Date()
    let dia = agora.getDate()
    let mes = month[agora.getMonth()]
    let ano = agora.getFullYear()
    let diaSemana = diaSem[agora.getDay()]
    let horas = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()
    
    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${diaSemana}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${horas}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`    
}