var idade =  76 // recebendo o valor da idade
if (idade >= 18 && idade < 70) { // se a idade for maior e igual a 18 ou menor que 70 (1)
    console.log('voto obrigatório') // bloco executado se a condição (1) for verdadeira (escrever na tela: voto obrigatório)
} else if (idade >= 16 || idade >= 70) { // se a prmeira condição for falsa e a idade for maior ou igual a 16 ou maior ou igual a 70 (2)
        console.log('voto opcional')// bloco executado se a condição (2) for respeitada ( escrever na tela : voto opcional)
}   else {
        console.log('voto não permitido') //bloco executado se a condição (2) não for respeitada ( escrever na tela : voto não permitido)
    }


    