import {Punto} from './distancia-entre-2-puntos'; 


class Triangulo {
  A: Punto; //variable:objeto de origuen?
  B: Punto;
  C: Punto;

  constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
    this.A = punto1;
    this.B = punto2;
    this.C = punto3;
  }

  Triangulo(): boolean {
    const distanciaAB = new Punto(this.puntoA.x1, this.puntoA.y1, this.puntoB.x1, this.puntoB.y1).calcularDistancia();
    const distanciaBC = new Punto(this.puntoB.x1, this.puntoB.y1, this.puntoC.x1, this.puntoC.y1).calcularDistancia();
    const distanciaCA = new Punto(this.puntoC.x1, this.puntoC.y1, this.puntoA.x1, this.puntoA.y1).calcularDistancia();

    console.log(`Distancia entre Punto A y Punto B: ${distanciaAB}`);
    console.log(`Distancia entre Punto B y Punto C: ${distanciaBC}`);
    console.log(`Distancia entre Punto C y Punto A: ${distanciaCA}`);


    // Verificar la propiedad triangular
    if (
      distanciaAB + distanciaBC > distanciaCA &&
      distanciaBC + distanciaCA > distanciaAB &&
      distanciaCA + distanciaAB > distanciaBC
    ) {
      return true; // Es un triángulo
    } else {
      return false; // No es un triángulo
    }
  }
}

//Coordenadas de puntos
const punto1 = new Punto(1,2,4,6);
const punto2 = new Punto(4,6,7,2);
const punto3 = new Punto(7,2,1,2);


const triangulo = new Triangulo(punto1, punto2, punto3);

if (triangulo.Triangulo()) {
  console.log('Los puntos forman un triángulo.');
} else {
  console.log('Los puntos no forman un triángulo.');
}