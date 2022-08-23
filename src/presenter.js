import {sumar,multiplicar} from "./sumador";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const button1 = document.querySelector("#totalizar");

const precioNeto = document.querySelector("#resultado-div");

button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  precioNeto.innerHTML = "<p>El precio neto es: "+firstNumber+ "*"+ secondNumber +" = "+ multiplicar(firstNumber, secondNumber) + "</p>";
});