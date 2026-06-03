const person = {
    firstname: 'Pedro',
    lastname: 'Muniz',
    age : '28' ,
    hobbies : ['ler','estudar'],
    dog: {
        name:'Simba',
        age: 16,
    }
}

//const firstname = person.firstname ;
//const lastname = person.lastname ;
//const age = person.age ;
//const hobbies = person.hobbies ;

const {firstname: primeironome,lastname,age,hobbies} = person

console.log(primeironome);
console.log(lastname);
console.log(age);
console.log(hobbies);

const read = person.hobbies[1];
// person.dog = 'Simba'
console.log(person.dog)
