console.log("Hola Typescript");
// var nombre = "algo"; // NO VAMOS A USAR VAR NUNCA
let nombres = "Adrian";
nombres = "A";
nombres = 'C';
// nombres = 1;
let nombreTS: string = "";
console.log(typeof nombres, "nombres");
let numeros = 1;
let numerosTS: number = 1;
console.log(typeof numeros, "numeros");
numeros = 1.1; // Decimales
console.log(typeof numeros, "numeros decimales");
let booleanos = true;
let booleanosTS: boolean = false;
booleanos = false;
console.log(typeof booleanos, "booleanos");
let nulos = null;
let nulosTS: null = null;
console.log(typeof nulos, "nulos");

let arreglos = [];
let arreglosTS: number[] = [];
let arreglosTS2: Array<number> = [];
console.log(typeof arreglos, "arreglos");

let objetos = {};
let objetosTS: object = {};
console.log(typeof objetos, "objetos");

let undefineds = undefined;
let undefinedsTS: undefined = undefined;
console.log(typeof undefineds, "undefineds");

//Truty y Falsy
let trutyFalsy:any;
trutyFalsy = ""
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}
trutyFalsy = "a"
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}
trutyFalsy = -1
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}
trutyFalsy = 0
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}

trutyFalsy = 1
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}

trutyFalsy = null
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}

trutyFalsy = {}
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}

trutyFalsy = []
if(trutyFalsy){
    console.log("Truty")
}else{
    console.log("Falsy")
}

const daniel = {
    "nombre" : "Daniel",
    'apellido' : 'Arias',
    edad: 23,
    casdos:false,
    zapatos: undefined,
    ropa: {
        color: "blue",
        talla: 40
    },
    mascotas: ['Mima', 'Thor', 'Frankie'],
}

console.log(daniel);
//Acceder a las propiedades
daniel.nombre
daniel.apellido
//modificar 
daniel.nombre = "Jose"
daniel["nombre"] = "Jose"
//daniel = {}; ERROR
//Crear atributos
//daniel.sueldo = 10.4
daniel["gastos"] = 1.5
//eliminar Propiedades
daniel.nombre = undefined
delete daniel.nombre

//Variable por valor o por referencia
//Variables por valor
//Primitivas: number string boolean
let edadAdrian = 33
let edadVicente = edadAdrian // CLONANDO EL VALOR
console.log(edadAdrian) //33
console.log(edadVicente) //33
edadAdrian = edadAdrian + 1
console.log(edadAdrian)
console.log(edadVicente)

//Variables por referencia
// Objetos: {} []
let notas = {
    total: 10,
}
let notas2doBim = notas
notas2doBim.total = notas2doBim.total + 1 // total = 11
console.log(notas) // total = 11
console.log(notas2doBim) // total 11
// Como clonar
let notasClonadasUno = Object.assign({}, notas) //Clonar un objeto
let arregloACopiar = [1, 2, 3]
let arregloClonado = Object.assign([], arregloACopiar) // Clonar un arreglo
notasClonadasUno.total = notasClonadasUno.total + 1
console.log(notas)  //total 11
console.log(notas2doBim) // total = 11
console.log(notasClonadasUno) // total = 12

// Arreglos
const arregloEjemplo = [1,2,3,4,5]
//for of {obtemos el VALOR}
for (let valorDelArreglo of arregloEjemplo){
    console.log("Valor: ",valorDelArreglo)
}
// for in {Obtenemos el INDICE}
for (let indiceDelArreglo in arregloEjemplo){
    console.log("Indice: ",indiceDelArreglo)
    console.log("Valor: ",arregloEjemplo[indiceDelArreglo])
}

// Añadir al final un elemento 
arregloEjemplo.push(6) //{1,2,3,4,5,6}
// Elimar el ultimo elemento
arregloEjemplo.pop()
// Añadir al inicio un elemento
arregloEjemplo.unshift(0)
/*Eliminar y ageregar elementos
  splice    - indice donde empezar
            - numeros de elementos a eliminar
            - elemento a añadir*/
arregloEjemplo.splice(
    0, //Empezamos en el indice 0
    3, //Eliminamos 3 elementos
    3,4,5 // Elementos a añadir 
) 
/* [0,1,2,3,4,5] Arreglo Original
   [3,4,5] -->  Arreglo post eliminacion ([0,1,2] Elementos eliminados)
   [3,4,5,3,4,5] Arreglo Final
*/
 /* Operadores para trabajar con arreglos
 find 
 findIndex
 foreach
 map
 filter
 some
 every
 reduce*/

 // Funciones
 function soloNumeros(a,b,c){
    return a-b+c
 }
 function soloNumetosTS(
    a:number,b:number,c:number
 ):number {
    return a-b+c
 }
function soloimprimir(texto:string):void{
    console.log(texto)
}
function soloImprimir2(texto:string):undefined{
    console.log(texto)
}
//Funciones nombradas
function nombreDeLaFuncion(){}
//Funciones anonimas
const funcionesSinNombre = function(){}
nombreDeLaFuncion()
funcionesSinNombre()
[].foreach(function(){})
// Fat Arrow function
const funcionFatArrow = (
    a:number, b:number
):number =>{
    return a+b
}
const funcionArrowSinParametros = ()=>{
    console.log('sin parametros')
}
const funcionFAOmitirReturn = (a,b) =>a+b
const funcionFASinParentesis = a => a * a
//Parametros indefinidos
function sumarNumeros(
    ...todosNumeros:number[]
):number{
    let total = 0
    for (let valorNumero of todosNumeros){
        total = total + valorNumero
    }
    return total
}
sumarNumeros(1,2,4,5,6,2,2,3,4,6,6,21,3,1,)

// Destructuracion

// Destructuracion de objetos
const adrianDest = {
    nombre: "Adrian",
};
const carolinaDest = {
    nombre: "Carolina",
    apellido: "Eguez",
};
// merge de las dos variables (orden importa)
const adrianCarolinaDest = {
    ...adrianDest,
    ...carolinaDest,
};
// { nombre: "Carolina", apellido: "Eguez"}
const carolinaAdrianDest = {
    ...carolinaDest,
    ...adrianDest,
};
// { nombre: "Adrian", apellido: "Eguez"}
const overrideDest = {
    ...carolinaAdrianDest,
    ...adrianDest,
    nombre: 'Vicente',
};
// Destructuracion de arreglos
const arregloDestUno = [1,2,3];
const arregloDestDos = [4,5,6];
// Merge
const arregloUnoDosDest = [
    ...arregloDestUno,
    ...arregloDestDos,
]; // [1,2,3,4,5,6]
const arregloDosUnoDest = [
    ...arregloDestUno,
    ...arregloDestDos,
]; // [4,5,6,1,2,3]
// La destructuracion es una forma de clonacion
const objetoACopiar = {a:1};
const objetoCopiadoA = {...objetoACopiar};


