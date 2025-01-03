function soma(valor1,valor2){ //função de soma
    return valor1+valor2;
}
document.getElementById('texto').innerHTML = soma(15,10) ;

var total = soma(10,10);
console.log(total);

function realParaDolar(real,cotacaoDolar){ //função de cotação de dolar
    return real * cotacaoDolar ;
}
var valorreal = 10.88;
var cotacao = 6.10;
var moeda = realParaDolar(valorreal, cotacao);
console.log("O Valor em real é : "+valorreal+" e em dolar é : "+moeda);
function start(){
    alert("hello world")
}
function paraCelsius(valorFahrenheit){
    return ( 5/ 9 ) * (valorFahrenheit - 32);
}
var x = paraCelsius(77);
console.log("a temperatura esta de "+ x + " Graus Celsius");