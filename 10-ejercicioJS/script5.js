
function conversion (opcion, grados){
    var x;
    if(opcion == 1){
        x = (grados * (9/5)) + 32;
        document.write(grados + " Celsius equivalen a " + x + " Grados Fahrenheir <br>")
    } else {
        x = (grados - 32) * (5/9)
        document.write(grados + " Fahrenheit equivalen a " + x + " Grados Celsius <br>")
    }
}

var opcion;
do {
    opcion = parseInt(window.prompt('¿Que tipo de conversion desea realizar?, (1 para celsius a farhenheit, 2 para farhenheit a celsius).' ))
    if (opcion < 1 || opcion > 2 || isNaN(opcion)){
        error = true;
        alert("Error, introduza un 1 o un 2");
    } else {
        error = false;
    }
} while (error)

var opcionMensaje;
if (opcion == 1){
    opcionMensaje = "Celsius";
} else {
    opcionMensaje = "Farhenheit";
}

var grados;
do{
     grados = parseInt(window.prompt("Inserta la temperatura en grados " + opcionMensaje))
    if(isNaN(grados)){
        error = true;
       alert("Error, introduzca un numero"); 
    } else {
        error = false;
    }
} while (error)
 
conversion(opcion, grados);