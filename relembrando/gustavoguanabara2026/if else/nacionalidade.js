let btn = document.getElementById('btn')
btn.addEventListener('click',clicar)
function clicar(){
    let nac = document.getElementById('inp1')
    let valor = nac.value
    let res = document.getElementById('res')
    if (valor == 'Brasil') {
        res.innerHTML = 'Você é Brasileiro'
    } else if (valor == 'brasil') {
        res.innerHTML = 'Voce é Brasileiro'
            }else if (valor == 'br') {
                res.innerHTML = 'Voce é Brasileiro'
        }       else if ( valor == 'BR') {
                    res.innerHTML = 'Voce é Brasileiro'
        }           else {
                        res.innerHTML = 'Voce é Estrangeiro'
        }
    
    
}