/* DECLARAMOS UNA VARIBLE PARA GUARDAR EL VALOR QUE DEVUELVA LA FUNCION PROMPT */
/*let nombre = prompt("dime tu nombre");

// SI ES NULO LANZAMOS UNA ALERTA U OTRA
if(nombre == ""){
    alert("no escribiste nada")
} else {
    // CON ESA VARIABLE LANZAMOS UNA ALERTA PERSONALIZADA 
    alert("hola " + nombre);
}*/


let codeOperadores = `<div> <h1> Operadores </h1> </div>`
document.write(codeOperadores);
/********* OPERANDORES DE ASIGNACION *******/
let numeroAsignacion = 10;
numeroAsignacion += 5;
document.write("El operador de asignacion da : " + numeroAsignacion);

/********* OPERANDORES ARITMETICOS *******/
document.write(`<br>`);
let numeroAritmetico1 = 10;
let numeroAritmetico2 = 5;
let resultado = numeroAritmetico1 + numeroAritmetico2;
document.write(" La suma de los numeros da : " + numeroAritmetico1 + " + " +numeroAritmetico2 + " = " + resultado);


/********* OPERANDORES DE COMPARACION *******/
document.write(`<br>`);
let numCom1 = 10;
let numComp2 = 5; 

if(numCom1 == numComp2) {
   document.write(numCom1 + " y " + numComp2 + " son iguales"); 
} else {
    document.write(numCom1 + " y " + numComp2 + " NO son iguales"); 
}



/******* USO DE BACKTICKS *********/
document.write(`<br> <br>`)
let code = `<div> <h1> Backticks </h1> </div>`
document.write(code);

let nombre = "homer"
let frase = `Hola ${nombre} ¿como estas?`
document.write(frase);