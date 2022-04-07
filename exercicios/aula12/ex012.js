var agora = new Date() // a variável agora recebe o valor new Date()
var hora = agora.getHours() // a variável hora recebe o valor da hora atual a partir da modificação da var agora


console.log(`A hora atual é ${hora} horas.`) //Informando a hora atual
if ( hora >= 18 && hora <= 23 ) {  // se a hora atual estiver entre 18 e 23 (1)
    console.log('Boa noite!')  // se 1 for verdadeira ecreve na tela: (boa noite!)
} else if ( hora >= 12) {  // se 1 não for verdade e hora maior igual a 12 (2)
    console.log('Boa tarde!') // se 2 for verdadeira ecreve na tela: (boa tarde!)
} else if (hora >= 5) { // se 2 não for verdade e hora maior igual a 5 (3)
    console.log('Bom dia!') // se 2 for verdadeira ecreve na tela: (Bom dia!)
} else { // se 3 não for verdade
    console.log('Boa madrugada!') // escreve na tela: (Boa madrugada!)
}