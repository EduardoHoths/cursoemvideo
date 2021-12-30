function converter(){
    let num = Number(prompt('Digite um distância em metros (m)'))
    let res = document.querySelector('#resultado')
    res.innerHTML = ''
    let subTit = document.createElement('h2')
    subTit.innerHTML = `A distância de ${num.toLocaleString()} metros, corresponde a...`
    res.appendChild(subTit)
    let km = num / 1000
    let hm = num / 100
    let dam = num / 10
    let dm =  num * 10
    let cm =  num * 100
    let mm = num * 1000
    res.innerHTML += `<p>${km.toLocaleString()} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm.toLocaleString()} hectômetros (hm)</p>`
    res.innerHTML += `<p>${dam.toLocaleString()} decâmetros (dam)</p>`
    res.innerHTML += `<p>${dm.toLocaleString()} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm.toLocaleString()} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm.toLocaleString()} milímetros (mm)</p>`
}