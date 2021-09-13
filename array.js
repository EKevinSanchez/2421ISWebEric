var elemento1 = [1,2,3,4,5,6,78,9,70];
var elemento2 = [10,5,8,4,7,8,10,2,1];
var palabra = "aoertpser";
var contenedorPalabra = [];
var contrario = elemento1.length- 1;
var contador = 0;
console.log(elemento1);
console.log(elemento2);

console.log("---------------------");
for(var i=0; i<=elemento2.length; i++){
    if(elemento1[i]==elemento2[i]){
        console.log("se repite en la posicion "+i);
        contador++;
    }
}
if(contador==0){
    console.log("no se repitio en ninguna posicion");
}

for(var i = 0; i < elemento1.length; i++){

    contenedorPalabra.push(palabra[i]);

    if(elemento1[i] == elemento2[contrario])
        console.log("Son iguales");
    else
        console.log("No son iguales");    

    contrario--;
}
console.log(contenedorPalabra);
