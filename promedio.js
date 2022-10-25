// Ciclo para sumar notas y promediarlas//

var notas;
var promedio;
var suma=0;


var notas= parseInt(prompt("Ingresa la cantidad de notas a promediar"))

    for(i=0; i < notas; i++){
        var notas= parseInt(prompt("Ingresa tu nota " + i));
        suma = suma + notas;

}

promedio = suma/ notas;

alert("La suma de tus notas es " + suma);
alert("El promedio de tus notas es " + promedio);
