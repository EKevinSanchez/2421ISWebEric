var num1 = 10;
var num2 = 10;
var operacion = prompt("ingresa la operacion");
var anuncio = "";
var resultado = 0;


function hola(){
    var x = "ok";
    var z = x;
    console.log(z);
}
switch(operacion){
    case "suma" : 
        suma(); break ;
    case "resta" :
        resta(); break;
    case "multiplicacion": 
        multiplicacion(); break;
    case "division" :
        division(); break;
}

function operacionFuncion(){
    return anuncio;
}

function suma(){
    resultado= num1 + num2;
    anuncio="la suma de "+num1+" mas "+num2+" da como resultado: "+resultado;
}
function resta(){
    resultado=num1- num2;
    anuncio="la resta de "+num1+" menos "+num2+" da como resultado: "+resultado;
}
function multiplicacion(){
    resultado=num1*num2;
    anuncio="la multiplicacion de "+num1+" por "+num2+" da como resultado: "+resultado;
}
function division(){
    resultado=num1/num2;
    anuncio="la division de "+num1+" entre "+num2+" da como resultado: "+resultado;
}

alert(operacionFuncion());


