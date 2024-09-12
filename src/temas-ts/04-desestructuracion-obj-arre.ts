
interface Reproductor{
    volume:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volume:50,
    segundo:10,
    cancion:"Valiente",
    detalles:{
        autor:"party cantu",
        year:2018
    }

}

console.log(`El volumen actual es: ${reproductor.volume} `);
console.log(`Los segundos son: ${reproductor.segundo} `);
console.log(`La cancion es: ${reproductor.cancion} `);
console.log(`el cantante es: ${reproductor.detalles.autor} `);
console.log(`el año es: ${reproductor.detalles.year} `);


const{volume,segundo, cancion, detalles}= reproductor;
const{autor, year}=detalles;

console.log(`El volumen actual es: ${volume}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La cancion es: ${cancion}`);
console.log(`el cantante es: ${autor}`);
console.log(`el año es: ${year}`);

const dbz: string[]=['Goku','Majinbu','Babidy','Freezer'];
console.log(`Personaje 1 ${dbz[0]}`);
console.log(`Personaje 1 ${dbz[1]}`);
console.log(`Personaje 1 ${dbz[2]}`);
console.log(`Personaje 1 ${dbz[3]}`);

const[a,,b]=dbz;
console.log(`Personaje 1 ${a}`)
console.log(`Personaje 1 ${b}`)