// Funcion para verificar si un numero es primo
function esPrimo(numero){
    if (numero <= 1){
        return false;
    }
    for(var i = 2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return false;
        }
    }
    return true;
}

var num1 = parseInt(window.prompt("Introduzca un numero"))
var num2 = parseInt(window.prompt("Introduzca otro numero"))

document.writeln("numeros primos entre: " + num1 + " y " + num2 + ":" + "<br>")
for (var i = num1; i <= num2; i++){
    if (esPrimo(i)){
        document.writeln(i + "<br>");
    }
}