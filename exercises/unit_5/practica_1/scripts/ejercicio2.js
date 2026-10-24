"use strict"

function escribirLinea(linea) {
   const parrafo = document.createElement('P');
   parrafo.textContent = linea;
   document.querySelector('.console').append(parrafo);
}

class Ordenador {
   constructor(marca, modelo, ram = 4, capacidad = 512, pulgadas = 17) {
      this.marca = marca;
      this.modelo = modelo;
      this.ram = ram;
      this.capacidad = capacidad;
      this.pulgadas = pulgadas;
   }

   toString() {
      return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ram: ${this.ram}GB, Disco duro: ${this.capacidad}GB, Pulgadas ${this.pulgadas}`;
   }
}

class Portatil extends Ordenador {
   constructor(marca, modelo, ram = 4, capacidad = 256, pulgadas = 12, autonomia = 4) {
      super(marca, modelo, ram, capacidad, pulgadas);
      this.autonomia = autonomia;
   }

   toString() { //Podemos usar el to string de ordenador y concatenarle los atributos propios de Portatil
      return super.toString() + `, Autonomía: ${this.autonomia} horas`;
   }
}

//Creamos un ordenador con marca, modelo, ram y dejamos el resto de atributos por defecto
const ordenador = new Ordenador('IBM', '5150', 8);
escribirLinea('Ordenador:');
escribirLinea(ordenador.toString());

//Creamos un portatil únicamente con marca y modelo y dejamos el resto de propiedades por defecto
const portatil = new Portatil('Toshiba', 'NB200');
escribirLinea('Portatil:');
escribirLinea(portatil.toString());

//Creamos un portatil definiendo todos los atributos
const portatil2 = new Portatil('HP', 'H521', 16, 512, 28, 3);
escribirLinea('Portatil 2:')
escribirLinea(portatil2.toString());