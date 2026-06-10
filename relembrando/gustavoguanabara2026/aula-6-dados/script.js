let nome = window.prompt('Qual o seu nome ?');
window.alert('Olá '+ nome)

let n1 = Number(window.prompt('Digite um numero: '));
let n2 = Number(prompt('Digite outro numero: '));
let s = n1 + n2 
console.log(`A soma entre ${n1} e ${n2} é ${s}`)

// number + number = soma
// string + string = concatenação

let idade = 19

let r = idade >=18 ? 'Maior de idade' : 'Menor de idade';
console.log(idade + r);
