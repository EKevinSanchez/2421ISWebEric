
function calcular(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacion = document.getElementById("operacion").value;
    switch(operacion){
        case "1": document.getElementById("resultado").value = num1+num2; break;
        case "2": document.getElementById("resultado").value = num1-num2; break;
        case "3": document.getElementById("resultado").value = num1*num2; break;
        case "4": document.getElementById("resultado").value = num1/num2; break;
    }

}


