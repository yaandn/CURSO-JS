var dia = new Date() // variável dia recebe o new date para ser modififcada com os dias da semana
var diaSem = dia.getDay() // variável diaSem recebe a modificação da variável dia com os dias da semana

/* (valores dos dias da semana no JS)
domingo: valor 0
segunda: valor 1
terça: valor  2
quarta: valor 3
quinta: valor 4
sexta: valor 5
sábado: valor 6
 */

switch(diaSem) { // o switch case estabelece umaa ação caso a condição das cases seja respeitada
    case 0:
        console.log('domingo')
        break
    case 1: 
        console.log('segunda')
        break
    case 2: 
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}