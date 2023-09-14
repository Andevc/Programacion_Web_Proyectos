/* CICLOS */
console.log("CICLOS REPETITIVOS")

// WHILE
console.log("*****WHILE*****")
let nw = 5;
while(nw <= 12){
    console.log(nw);
    nw = nw+2;
}

console.log("***** DO WHILE*****")
let ndw = 12;
do{
    console.log(ndw);
    ndw = ndw+2;
}while(ndw <= 20);

// FOR
console.log("*****FOR*****")
let nf = 0;
for(nf; nf<=12; nf++){
    console.log(nf)
}
console.log("sale for "+nf)


switch ( prompt("¿Como esta el clima?")){ //prompt ingresar un dato
    case "lluvioso":
        console.log("no te mojes")
        break;
    case "soleado":
        console.log("no te quemes")
        break;
    case "nublado":
        console.log("cubrete")
        break;
    default:
        console.log("no se");
        break;
        
    
}
console.log("Aqui sale del swicht")