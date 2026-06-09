const numbers = [1,2,3,4,5]
const numbersx2 = numbers.map(function(x2){
    return x2 * 2
})

console.log(numbersx2);
const idades = [2,18,22,35,56];
//const idadespares = idades.filter(function(par){
//    return par % 2 === 0 
//})

//console.log(idadespares)

 const idadesreduce = idades.reduce(function(reduced , acumulator){
    return reduced + acumulator
 },0);

 console.log(idadesreduce);