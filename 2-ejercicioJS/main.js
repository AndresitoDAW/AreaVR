document.write("<h1>TAREA02</h1><HR/>")

function abrirSubVentana(){
    nuevaVentana = window.open("ventanaNueva.html", "sub");
}

function cerrarSubVentana(){
    nuevaVentana.close();
}

let nombreCompleto = prompt("Introduzca su nombre y apellidos:");
let diaNacimiento = prompt("Introduzca su DIA de nacimiento:");
let mesNacimiento = prompt("Introduzca su MES de nacimiento:");
let añoNacimiento = prompt("Introduzca su año de nacimiento:");
let fecha = new Date();
let añoAcutal = fecha.getFullYear();
let mesActual = fecha.getMonth() + 1;
let diaActual = fecha.getDate();
let edad = añoAcutal - parseInt(añoNacimiento);
if (mesActual < parseInt(mesNacimiento) || (mesActual >= parseInt(mesNacimiento) && diaActual < parseInt(diaNacimiento)))
    {
    edad--;
    }

document.write("Buenos dias, " + nombreCompleto + "<br>");
document.write("Tu nombre tiene " + nombreCompleto.length + " caracteres<br>");
document.write("La primera letra 'A' de tu nombre esta en la posicion: " + nombreCompleto.toLowerCase().indexOf("a") + "<br>");
document.write("La ultima letra 'A' de tu nombre esta en la posicion: " + nombreCompleto.toLowerCase().lastIndexOf("a") + "<br>");
document.write("Tu nombre menos las 3 primeras letras es: " + nombreCompleto.substring(3) + "<br>");
document.write("Tu nombre todo en mayusculas es: " + nombreCompleto.toUpperCase() + "<br>");
document.write("Tu edad es: " + edad + " años<br>");
document.write("Tu naciste un feliz " + diaNacimiento + " del año " + añoNacimiento + "<br>");
document.write("El coseno de 180 es: " + Math.cos(180) + "<br>");
document.write("El número mayor de (34,67, 23, 75, 35, 19) es: " + Math.max(34, 67, 23, 75, 35, 19) + "<br>");
document.write("Ejemplo de número al azar: " + Math.random() + "<br>");

document.write("<p><input type='button' value='Abir sub ventana' id='abrir' onClick='abrirSubVentana()'>" +
    "<input type='button' value='Cerrar sub ventana' id='cerrar' onClick='cerrarSubVentana()'></p>")


