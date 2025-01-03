function verificacor() {
    let cor = document.getElementById('cor').value ;
    cor = cor.toLowerCase(); //transforma tudo em minusculo para o '' ==== ''
    switch(cor) {
        case 'azul' :
            //algo
            document.body.style.backgroundColor = 'blue';
            break ;
        case 'amarelo' :
            //algo
            document.body.style.backgroundColor = 'yellow'
            break ;
        case 'vermelho' : 
            //algo
            document.body.style.backgroundColor = 'red'
            break;
        default :
            let p = document.getElementById('teste')
            p.innerHTML = 'Escolha uma cor primaria'
            p.style.color ='red'
            //algo
    }
}

let dia = new Date().getDay();
let txtd = document.getElementById('txtdia')
    switch (dia){
        case 0 :
            txtd.innerHTML ='Hoje é Domingo!';
            break;
        case 1 :
            txtd.innerHTML ='Hoje é Segunda-Feira!';
            break;
        case 2 : 
            txtd.innerHTML ='Hoje é Terça-Feira!';
            break;
        case 3 : 
            txtd.innerHTML ='Hoje é Quarta-Feira!';
            break;
        case 4 :
            txtd.innerHTML ='Hoje é Quinta-Feira!';
            break;
        case 5 :
            txtd.innerHTML ='Hoje é Sexta-Feira!'
            break;
        case 6 : 
            txtd.innerHTML ='Hoje é Sabado !'
            break;
        default :
            txtd.innerHTML ='Erro!'
    }