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

let container = document.getElementById('horario')

container.addEventListener('mouseenter',enter);
container.addEventListener('mouseout', out) ; 
container.addEventListener('mousedown',mousedown)
container.addEventListener('mouseup', mouseup)

function enter(){
    container.style.border = '9px solid white'
    container.style.width = '350px'
    container.style.height = '250px'
    container.style.transition = '3s'
    container.style.color = 'black'
    container.style.cursor = 'pointer'
    container.style.backgroundColor ='purple'
    container.style.fon

}

function out(){
    container.style.width = '300px'
    container.style.height = '200px'
    container.style.transition = '3s'
    container.style.border = '3px solid black'
    container.style.backgroundColor = 'purple'
    container.style.color = 'white'
}

function mousedown(){
    container.style.backgroundColor = 'red'
}

function mouseup(){
    container.style.backgroundColor = 'purple'
}


