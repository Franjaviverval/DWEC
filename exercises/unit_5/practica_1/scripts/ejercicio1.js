"use strict"

function escribirLinea(linea) {
   const parrafo = document.createElement('P');
   parrafo.textContent = linea;
   document.querySelector('.console').append(parrafo);
}

function crearRectangulo(min, max) { //Usaremos dimensiones sin decimales para reducir el número de posibilidades
   return new Rectangulo(Math.floor(min + Math.random() * (max - min)), Math.floor(min + Math.random() * (max - min)));
}

class Rectangulo {
   ancho;
   alto;
   constructor(ancho, alto) {
      this.cambiarDimensiones(ancho, alto);
   }

   cambiarDimensiones(ancho, alto) {
      this.ancho = ancho < 1 ? 1 : ancho;
      this.alto = alto < 1 ? 1 : alto;
   }

   calcularArea() {
      //Calculamos el area y redondeamos con una precision de 2 decimales.
      return Math.round(this.ancho * this.alto * 100) / 100;
   }

   copia() {
      return new Rectangulo(this.ancho, this.alto);
   }

   comparar(otro) {
      const diferencia = this.calcularArea() - otro.calcularArea();
      if (diferencia === 0)
         return 'igual';
      return diferencia < 0 ? 'menor' : 'mayor';
   }
}

//Creamos un rectangulo de prueba
const rectangulo1 = new Rectangulo(10, 5);
//Creamos una copia. cuando modifiquemos rectangulo1 veremos que copia mantiene los valores originales
const copia = rectangulo1.copia();

escribirLinea('El área de rectangulo1 original: ' + rectangulo1.calcularArea());
//reducimos las dimensiones y probamos que no puede tener dimensiones menores a 1
rectangulo1.cambiarDimensiones(3, -2);
//mostramos nuevamente el área para verificar que se han modificado las dimensiones. y que el -2 se ha convertido en 1
escribirLinea('El área de rectangulo1 después de reducir sus dimensiones: ' + rectangulo1.calcularArea());
escribirLinea('El área de la copia es: ' + copia.calcularArea() + '. El valor que tenia rectangulo1 al copiarse.');

//realicemos 10 comparaciones para comprobar diferentes casos.
const rectangulos = [];
for (let i = 0; i < 10; i++)
   rectangulos.push([crearRectangulo(1, 5), crearRectangulo(1, 5)]); //creamos 10 parejas de rectangulos

for (const pareja of rectangulos) //Mostramos el resultado
   escribirLinea(`El área ${pareja[0].calcularArea()} es ${pareja[0].comparar(pareja[1])} que ${pareja[1].calcularArea()}`);


