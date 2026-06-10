function atualizartempo(){
    let hora = new Date();

    let horario = correcao(hora.getHours()) +':' + correcao(hora.getMinutes())+':'+ correcao(hora.getSeconds());
    let horariofull = document.querySelector('.display');
    horariofull.textContent = horario ;
}
function correcao(numero){
    if(numero < 10){
        numero = '0' + numero
    } return numero
}
atualizartempo();
setInterval(atualizartempo, 1000)



