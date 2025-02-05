//1Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo(){
    console.log('¡Hola mundo!');
  }holaMundo();

//2Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaNombre(nombre){
  console.log(`¡Hola, ${nombre}!`);
}
holaNombre('Yezid');
//3Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function doble(numero){
    console.log(numero*2);
    return;
  }
  doble(1);
//4Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(n1,n2,n3){
    console.log((n1+n2+n3)/3);
    return;
  }
  promedio(8,10,8);
//5Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayor(n1,n2){
    console.log( n1 > n2 ? n1 : n2);
    return;
  }
  mayor(28,22);
//6Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function siMismo(n1){
    console.log( n1**2);
    return;
  }
  siMismo(7);   