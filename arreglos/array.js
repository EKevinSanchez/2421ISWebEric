var humano={
    "informacion":{
        "nombre": "Eric Kevin",
        "Edad":"19",
        "carrera" : "ing. en software",
    },
    "musica":{
        "generos":{
            "electro":{
                "autores":{
                    
                }
            },
            "rock":{
                "autores":{
                    "jhon Lenon":{
                        "canciones":{
                            "uno":"imagine",
                            "dos":"Hey Jude",
                            "tres":"Let it Be"
                        }
                    },
                    "paul McCartney":{
                        "canciones":{
                            "uno":"ForFiveSeconds",
                            "dos":"maybe I'm amazing",
                            "tres":"say say say"
                        }
                    },
                    "Freddie Mercury":{
                        "canciones":{
                            "uno":"living on my own",
                            "dos":"the great pretender",
                            "tres":"barcelona"
                        }
                    }
                }
            }
        }
    }
};

function saludar(){
    let texto = document.getElementById("nombre").value;
    alert(texto);
}
