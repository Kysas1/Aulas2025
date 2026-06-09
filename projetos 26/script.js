let hora = new Date();

let horario = hora.getHours() +':' + hora.getMinutes()+':'+ hora.getSeconds();

console.log(horario)

let horariofull = document.querySelector('.display');

horariofull.textContent = 'horario;' ;

