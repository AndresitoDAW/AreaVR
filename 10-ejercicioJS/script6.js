function calcularFactorial (number){
    result = 1;
    for(var i=1; i<=number; i++){
        result *= i;
    }
    return result;
}

do {
    var error;
    number = parseInt(window.prompt('Introduza un numero positivo entero'))
    if (number < 0 || isNaN(number)){
        alert('Error, introduzca un numero valido')
        error = true;
    } else {
        error = false;
    }
} while(error)

var factorial = calcularFactorial(number);
document.write(factorial)