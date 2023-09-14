function factorial() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    let f = 1;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    document.formulario.resultado.value = f;
}

function serieFactorial() { 
    n = document.formulario.entrada.value;
    num = parseInt(n);
    let f = 1;
    var res = "";
    let suma = 0;
    for (i = 1; i <= num; i++) {
        f = f * i;
        res += "+" + f;
        suma += f;
    }
    res += " =" + suma;
    document.formulario.resultado.value = res.substring(1, res.length);
}


function fibonacci() {
    n = document.formulario.entrada.value;
    num = parseInt(n) - 2;  // AJUSTE
    let a = 0;
    let b = 1;
    var f = 0;
    var res = a + " " + b;
    while (num > 0) {
        f = a + b;	    // generando el nuevo termino
        res += " " + f; // res = res + f;
        a = b;		    // actualizando las variables
        b = f;
        num--; 	        // num-- = num - 1;
    }
    document.formulario.resultado.value = res;
}

function serieBinaria() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    /* n = 8 */
    /* 0 1 10 11 100 101 110 111 ... */
    var m = 1, b = 0, res = 0, digito = 1, j = 1, aux = m;
    for (let i = 2; i <= num; i++) {
        while (aux != 0) {
            digito = aux % 2;
            aux = parseInt(aux / 2);
            b += digito * j;
            j *= 10;
        }
        m++;
        aux = m;
        res += " " + b;
        b = 0;
        j = 1;
    }
    document.formulario.resultado.value = res;
}

function serieBinaria2() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    /* n = 8 */
    /* 0 1 10 11 100 101 110 111 ... */
    var res = "";
    for (let i = 0; i < num; i++) {
        res += i.toString(2) + " ";

    }
    document.formulario.resultado.value = res;
}

/* TODO: miercoles 7 diciembre */

function rotacionNumero() {
    n = document.formulario.entrada.value;
    num = parseInt(n);
    document.formulario.resultado.value = res;
}

function cadenaPalindrome() {
    n = document.formulario.entrada.value;
    num = parseInt(n);

    document.formulario.resultado.value = res;
}

function numeroCapicua() {
    n = document.formulario.entrada.value;
    num = parseInt(n);

    document.formulario.resultado.value = res;
}




/* CALCULADORA DE OPERACIONES ARITMETICAS */

function suma() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a + b;
    document.formulario.salida.value = res;
}
function resta() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a - b;
    document.formulario.salida.value = res;
}
function multiplicacion() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a * b;
    document.formulario.salida.value = res;
}
function division() {
    num1 = document.formulario.entrada1.value;
    num2 = document.formulario.entrada2.value;
    a = parseFloat(num1);
    b = parseFloat(num2);
    var res = a / b;
    document.formulario.salida.value = res;
}
