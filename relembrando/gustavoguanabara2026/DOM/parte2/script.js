let a = window.document.getElementById('p');
a.addEventListener('click',clicar)
a.addEventListener('mouseenter',entrou)
a.addEventListener('mouseout',saiu)
function clicar(){
    a.textContent = 'Clicou';
    a.style.backgroundColor = 'Red';
    a.style.width = '500px';
    a.style.height = '400px';
    a.style.color = 'black';
    a.style.transition = '0.5s';
}

function entrou(){
    a.innerText = 'Entrou';
    a.style.height = '350px';
    a.style.width = '450px';
    a.style.transition = '1.0s';
}

function saiu(){
    a.innerText = 'saiu';
    a.style.backgroundColor = 'purple';
    a.style.height ='300px';
    a.style.width = '400px';
    a.style.color = 'white';
    a.style.transition = '1.0s'
}

let calculo = document.getElementById('calculo');
calculo.addEventListener('click',somar)
calculo.addEventListener('mouseenter', mouseenter)
calculo.addEventListener('mouseout',mouseout)



function somar(){
    let tn1 = document.getElementById('txtn1');
    let tn2 = document.getElementById('txtn2');
    let res = document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2 
    res.innerHTML = `A soma entre ${n1} e ${n2} deu ${s}`
    calculo.style.backgroundColor ='white'
        if (n1 == " "){
            res.innerHTML = 'Por favor, insira um valor.'
        };
    let reset = document.getElementById('reset')
    reset.addEventListener('click', resetar)
    function resetar(){
        tn1.value = ' '
        tn2.value = ' '
        res.textContent = ' Insira os numeros para somar '
    }
}

function mouseenter(){
    calculo.style.backgroundColor = 'red'
    calculo.style.cursor = 'pointer'
    calculo.style.width = '70px;'
    calculo.style.transition = '1s'
}



function mouseout(){
    calculo.style.backgroundColor = 'white'
    calculo.style.transition = '1s'
}


