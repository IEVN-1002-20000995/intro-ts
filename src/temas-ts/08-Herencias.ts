class Persona3{
    protected nombre:string;                //private y protected es simplemente pareceido
    protected edad:number;
    constructor(nombre:string, edad:number){    //solo hace uso del valor cuando se usa la instancia de  este
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){                             //en este caso es publico a no ponerle nada
        console.log("Nombre: "+this.nombre+"Edad: "+this.edad);
    }
}

class Empleado extends Persona3{    //palabra reservada extends El padre es persona 3 y empleado es el hijo
    private sueldo:number;
    constructor(nombre:string, edad:number, sueldo:number){ //tiene su propui constructor, 3 parametros 2 del padre y el 3ro del hijo
        super(nombre,edad);     //con la funcion SUPER pasa los parametros hasta el padre 
        this.sueldo=sueldo;
    }
    imprimir(): void {
        console.log(`Sueldo ${this.sueldo}`)
    }
    pagaImpuestos(){
        if(this.sueldo >5000)
            console.log(`${this.nombre} debe pagar impuestos`);
        else
        console.log(`${this.nombre} no debe pagar impuestos`)
    }
}
const persona3= new Persona3(' Juan ',44);
persona3.imprimir();

const empleado1=new Empleado('Ana',22,7000)
empleado1.imprimir();
empleado1.pagaImpuestos();