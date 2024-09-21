import { Punto } from './distancia-entre-2-puntos';

class Triangulo extends Punto {
  puntoB: Punto;
  puntoC: Punto;

  constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    super(x1, y1, x2, y2);
    this.puntoB = new Punto(x2, y2, x3, y3);
    this.puntoC = new Punto(x3, y3, x1, y1);
  }

  esTriangulo(): boolean {
    
    const distanciaAB = this.calcularDistancia();
    const distanciaBC = this.puntoB.calcularDistancia();
    const distanciaCA = this.puntoC.calcularDistancia();

    console.log(`Distancia entre Punto A y Punto B: ${distanciaAB}`);
    console.log(`Distancia entre Punto B y Punto C: ${distanciaBC}`);
    console.log(`Distancia entre Punto C y Punto A: ${distanciaCA}`);

    if (
      distanciaAB + distanciaBC > distanciaCA && distanciaBC + distanciaCA > distanciaAB && distanciaCA + distanciaAB > distanciaBC
    ) {
      return true; // Es un triángulo
    } else {
      return false; // No es un triángulo
    }
  }
}

                    //PUNTOS DE AX,AY,BX,BY,CX,CY
const triangulo = new Triangulo(1, 2, 4, 6, 7, 2);

if (triangulo.esTriangulo()) {
  console.log('Los puntos forman un triángulo.');
} else {
  console.log('Los puntos no forman un triángulo.');
}
