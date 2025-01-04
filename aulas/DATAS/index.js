let data = new Date();
// console.log(data);

// ano atual com 4 digitos
let ano = data.getFullYear();
console.log(ano);

// Pegar o mes atual
let mes = data.getMonth();
console.log(mes)

// mes no formato escrito
const meses = ['janeiro','fevereiro','março','abril'] ; 
let mesescrito = meses[data.getMonth()] ;
console.log(mesescrito)

//pegar o dia do mes 
let diaMes = data.getDate();
console.log(diaMes)

// dia da semana
let diaSemana = data.getDay();
const dia = ['domingo','segunda','terça','quarta','quinta','sexta','sabado'];
let diaS = dia[data.getDay()] ;
console.log(diaS);

// pegar hora 
let hora = data.getHours();
console.log(hora)
let minutos = data.getMinutes();
console.log(hora+minutos)

let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR)

let hoje = new Date() ; 
let vencimento = new Date(2025,0,3);
if (hoje > vencimento) {
    console.log('sua conta venceu') ; 
} else {
    console.log('Tudo certinho')
}
//diferencas de duas datas em dias
let dataInicial = new Date();
let dataFinal = new Date(2025,11,31);
let diferencatempo = dataFinal.getTime() - dataInicial.getTime();
let diferencaDias = Math.ceil(diferencatempo / (24*60*60*1000)) ;
console.log(diferencaDias + ' dias')