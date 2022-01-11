function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'img/manha-editado.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'img/tarde-editado.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src = 'img/noite-editado.png'
        document.body.style.background = '#515154'
    }
}
