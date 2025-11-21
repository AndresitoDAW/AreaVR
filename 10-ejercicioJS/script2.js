//Pedir datos al usuario
var peso = parseFloat(window.prompt("Introduzca su peso en KG"))
var altura = parseFloat(window.prompt("Introduzca su altura en metros"))
var imc = peso/(altura*altura)
imc = imc.toFixed(2)
var mensaje = ""
if (imc < 18.5){
    mensaje = "Bajo peso"
    document.writeln("IMC: " + imc + ", Clasificación: " +  mensaje)
} else if (imc >= 18.5 || imc <= 24.9){
    mensaje = "Peso normal"
    document.writeln("IMC: " + imc + ", Clasificación: " +  mensaje)
} else {
    mensaje = "Sobrepeso"
    document.writeln("IMC: " + imc + ", Clasificación: " +  mensaje)
}