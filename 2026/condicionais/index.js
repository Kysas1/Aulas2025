const sum = 1 + 2
console.log(sum)

if (sum === 2 ) {
    console.log('Resultado deu 2 ')
} else if (sum ===3) {
    console.log('resultado deu 3')
}
else {
    console.log('Resultado não deu 2 ')
}

const sum2 = 1+2
const sum3 = 3+3  

if (sum2 === 4 && sum3 ==6 ) {
    console.log('A variavel 2 deu 4 e a variavel 3 deu 6 ! ')
}

if (sum2 === 4 || sum3 ===6 ) {
    console.log('A Variavel deu 4 ou 6')
}

const car = 'Mercedes'

switch(car) {
    case 'Mercedes':
        console.log('Mercedes é linda')
        break
    case 'Ferrari':
        console.log('Ferrari é linda')
        break
    default :
    console.log('não é nenhum');
}