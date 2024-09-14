// comprobar-el-triangulo.ts
import { Punto } from './distancia-entre-2-puntos'; // Importar la clase Punto

// Crear una clase que maneja la verificación del triángulo
class Triangulo {
  punto1: Punto;
  punto2: Punto;
  punto3: Punto;

  constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
    this.punto1 = punto1;
    this.punto2 = punto2;
    this.punto3 = punto3;
  }

  // Método para verificar si los tres puntos forman un triángulo
  esTriangulo(): boolean {
    const distancia12 = this.punto1.calcularDistancia(this.punto2);
    const distancia23 = this.punto2.calcularDistancia(this.punto3);
    const distancia31 = this.punto3.calcularDistancia(this.punto1);

    // Verificar la propiedad triangular
    if (
      distancia12 + distancia23 > distancia31 &&
      distancia23 + distancia31 > distancia12 &&
      distancia31 + distancia12 > distancia23
    ) {
      return true; // Es un triángulo
    } else {
      return false; // No es un triángulo
    }
  }
}

// Crear tres puntos
const punto1 = new Punto(1, 2);
const punto2 = new Punto(4, 6);
const punto3 = new Punto(7, 2);

// Crear una instancia de Triangulo
const triangulo = new Triangulo(punto1, punto2, punto3);

// Verificar si los puntos forman un triángulo
if (triangulo.esTriangulo()) {
  console.log('Los puntos forman un triángulo.');
} else {
  console.log('Los puntos no forman un triángulo.');
}
