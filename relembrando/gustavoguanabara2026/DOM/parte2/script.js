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