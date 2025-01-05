const carro = {marca:'fiat' , modelo:'uno' , ano:2001 , motor: ['1.6','1,4','1.0']}
// conversão para texto
let texto = JSON.stringify(carro);
document.getElementById('area').innerHTML = texto ;

//conversao para obj
let obj = JSON.parse(texto);
console.log(obj.modelo);
console.log(obj.motor[2])

function buscarcep(){
    let input = document.getElementById('cep').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET' ,'https://viacep.com.br/ws/' + input +'/json/');
    ajax.send();
    ajax.onload = function(){
         document.getElementById('texto').innerHTML = this.responseText;
        let objec = JSON.parse(this.responseText);
        let logradouro = objec.logradouro ; 
        let cidade = objec.localidade;
        let estado = objec.uf;
        // document.getElementById('texto').innerHTML = "Logradouro: "+logradouro+"<br> Cidade: "+cidade+"<br> Estado:"+estado ;
    }
}




