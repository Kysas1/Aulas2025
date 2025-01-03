var item1 = 'arroz' ;
var item2 = 'feijao' ;
var item3 = 'leite' ; 
var item4 = 'macarrao';

const lista = ['arroz',"feijao","leite","macarrao"]

let x = lista[3]
console.log(lista);
const pessoa = ['Pedro',27,'estudante','Homem']
pessoa.splice(1,0,"item adcionado1",'item adcionado2')
pessoa.push('Hetero');
console.log(pessoa);

const lista2 = ['Suco','Abacaxi','Carne'] ;
const lista3 = ['salgadinho']
const superlista = lista.concat(lista2,lista3);

const jogadores = ['ribamar','biro biro','pelé','maradona'];
const craques = jogadores.slice(2); 

const numeros = [30,22,11,10,25,33,47,100,50,44,67];
numeros.sort(function(a,b){return a-b});
    function maiornumero(array){
        return Math.max.apply(null, array);
}

    function menornumero(array){
        return Math.min.apply(null , array);
    }

console.log(menornumero(numeros))

const