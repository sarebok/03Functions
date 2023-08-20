//Ej 1.0 Transforma esta declaración de función a una función de expresión
const a = 1,
  b = 2,
  c = 3;

const funcionExpresion = function (a, b, c) {
  return a + b + c;
};
console.log("resultado de la funcion 'funcionExpresion': " + funcionExpresion(a, b, c));

//ej2: Transforma la siguiente a una funcion arrow de una linea
let unaLinea = (a, b) => a + b;
console.log("resultado funcion arrow una linea: " + unaLinea(a, b));

//ej3: Pintar un div
//a) modifica la funcion
const ele = document.getElementById("ele1");
/* ele.addEventListener("click", () => (ele.style.backgroundColor = "yellow")); */
//b) pasar color a funcion pintar
ele.style.backgroundColor = "green";
//funcion para pasar color como parametro
function pintar(elemento, color = "green") {
  elemento.addEventListener("click", () => (elemento.style.backgroundColor = color));
}
pintar(ele, "yellow");
//ej4:
//a) pintar de negro
const blueDiv = document.getElementById("div-azul");
const redDiv = document.getElementById("div-rojo");
const greenDiv = document.getElementById("div-verde");
const yellowDiv = document.getElementById("div-amarillo");
pintar(blueDiv, "black");
pintar(redDiv, "black");
pintar(greenDiv, "black");
pintar(yellowDiv, "black");

//b) pintar de otros colores
const keyDiv = document.getElementById("key");
let colorGlobalGuardado = "white";
//reconocer las teclas y asociar un color

function asociarColorATecla(evento, tecla, colorDeseado) {
  if (evento.key === tecla) {
    colorGlobalGuardado = colorDeseado;
  } else {
    return;
  }
}
document.addEventListener("keydown", function (event) {
  asociarColorATecla(event, "a", "pink");
  asociarColorATecla(event, "s", "orange");
  asociarColorATecla(event, "d", "cyan");
  keyDiv.style.backgroundColor = colorGlobalGuardado;
});

//c) crear divs de colores
const divsCreados = document.getElementById("divs-creados");
let colorGlobalGuardado2 = "white"; //por algun motivo si uso la misma variable global anterior me sobrescribe el div anterior (probar cambiando a colorGlobalGuardao)
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
  divCreado.style.backgroundColor = color;
  divsCreados.appendChild(divCreado);
}
