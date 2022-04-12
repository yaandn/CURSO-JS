function clicar() {
    let txtinicio = window.document.getElementById('txtinicio')
    let txtfim = window.document.getElementById('txtfim')
    let txtpasso = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')
    

    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0 ) {
         window.alert('[ERRO] Faltam dados !')
    } else {
        res.innerHTML = 'Contando:'
        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
            res.innerHTML += ` ${c }`
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
            res.innerHTML += ` ${c} `
            }
        }

    }
   
        
}
    

   


