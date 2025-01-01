let pote = 'bombom';
alert(pote);

var a = 2 ;
var b = 3 ; 
var c = a+b ;
console.log(c);

//declaração - 

var d,e,f ;

// ATRIBUIÇÃO 
d = 1 ;
e = 2 ;
f = 3;

console.log(d,e,f) ;

var nome , sobrenome, nomeCompleto,idade,soma,pessoa ; 

idade = 27 ;
nome = 'Pedro';
sobrenome = 'Muniz';
nomeCompleto = nome+" " + sobrenome;
soma = idade + 10;
pessoa = nome +" " + idade +" Anos";
document.getElementById('texto').innerHTML = pessoa;


//let 
let n1 = 'joao' ;
let na2 = 'joaquim' ;
console.log(n1 +" "+ na2) ;

var x = 10 ; //aqui é 10

{
    var x = 2; //aqui é 2
}

document.getElementById('texto2').innerHTML = x ; //aqui tbm vai ser dois pq foi redefinido