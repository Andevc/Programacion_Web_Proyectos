console.log("*****NUMEROS********")
var n1 = 5
let n2 = 6
console.log(n1+" | "+n2)

console.log("***** CADENAS *****")
var f1 = "Hola mundo"
let f2 = 'Hello Word'
var f3 = `Aqui se puede agregar otra var ej ${n1} n1`

console.log(f1+"\n"+f2+"\n"+f3)

console.log("\n====== SERIE DE FIBONACCI ======\n")
var n = 20;
var a = -1;
var b = 1;
for (let i = 1; i <= n; i++){
    let d = a+b;
    console.log(d);
    a = b;
    b = d;
     
}