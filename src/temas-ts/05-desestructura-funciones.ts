//regrese ,ás de un parametro, las funciones regresan mas de un visualViewport, en caso de necesidad donde regrese un valor 
export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'Sony Erickson',
    precio: 500
}
const tablet:Producto={
    desc:'Samsung',
    precio:7642
}
function calcularIVA(productos:Producto[]):number{      //la funcion regresa un numerico
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio
    })
    return total*0.16;
}
const articulo1=[telefono, tablet, telefono];
const iva1=calcularIVA(articulo1)
console.log(`IVA : ${iva1}`)

export function calcularIVA2(productos:Producto[]):[number,number]{ //regresa 2 valores numericos
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio
    })
    return [total, total*0.16];
}
const articulo2=[telefono,tablet];
const [total,iva2]=calcularIVA2(articulo2);//aqui empieza la desestructuracion de la funcion
console.log(`Total: ${total}`)
console.log(`IVA: ${iva2}`)