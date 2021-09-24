let totales = 0.0;

function  agregarProducto1(){
    event.preventDefault();
    var producto = document.getElementById("producto1").innerHTML;
    var precio = document.getElementById("precio1").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
    let nuevaRefCelda = nuevaFila.insertCell(0);
    nuevaRefCelda.textContent = producto;
    let nuevaRefCelda1 = nuevaFila.insertCell(1);
    nuevaRefCelda1.textContent = precio;
    console.log(producto);
    var precios = parseFloat(precio.slice(1));
    totales = totales + precios;
    console.log(totales);
}
function  agregarProducto2(){
    event.preventDefault();
    var producto = document.getElementById("producto2").innerHTML;
    var precio = document.getElementById("precio2").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
    let nuevaRefCelda = nuevaFila.insertCell(0);
    nuevaRefCelda.textContent = producto;
    let nuevaRefCelda1 = nuevaFila.insertCell(1);
    nuevaRefCelda1.textContent = precio;
    console.log(producto);
    var precios = parseFloat(precio.slice(1));
    totales = totales + precios;
    console.log(totales);
}
function  agregarProducto3(){
    event.preventDefault();
    var producto = document.getElementById("producto3").innerHTML;
    var precio = document.getElementById("precio3").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
    let nuevaRefCelda = nuevaFila.insertCell(0);
    nuevaRefCelda.textContent = producto;
    let nuevaRefCelda1 = nuevaFila.insertCell(1);
    nuevaRefCelda1.textContent = precio;
    console.log(producto);
    var precios = parseFloat(precio.slice(1));
    totales = totales + precios;
    console.log(totales);
}
function  agregarProducto4(){
    event.preventDefault();
    var producto = document.getElementById("producto4").innerHTML;
    var precio = document.getElementById("precio4").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
    let nuevaRefCelda = nuevaFila.insertCell(0);
    nuevaRefCelda.textContent = producto;
    let nuevaRefCelda1 = nuevaFila.insertCell(1);
    nuevaRefCelda1.textContent = precio;
    console.log(producto);
    var precios = parseFloat(precio.slice(1));
    totales = totales + precios;
    console.log(totales);
}
function  agregarProducto5(){
    event.preventDefault();
    var producto = document.getElementById("producto5").innerHTML;
    var precio = document.getElementById("precio5").innerHTML;
    let ReferenciaTablaAgregar = document.getElementById("tablaProductos");
    let nuevaFila = ReferenciaTablaAgregar.insertRow(-1);
    let nuevaRefCelda = nuevaFila.insertCell(0);
    nuevaRefCelda.textContent = producto;
    let nuevaRefCelda1 = nuevaFila.insertCell(1);
    nuevaRefCelda1.textContent = precio;
    console.log(producto);
    var precios = parseFloat(precio.slice(1));
    totales = totales + precios;
    console.log(totales);
}

function total() {
    var mostrar = document.getElementById("mostrarTotal");
    mostrar.textContent ="Su compra total es de: $"+totales;
  }