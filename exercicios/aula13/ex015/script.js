
function verificar() {
    var data = new Date()
    var fano = data.getFullYear()
    var anotxt = window.document.getElementById('anotxt')
    var ano = Number (anotxt.value)
    var res = window.document.getElementById('res')
    if (ano == 0 || ano > fano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else  {
        var fsex = document.getElementsByName('radsex')// armazenando o input radio na variável fsex
        var idade = fano - ano
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) { // se o usuário marcar masculino
            var gênero = 'Homem'
            if (idade >=0 && idade < 12) {
                img.setAttribute('src', 'imagens/criançah.png')
            } else if (idade < 24) {
                img.setAttribute('src' , 'imagens/adolescenteh.png')
            } else if (idade < 50) {
                img.setAttribute('src','imagens/adultoh.png')
            } else {
                img.setAttribute('src','imagens/idosoh.png')
            }
        } else if (fsex[1].checked) { // se o usuário marcar feminino
            var gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute('src' , 'imagens/criançam.png')
            } else if (idade < 24) {
                img.setAttribute('src' , 'imagens/adolescentem.png')
            } else if (idade < 50){
                img.setAttribute('src' , 'imagens/adultom.png')
            } else {
                img.setAttribute('src', 'imagens/idosom.png')
            }       
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
        img.style.marginTop = '10px'
    }
 }
        

            
        

    
   



