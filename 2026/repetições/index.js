for ( let index = 0; index <= 10 ; index ++ ){
    console.log(index);
}

const car = ['Ferrari', 'BMW' , 'MCLaren']

for ( let i = 0 ; i < car.length ; i++ ){
   console.log(car[i])
}

for ( let carro of car) {
    console.log(carro)
}

car.forEach(function(car, index){
    console.log(index)
    console.log(car)

})

