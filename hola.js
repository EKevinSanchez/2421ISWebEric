var num1 = 10;
var num2 = 10;
var anuncio = "";
var resultado = 0;

hola();
function hola(){
    var operacion = prompt("ingresa la operacion");
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
}


function operacionFuncion(){
    return anuncio;
}

function suma(){
    operacion(1);
}
function resta(){
    operacion(2);
}
function multiplicacion(){
    operacion(3);
}
function division(){
    operacion(4);
}

function operacion(n){
    var opc=n;
    switch(opc){
        case 1:
            resultado= num1 + num2;
            anuncio="la suma de "+num1+" mas "+num2+" da como resultado: "+resultado;
            operacion();
            alert(operacionFuncion());
            hola(); break;
        case 2:
            resultado=num1- num2;
            anuncio="la resta de "+num1+" menos "+num2+" da como resultado: "+resultado;
            operacion();
            alert(operacionFuncion());
            hola(); break;
        case 3:
            resultado=num1*num2;
            anuncio="la multiplicacion de "+num1+" por "+num2+" da como resultado: "+resultado;
            operacion();
            alert(operacionFuncion());
            hola(); break;
        case 4:
            resultado=num1/num2;
            anuncio="la division de "+num1+" entre "+num2+" da como resultado: "+resultado;
            operacion();
            alert(operacionFuncion());
            hola(); break;
    }

}
