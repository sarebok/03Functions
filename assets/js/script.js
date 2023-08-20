//Ej 1.0 Transforma esta declaración de función a una función de expresión
const a = 1,
  b = 2,
  c = 3;

const funcionExpresion = function (a, b, c) {
  return a + b + c;
};
console.log(
  "resultado de la funcion 'funcionExpresion': " + funcionExpresion(a, b, c)
);

//ej2: Transforma la siguiente a una funcion arrow de una linea
let unaLinea = (a, b) => a + b;
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
let colorGlobalGuardado = "white";
//reconocer las teclas y asociar un color
function asociarColorATecla(evento, tecla, color) {
  if (evento === tecla) {
    colorGlobalGuardado = color;
  } else {
    return;
  }
}
document.addEventListener("keydown", function (event) {
  asociarColorATecla(event.key, "a", "pink");
  asociarColorATecla(event.key, "s", "orange");
  asociarColorATecla(event.key, "d", "cyan");
  nuevoPintar(keyDiv, colorGlobalGuardado);
});

function nuevoPintar(elemento, color) {
  elemento.style.backgroundColor = color;
}

//crear divs de colores
let colorGlobalGuardado2 = "white";
document.addEventListener("keydown", function (ev) {
  if (ev.key === "q") {
    colorGlobalGuardado2 = "purple";
  } else if (ev.key === "w") {
    colorGlobalGuardado2 = "grey";
  } else if (ev.key === "e") {
    colorGlobalGuardado2 = "brown";
  } else {
    return;
  }

  //funcion crearDiv. Crea div de un color en una parte del html. va dentro del addEventListener para ejecutarse en cada evento
  crearDiv(colorGlobalGuardado2);
});

function crearDiv(color) {
  const divCreado = document.createElement("div");
  divCreado.style.width = "200px";
  divCreado.style.height = "200px";
  nuevoPintar(divCreado, color);
  divsCreados.appendChild(divCreado);
}
