// 1. Optativo
function optativo(){
    const n = document.formE1.dato.value;
    let f = 1;
    var res = "";
    for(let i = 1; i <= n; i++){
        f *= i;
        res += " + "+f;
    }
   
    document.getElementById('resE1').innerHTML = res;
}


// 2. Serie de Primos
function nPrimo(){
    const n = document.formE2.dato.value;
    let p = 2, k=2, t = 1, res = "";
    while (t <= n) {
        if (p % k != 0 && k <= p / 2) { k = k + 1; } 
        else {
            if (k > p / 2) {
                res += p+" , "; 
                t = t + 1;
            }
            p = p + 1; k = 2;
        }
    }
    document.getElementById('resE2').innerHTML = res;

}

// 3. Rotar pares 
function rotNum(){
    let n = document.formE3.dato.value;
    function rotP(n){
        let y=0,d,p=1,cd,x;
        while(n != 0){
            d = n%10;
            n = Math.trunc(n/10);
            if(d % 2 == 0){ y = d*p+y; p = p*10 }
        }
        d = y % 10
        y = Math.trunc( y / 10)
        cd = Math.trunc(Math.log10(y))+1
        x = d*(10**cd)+y
        return x;
    }
    let x = rotP(n);
    let p = 1,y=0;
    while( n != 0){
        d = n % 10;
        n = Math.trunc(n / 10);
        if(d % 2 == 0){
            d = x % 10;
            x = Math.trunc( x / 10);
        }
        y = d*p+y;
        p = p*10;
    } 
    document.getElementById('resE3').innerHTML = y;
}


// 4. Numero Capicuo
function numCapicuo(){
    const n = document.formE4.dato.value;
    let x = parseInt(n), y = 0,r = "",d=0;
    while( x != 0 ){
        d = x % 10;
        x = Math.trunc(x / 10);        
        y = y*10+d;
    }
    if( y == n){ r = "Es capicuo"}
    else{ r = "No es Capicuo"}
    document.getElementById('resE4').innerHTML = n+" "+r;
}

// 5. Serie
function serie(){
    let n = document.formE5.dato.value;
    let res = "", f,c=0,s=0;
    function facto(n){
        let f = 1; 
        for( let i = 1; i<=n; i++){f *= i;}
        return f;
    }

    for( let  i = 1; i <= n; i++){
        f = facto(i);
        s += f;
        res += " + " + f;
        c +=2;
    }
    res += " = "+s;
    document.getElementById('resE5').innerHTML = res;

}


