//Ej 1.0 Transforma esta declaración de función a una función de expresión
const a = 1,
  b = 2,
  c = 3;
function example(a, b, c) {
  return a + b + c;
}

//transformando la funcion de expresion

const funcionExpresion = function (a, b, c) {
  return a + b + c;
};

//probando que los resultados son iguales
console.log("resultado de la funcion 'example': " + example(a, b, c));
console.log(
  "resultado de la funcion 'funcionExpresion': " + funcionExpresion(a, b, c)
);

//ej2: Transforma la siguiente a una funcion arrow de una linea
let suma = function (a, b) {
  return a + b;
};

//transformando a funcion arrow de una linea

let unaLinea = (a, b) => a + b;

//probando resultados

console.log("resultado funcion arrow una linea: " + unaLinea(a, b));

//ej3: Pintar un div
//modifica la funcion
const ele = document.getElementById("ele1");
/* ele.addEventListener("click", () => (ele.style.backgroundColor = "yellow")); */
//pasar color a funcion pintar
//verde como color predeterminado
ele.style.backgroundColor = "green";
//funcion para pasar color como parametro
function pintar(elemento, color = "green") {
  elemento.addEventListener(
    "click",
    () => (elemento.style.backgroundColor = color)
  );
}
pintar(ele, "yellow");

//ej4:
//pintar de negro
const blueDiv = document.getElementById("div-azul");
const redDiv = document.getElementById("div-rojo");
const greenDiv = document.getElementById("div-verde");
const yellowDiv = document.getElementById("div-amarillo");
pintar(blueDiv, "black");
pintar(redDiv, "black");
pintar(greenDiv, "black");
pintar(yellowDiv, "black");

//pintar de otros colores
const keyDiv = document.getElementById("key");
const divsCreados = document.getElementById("divs-creados");
let guardaColor = "white";
//reconocer las teclas
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    guardaColor = "pink";
  } else if (event.key === "s") {
    guardaColor = "orange";
  } else if (event.key === "d") {
    guardaColor = "cyan";
  }
  //funcion nuevoPintar, pinta segun input de key. va dentro del addEventListener para ejecutarse en cada evento
  nuevoPintar(keyDiv, guardaColor);
});

function nuevoPintar(elemento, color) {
  elemento.style.backgroundColor = color;
}

//crear divs de colores
let guardaColor2 = "white";
document.addEventListener("keydown", function (ev) {
  if (ev.key === "q") {
    guardaColor2 = "purple";
  } else if (ev.key === "w") {
    guardaColor2 = "grey";
  } else if (ev.key === "e") {
    guardaColor2 = "brown";
  } else {
    return;
  }
  //funcion crearDiv. Crea div de un color en una parte del html. va dentro del addEventListener para ejecutarse en cada evento
  crearDiv(guardaColor2);
});

function crearDiv(color) {
  const divCreado = document.createElement("div");
  divCreado.style.backgroundColor = color;
  divCreado.style.width = "200px";
  divCreado.style.height = "200px";
  divsCreados.appendChild(divCreado);
}
