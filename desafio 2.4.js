//Crea una lista vacía llamada "listaGenerica".

let listaGenerica = [];
//crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion =['JavaScript', 'C', 'C++', 'Kotlin' , 'Python'];

//grega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby' ,'GoLang');
console.log(lenguajesDeProgramacion);

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function muestreLista(){
    console.log(lenguajesDeProgramacion);
    
}
muestrelista();
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function ordenInverso(){

    console.log(lenguajesDeProgramacion.reverse());
}
ordenInverso();
//Crea una función que calcule el promedio de los elementos en una lista de números.
let numeros = [7,8,7,9,5,8,6,4,2,5]; // Declaramos la lista de valores.
    

function calcularPromedio() {
    let suma = 0; 
    for (let i = 0; i <= numeros.length; i++) {
    suma+= numeros[i]; 
    }
  return suma/numeros.length; 
}
let promedio = calcularPromedio(numeros); 
console.log(promedio);
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let lista = [7,8,7,9,5,8,6,4,2,5]; // Declaramos la lista de valores.
    

function numeroMasGrandeOMasPequeño() {
    let numeroMaximo= Math.max(lista); 
    let numeroMinimo= Math.min(lista);
    return console.log('el numero mayor es : ${numeroMaximo} y el numero menor : ${numeroMinimo}');


}
numeroMasGrandeOMasPequeño();
//Crea una función que devuelva la suma de todos los elementos en una lista.

let listaSumar[1,8,9,8,7,6,52,3,4,54,44,4,4,4,58,6,5,8,93];
let resultado = 0 ;

function sumaDeElementos(){
    for(let u= 0 ; u<listaSumar.length;u++){
resultado += listaSumar[u];

    }
    return console.log(resultado);
}
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
let nElegido = 12;

function ubicacion(nElegido){
    const posicion = lista.indexOf(nElegido);
    if (posicion === -1) {
        return console.log('el numero ${nElegido}no se encuentra en la lista  ')
        
    } else {
        return console.log('la posisicon del numero  ${nElegido} es : ${posicion}. ');
    }
    u+ubicacion(nElegido);
}
//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaA = [1,5,8,9];
let listaB = [1,9,7,2];
let resultadosDAMasB= [];

    function sumaDeListas(){
    for (let u = 0; u < listaA.length; u++) {
        resultadosDAMasB.push(listaA[u] + listaB[u] );
        
    }    
    console.log(resultadosDAMasB);
    }
    sumaDeListas(listaA,listaB);
        //Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

let cuadrado=[];

function cuadradoListaA(listaA) {
    for (let i = 0; i < listaA.length; i++) {
        cuadradoListaA.push(listaA[i] * listaA[i]);
        
    }
    return console.log(cuadrado);
    
}
cuadradoListaA(listaA);