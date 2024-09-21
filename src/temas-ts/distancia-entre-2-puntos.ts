export class Punto {
     x1:number;
     y1:number;
     x2:number;
     y2:number;
    
     constructor(x1:number,y1:number,x2:number,y2:number) {      
      this.x1 = x1;
      this.y1 = y1;
      this.x2 = x2;
      this.y2 = y2;
    }
  
    calcularDistancia():number {
      const distancia = Math.sqrt((this.x2 - this.x1) ** 2 + (this.y2 - this.y1) ** 2);
      return distancia;
    }
  }
  
  // Dos puntos
  const punto = new Punto(-4,3,2,5);
  const distancia = punto.calcularDistancia();  
  console.log(`La distancia entre los dos puntos es: ${distancia}`);
  