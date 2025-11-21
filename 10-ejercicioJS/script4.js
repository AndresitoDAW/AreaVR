var n = parseInt(window.prompt("Inserta el numero de terminos de la secuencia fibonacci."))
function fibonacci (n){
    let i = 0;
    let a = 0;
    let b = 1;
    for (i=0; i<=n; i++ ){
        document.write(a + " ");
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
}
fibonacci (n);