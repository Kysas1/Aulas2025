let btn = document.getElementById('btn')
btn.addEventListener('click',verificar)
let vel = document.getElementById('txtvel')
let p = document.getElementById('verificar')
console.log(vel)
    function verificar(){
        velocidade = Number(vel.value);
        if ( velocidade > 50) {
            p.textContent = 'Você foi multado ! '
        } else {
            p.textContent = 'Voce esta dentro do limite de velocidade'
        }
        p.innerHTML += '<p>Dirija com cuidado ! <br> Boa viagem !!</p>'
    }