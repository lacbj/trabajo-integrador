const precioticket = 200;
function resumir(){
var cantidadticket =document.getElementById("inputCantidad").value;
var descuento = document.getElementById("inputCategoria").value;

var precio = cantidadticket *(precioticket -((precioticket * descuento) / 100));
document.getElementById("compratotal").value = "total a pagar:$" + precio; 
console.log(compratotal);


}