function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       //res.innerHTML = `Idade calculado: ${idade}`
       var gênero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
      
       if(fsex[0].checked){
        gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-menino.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'homem-adulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
       } else if (fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança-menina.png')
            }else if (idade < 21){
                // jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos<br><br>`
       res.appendChild(img)
    }
}
