"use strict"

const capa1 = document.getElementById('capa1');
const capa2 = document.getElementById('capa2');

capa1.addEventListener('dragstart', function () { //Al iniciar el arrastre bajamos la opacidad al 50%
   this.style.opacity = 0.5;
});

capa1.addEventListener('dragend', function () {   //Si finaliza el arrastre recuperamos su opacidad normal
   this.style.opacity = 1;
});


capa2.addEventListener('dragover', function (e) {  //Al pasar por encima de capa 2, arrastrando un objeto, cambiamos su color a rojo
   e.preventDefault();   //Por defecto no se puede soltar algo sobre un objeto, al evitar esa comportamiento por defecto, a capa2 se le puede soltar algo
   this.style.backgroundColor = 'red';
})

capa2.addEventListener('dragleave', function () { //Si dejamos de arrastrar un objeto por encima volvemos al color blanco
   this.style.backgroundColor = 'white';
});

//Como solo tenemos un objeto posible para arrastrar, no es necesario que comprobemos que objeto es el que se le ha soltado
capa2.addEventListener('drop', function (e) { //Si soltamos un objeto(solo hay uno posible: capa1) 
   this.textContent = 'Lo has logrado';       // cambiamos su mensaje
   this.backgroundColor = 'white';            // Le devolvemos el color blanco
   capa1.style.display = 'none';              //capa1 se oculta
});