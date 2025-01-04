class Carro {
    constructor(valor1,valor2,valor3){
        this.marca = valor1 ;
        this.modelo = valor2 ;
        this.ano = valor3 ;

    }
    buzina(){
        return  this.modelo+ ' buzinou:  biiiiiii '
    }
}

const carro = {
    marca:'Fiat',
    modelo:'uno',
    ano:2021
}

const uno = new Carro('fiat','uno', 2020)
console.log(uno)
const gol = new Carro('Volkswagem' , 'Gol' , 2022)
console.log(gol.buzina())