// distancia-entre-2-puntos.ts
export class Punto {
    constructor(public x: number, public y: number) {
      this.x = x;
      this.y = y;
    }
  
    // Método de instancia para calcular la distancia a otro punto
    calcularDistancia(punto: Punto): number {
      const distancia = Math.sqrt(
        (punto.x - this.x) ** 2 + (punto.y - this.y) ** 2
      );
      return distancia;
    }
  }
  
  // Crear dos puntos
  const punto1 = new Punto(1, 2);
  const punto2 = new Punto(4, 6);
  
  // Calcular la distancia
  const distancia = punto1.calcularDistancia(punto2);
  
  console.log(`La distancia entre los dos puntos es: ${distancia}`);
  