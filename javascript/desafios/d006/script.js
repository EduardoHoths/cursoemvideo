function converter(){
    let res = document.querySelector('#resultado')
    res.innerHTML = ''
    let cel = Number(prompt('Digite uma temperatura em ºC (Celcius)'))
    let subTit = document.createElement('h2')
    subTit.innerHTML = `A temperatura de ${cel.toLocaleString()}ºC, corresponde a...`
    res.appendChild(subTit)
    let kel = cel + 273.15
    let fah = cel * (9/5) + 32
    res.innerHTML += `<p>${kel.toLocaleString()}ºK (Kelvin)</p>`
    res.innerHTML += `<p>${fah.toLocaleString()}ºF (Fahrenheit)</p>`
}