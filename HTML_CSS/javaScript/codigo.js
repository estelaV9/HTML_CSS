/* DECLARAMOS UNA VARIBLE PARA GUARDAR EL VALOR QUE DEVUELVA LA FUNCION PROMPT */
let nombre = prompt("dime tu nombre");

// SI ES NULO LANZAMOS UNA ALERTA U OTRA
if(nombre == ""){
    alert("no escribiste nada")
} else {
    /* CON ESA VARIABLE LANZAMOS UNA ALERTA PERSONALIZADA */
    alert("hola " + nombre);
}