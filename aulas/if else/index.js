var interruptor = 'off';
    if (interruptor =='on'){
        console.log('Lampada ligada')
    } else {
        console.log('lampada esta desligada')
    }

var hora = new Date().getHours();
    if (hora<12) {
        console.log('Bom dia');
    }    else if (hora < 18) {
        console.log('Boa tarde')
    }   else {
        console.log('Boa noite')
    }

function verificar(){
    let nome = document.getElementById('nome').value;
    if (nome =='' || nome ==null) {
        let p = document.getElementById('teste');
        p.innerHTML = 'O Campo não pode estar vazio';
        p.style.color = 'red';
    } else {
        let p = document.getElementById('teste');
        p.innerHTML = 'Tudo certinho';
        p.style.color = 'green';
    }
}