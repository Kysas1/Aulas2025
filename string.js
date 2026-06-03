const abc = ['João','Maria',18,false];

const joao = abc[2];

console.log(joao);

abc.push('pedro')

console.log(abc);

abc.unshift('Gabriel');
console.log(abc);

abc.pop();
console.log(abc);

abc[3] = 'Mudei';
console.log(abc);

console.log(abc.indexOf(false));
const indexofp = abc.indexOf('João');
const sortednames = abc.sort();
console.log(sortednames);
const abcisarray = Array.isArray(abc); //verificar se é uma array 
console.log(abcisarray);