
interface Alumno{
    nombre:string;
    apellido:string;
    edad:number;
    curso:string;
    direccion?:string;
}


const alumno:Alumno={
    nombre: "Juan",
    apellido: "lopez",
    edad: 22,
    curso: "Ingles",
    
}

console.table(alumno)

//----------------------------Arreglos
let mascotas=['perro','gato','perico'];

console.log(mascotas[0]);
mascotas[1]='nuevo gato';       //reemplaza el lugar 2 a otro nombre
mascotas.push('hamster');       //permite agergar un elemento al arreglo

//----arreglo 2
let tem:(number|string)[]=[]
tem.push(1);        //admite numero
tem.push('dos');    //admite strings
console.log(tem)
