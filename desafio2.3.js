//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function indiceIMC(peso = parseFloat(prompt('Ingresa tu peso(kg):')), altura = parseFloat(prompt('Ingresa tu altura(m):'))) {
    return resultado = (peso / [altura * altura]);
}
indiceIMC();
alert(`Tu IMC es: ${resultado}`);

factorial();

alert(`El perimetro del rectangulo es ${resultadoPerimetro}`);

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolarASoles(cantidad = parseFloat(prompt('Ingresa una cantidad en dolares'))) {
    if (cantidad == 0)
        return 0;
    else if (cantidad > 0) {
        return (cantidad * 3.72);
    }
}
convertirDolarASoles();
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function areaRectangulo(base = parseFloat(prompt('Ingresa la base del rectangulo')), altura = parseFloat(prompt('Ingresa la altura del rectangulo'))) {
    return resultadoArea = (base * altura);
}
areaRectangulo();
alert(`El área del rectangulo es ${resultadoArea}`);

function perimetroRectangulo(base = parseFloat(prompt('Ingresa la base del rectangulo')), altura = parseFloat(prompt('Ingresa la altura del rectangulo'))) {
    return resultadoPerimetro = ((base * 2) + (altura * 2));
}
perimetroRectangulo();
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function perimetroCirculo(radio = Number.parseFloat(prompt('Ingresa el radio del circulo:'))) {
    return resultadoPerimetroCirculo = ((2 * Math.PI * radio));
}
perimetroCirculo();
alert(`El perimetro del Circulo es ${resultadoPerimetroCirculo}`);

function areaCirculo(radio = Number.parseFloat(prompt('Ingresa el radio del circulo:'))) {
    return resultadoAreaCirculo = ((Math.PI * radio * radio));
}
areaCirculo();
alert(`El área del Circulo es ${resultadoAreaCirculo}`);
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
//TABLA DE MULTIPLICAR
function tablaDeMultiplicar(numeroMultiplicar = parseInt(prompt('Ingresa un número:'))) {
    for (var i = 1; i <= 10; i++) {
        var resultadotabla = numeroMultiplicar * i;
        console.log(numeroMultiplicar + " X " + i + " = " + resultadotabla);
    }
}

