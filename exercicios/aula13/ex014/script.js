function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var corpo = window.document.getElementById('corpo')
    var data = new Date()
    var hora = data.getHours()
    msg.innerText = `Agora são ${hora} horas`
    if ( hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        corpo.style.background = '#EFD8AB'
    } else if (hora >=  12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        corpo.style.background = '#C5816D'
    } else {
        img.src = 'imagens/noite.png'
        corpo.style.background = '#0B191C'
    }
}

