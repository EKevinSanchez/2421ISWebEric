let filas = 10
    let columnas = 10
    let lado = 45

    let marcas = 0

    let minas = filas * columnas * 0.1

    let tablero = []

    let enJuego = true
    let juegoIniciado = false

    nuevoJuego()

    function nuevoJuego() {
      reiniciarVariables()
      generarTableroHTML() //Gernera la estructura visual de la matriz
      generarTableroJuego() //Se encarla de generar las minas y los números para que sean descubiertos
      añadirEventos() //se añaden los eventos de mouse para las celdas
      refrescarTablero() //Se encarga del comportamiento lógico para mostrar los elementos
    }

    function reiniciarVariables() {
      marcas = 0
      enJuego = true
      juegoIniciado = false
    }

    function generarTableroHTML() {
      let html = ""
      for (let f = 0; f < filas; f++) {
        html += `<tr>`
        for (let c = 0; c < columnas; c++) {
          /*
              Generación de cada uno de los elementos de la matriz
              y se les asignará una coordenada, para poder tratar estos elementos
              de forma matemática, siguiendo patrones que fácilitarán la 
              estructura de algoritmos

              id="celda-${c}-${f}"
              es la instrucción más importante, asigna una coordenada a cada elemento
          */
          html += `<td id="celda-${c}-${f}" style="width:${lado}px;height:${lado}px">`
          html += `</td>`
        }
        html += `</tr>`
      }
      let tableroHTML = document.getElementById("tablero")
      tableroHTML.innerHTML = html
      tableroHTML.style.width = columnas * lado + "px"
      tableroHTML.style.height = filas * lado + "px"
      tableroHTML.style.background = "darkcyan"
    }

    /*
        Una vez generado el tablero HTML se le añaden los eventos de clic
        a cada una de las celdas para que el usuario pueda interactuar con el juego
    */
    function añadirEventos() {
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
          let celda = document.getElementById(`celda-${c}-${f}`)
          celda.addEventListener("dblclick", function(me) {
            dobleClic(celda, c, f, me)
          })
          celda.addEventListener("mouseup", function(me) {
            clicSimple(celda, c, f, me)
          })
        }
      }
    }

    //funcion de doble clic
    function dobleClic(celda, c, f, me) {
      if (!enJuego) {
        return
      }
      abrirArea(c, f)
      refrescarTablero()
    }

    //funciones de clic
    function clicSimple(celda, c, f, me) {
      if (!enJuego) {
        return //El juego ha finalizado
      }
      if (tablero[c][f].estado == "descubierto") {
        return //Las celdas descubiertas no pueden ser redescubiertas o marcadas
      }
      switch (me.button) {
        case 0: //0 es el código para el clic izquierdo
          if (tablero[c][f].estado == "marcado") { //la celda está protegida
            break
          }
          /*
              Hay que proteger que la primera jugada no sea justo en una mina
              para no desmotivar al jugador con un castigo a la primera jugada

              Estimo que no le tomará más de 2 iteraciones en arreglar el problema
          */
          while (!juegoIniciado && tablero[c][f].valor == -1) {
            generarTableroJuego()
          }
          tablero[c][f].estado = "descubierto"
          juegoIniciado = true //aquí se avisa que el jugador ha descubierto más de 1 celda
          if (tablero[c][f].valor == 0) {
            abrirArea(c, f)
          }
          break;
        case 1: //1 es el código para el clic medio o scroll
          break;
        case 2: //2 es el código para el clic derecho
          if (tablero[c][f].estado == "marcado") {
            tablero[c][f].estado = undefined
            marcas--
          } else {
            tablero[c][f].estado = "marcado"
            marcas++
          }
          break;
        default:
          break;
      }
      refrescarTablero()
    }

    function abrirArea(c, f) {
      //Hay que abrir los demás números que están al rededor
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i == 0 && j == 0) {
            //Está condición es obligadoria para que no se encierre en un bucle infinito
            continue
          }
          try { //Hay que cuidarse de las posiciones negativas
            if (tablero[c + i][f + j].estado != "descubierto") {
              if (tablero[c + i][f + j].estado != "marcado") {
                tablero[c + i][f + j].estado = "descubierto" //aquí es donde se abren las celdas circundantes
                if (tablero[c + i][f + j].valor == 0) { //si la celda que se abre es otro 0, se le pasa la responsabilidad
                  abrirArea(c + i, f + j)
                }
              }
            }
          } catch (e) {}
        }
      }
    }

    //mostrar el comportamiento logico de forma visual
    function refrescarTablero() {
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
          let celda = document.getElementById(`celda-${c}-${f}`)
          if (tablero[c][f].estado == "descubierto") {
            celda.style.boxShadow = "none"
            switch (tablero[c][f].valor) {
              case -1:
                celda.innerHTML = `<i class="fas fa-bomb"></i>`
                celda.style.color = "black"
                celda.style.background = "white"
                break;
              case 0:
                break
              default:
                celda.innerHTML = tablero[c][f].valor
                break;
            }
          }
          if (tablero[c][f].estado == "marcado") {
            celda.innerHTML = `<i class="fas fa-flag"></i>`
            celda.style.background = `cadetblue`
          }
          if (tablero[c][f].estado == undefined) {
            celda.innerHTML = ``
            celda.style.background = ``
          }
        }
      }
      verificarGanador()
      verificarPerdedor()
      actualizarPanelMinas()
    }

    function actualizarPanelMinas() {
      let panel = document.getElementById("minas")
      panel.innerHTML = minas - marcas
    }

    function verificarGanador() {
      //verificar que todas las minas estan tapadas 
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
          if (tablero[c][f].estado != `descubierto`) { //Si la mina está cubierta
            if (tablero[c][f].valor == -1) {
              continue
            } else {
              //Si encuentra una celda cubierta, que no sea una mina, aún no se ha ganado
              return
            }
          }
        }
      }
      let tableroHTML = document.getElementById("tablero")
      tableroHTML.style.background = "green"
      enJuego = false
    }

    function verificarPerdedor() {
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {//verificando si una mina es decubierta, esto significa que perdio
          if (tablero[c][f].valor == -1) {
            if (tablero[c][f].estado == `descubierto`) {
              let tableroHTML = document.getElementById("tablero")
              tableroHTML.style.background = "red"
              enJuego = false
            }
          }
        }
      }
      if (enJuego) {
        return
      }
      //mostrando todas las minas faltantes, despues de perder
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
          if (tablero[c][f].valor == -1) {
            let celda = document.getElementById(`celda-${c}-${f}`)
            celda.innerHTML = `<i class="fas fa-bomb"></i>`
            celda.style.color = "black"
          }
        }
      }
    }

    //seguimiento logico de los objetos
    function generarTableroJuego() {
      vaciarTablero() 
      ponerMinas() 
      contadoresMinas() 
    }

    //reestablecer el tablero
    function vaciarTablero() {
      tablero = []
      for (let c = 0; c < columnas; c++) {
        tablero.push([])
      }
    }

    function ponerMinas() {
      for (let i = 0; i < minas; i++) {
        let c
        let f

        do {
          c = Math.floor(Math.random() * columnas) //Genera una columna aleatoria en el tablero
          f = Math.floor(Math.random() * filas) //Genera una fila aleatoria en el tablero
        } while (tablero[c][f]); //Se encarga de verificar que en la celda no haya una mina

        tablero[c][f] = {
          valor: -1
        } //Se inserta la mina en celda disponible
      }
    }

    function contadoresMinas() {
      for (let f = 0; f < filas; f++) {
        for (let c = 0; c < columnas; c++) {
          if (!tablero[c][f]) {
            let contador = 0
            //Se van a recorrer todas las celdas que están al rededor de la misma, 8 en total
            for (let i = -1; i <= 1; i++) {
              for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0) {
                  continue
                }
                try { //hay que evitar errores con las posiciones negativas
                  if (tablero[c + i][f + j].valor == -1) {
                    contador++
                  }
                } catch (e) {}
              }
            }
            tablero[c][f] = {
              valor: contador
            }
          }
        }
      }
    }