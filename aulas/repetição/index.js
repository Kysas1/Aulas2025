
var data = new Date().getFullYear();
for (let ano = data; ano >= 1900 ; ano--){
    document.getElementById('ano').innerHTML += "<option value='"+ano+"'>"+ano+"</option>";
}
const carros = ['maclaren','ferrari','williams','benneton']
let tamanho = carros.length

for (let i= 0 ; i < tamanho ; i++) {
    console.log(carros)
}