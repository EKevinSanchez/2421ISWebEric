var bandera = false; //indica estado del juego
var turno = 0; //indica turno del juegador
var tablero = new Array(); //arreglo de los botones para el juego
var player1 = document.getElementById("jugador1");
var player0 = document.getElementById("jugador1");
window.onload = function(){
    var iniciar = document.getElementById("Iniciar");
        iniciar.addEventListener("click",comenzar);
}

function comenzar(){//funcion al comenzar el juego
    bandera = true;
    player1 = document.getElementById("jugador1");
    player0 = document.getElementById("jugador2");
    
    if(player1.value==""){
        alert("Favor de ingresar el nombre del jugador 1");
        player1.focus();
    }else{
        if(player0.value==""){
            alert("Favor de ingresar el nombre del jugador 2");
            player0.focus();
        }else{
            tablero[0] = document.getElementById("boton0");
            tablero[1] = document.getElementById("boton1");
            tablero[2] = document.getElementById("boton2");

            tablero[3] = document.getElementById("boton3");
            tablero[4] = document.getElementById("boton4");
            tablero[5] = document.getElementById("boton5");

            tablero[6] = document.getElementById("boton6");
            tablero[7] = document.getElementById("boton7");
            tablero[8] = document.getElementById("boton8");
            for( var i=0; i<9; i++){
                tablero[i].className = "botonInicial";
                tablero[i].value = "I";
            }
            turno = 1;
            document.getElementById("turnoJugador").innerHTML = "Turno de "+ player1.value;

        }
    }   
}
function poner(boton){
    if(bandera==true){
        if(turno==1 && boton.value=="I"){
            turno = 2;
            document.getElementById("turnoJugador").innerHTML = "Turno de "+ player0.value;
            boton.value = "X"; 
            boton.className = "botonJugador1";
        }else{
            if(turno==2 && boton.value=="I"){
                turno = 1;
                document.getElementById("turnoJugador").innerHTML = "Turno de "+player1.value;
                boton.value = "O"; 
                boton.className = "botonJugador2";
            }
        }
    }
    ganador();
}
function ganador(){
    if((tablero[0].value=="X" && tablero[1].value=="X" && tablero[2].value=="X")
        || (tablero[3].value=="X" && tablero[4].value=="X" && tablero[5].value=="X")
        || (tablero[6].value=="X" && tablero[7].value=="X" && tablero[8].value=="X")
        || (tablero[0].value=="X" && tablero[3].value=="X" && tablero[6].value=="X")
        || (tablero[1].value=="X" && tablero[4].value=="X" && tablero[7].value=="X")
        || (tablero[2].value=="X" && tablero[5].value=="X" && tablero[8].value=="X")
        || (tablero[0].value=="X" && tablero[4].value=="X" && tablero[8].value=="X")
        || (tablero[2].value=="X" && tablero[4].value=="X" && tablero[6].value=="X")
    ){
        alert("Ah ganado: "+player1.value);
        bandera = false;
    }
    if((tablero[0].value=="O" && tablero[1].value=="O" && tablero[2].value=="O")
        || (tablero[3].value=="O" && tablero[4].value=="O" && tablero[5].value=="O")
        || (tablero[6].value=="O" && tablero[7].value=="O" && tablero[8].value=="O")
        || (tablero[0].value=="O" && tablero[3].value=="O" && tablero[6].value=="O")
        || (tablero[1].value=="O" && tablero[4].value=="O" && tablero[7].value=="O")
        || (tablero[2].value=="O" && tablero[5].value=="O" && tablero[8].value=="O")
        || (tablero[0].value=="O" && tablero[4].value=="O" && tablero[8].value=="O")
        || (tablero[2].value=="O" && tablero[4].value=="O" && tablero[6].value=="O")
    ){
        alert("Ah ganado: "+player0.value);
        bandera = false;
    }
}