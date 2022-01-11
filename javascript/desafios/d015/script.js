function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fAno.value == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex =document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/menino.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'img/rapaz.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idoso.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'img/menina.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src', 'img/moça.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            }else{
                //Idoso
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}