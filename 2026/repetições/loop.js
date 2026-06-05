let index = 0 ;

while (index < 10 ){
    console.log('index é menor que 10')
    index++
}

let person = {
    name:'Maria',
    age:34,
};

for (property in person){
    console.log(person[property]);
} // não é muito performatico 

