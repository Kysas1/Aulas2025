function contagem(){
 //   document.getElementById('tempo').innerHTML = 'Começou a contar! '
  //  tempo = setTimeout(function(){
        //ativa a função uma vez quando der o tempo especificado ! 
  //      document.getElementById('tempo').innerHTML = 'executou o settimeout! '
 //       document.body.style.backgroundColor ='gray'
 //   }, 5000)
    tempo = setInterval(function(){
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1 ;
        
        if (soma === 0 ) {
            document.getElementById('tempo').innerHTML ='Tempo esgotado'
            clearInterval(tempo);
        } else {
            document.getElementById('tempo').innerHTML = soma 
        }
        
    },1000)
}

//para o setTimeout
function parar() {
    clearInterval(tempo);
  //  document.getElementById('tempo').innerHTML = 'Parou a contagem!'
}