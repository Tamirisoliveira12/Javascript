function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
   var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12 ){
        img.src = 'ex014/fotomanha.png'
        document.body.style.background = '#d9dad4'
    } else if (hora >= 12 && hora < 18){
        img.src = 'ex014/fototarde.png'
        document.body.style.background = '#f68209'
    } else {
        img.src = 'ex014/fotonoite.png'
        document.body.style.background = '#a183b9'
    }

}


