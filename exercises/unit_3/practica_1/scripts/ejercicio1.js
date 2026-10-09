"use strict"

// A) Crea el siguiente array:
const data = [
   { name: "Nacho", telephone: "966112233", age: 40 },
   { name: "Ana", telephone: "911223344", age: 35 },
   { name: "Mario", telephone: "611998877", age: 15 },
   { name: "Laura", telephone: "633663366", age: 17 }
];

// B) Añade dos elementos al final

data.push({ name: "Pedro", telephone: "611944444", age: 25 },
   { name: "Julia", telephone: "633232323", age: 37 });

// C) Comprueba con console.log (data) que se han añadido

console.log(data);

// D) Ordena el vector por edad, comprueba el resultado

data.sort(function (element1, element2) { return element1.age - element2.age });
console.log(data);

// E) Ordena el vector por nombre, comprueba el resultado

data.sort(function (element1, element2) { return element1.name.localeCompare(element2.name) });
console.log(data);

// F) Crea y muestra un nuevo vector que contenga solo los mayores de 30 años

const greaterThan30 = data.filter(function (element) {
   return element.age > 30;
});

console.log(greaterThan30);