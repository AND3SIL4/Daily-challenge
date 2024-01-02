const SayHello = name => {
    console.log(`Hello, ${name} my name is Andres`);
}

SayHello("Perro");

// Desestructuración de un array
let arr = ['uno', 'dos', 'tres'];
let [a, b, c] = arr;
console.log(
    a,
    b,
    c
);

// Desestructuración de un objeto
let obj = {
    name: 'Andres',
    lastName: 'Silva',
    age: 21,
    location: 'Bogota'
};
let {name, lastName, age, city, location} = obj;
console.log(
    name,
    lastName,
    age,
    location
); 
