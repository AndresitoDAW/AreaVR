let alojamiento = parseFloat(window.prompt("Introduzca los gastos de alojamiento"))
let transporte = parseFloat(window.prompt("Introduzca los gastos de transporte"))
let entretenimiento = parseFloat(window.prompt("Introduzca los gastos de entretenimiento"))
let comida = parseFloat(window.prompt("Introduzca los gastos de comida"))
let total = alojamiento + transporte + entretenimiento + comida

document.write("Alojamiento: " + alojamiento + "<br>")
document.write("Transporte: " + transporte + "<br>")
document.write("Entretenimiento: " + entretenimiento + "<br>")
document.write("Comida: " + comida + "<br>")
document.write("Gasto total: " + total + "<br>")