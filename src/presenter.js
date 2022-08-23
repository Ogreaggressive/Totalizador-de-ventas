import {sumar,multiplicar,descuento} from "./sumador";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const button1 = document.querySelector("#totalizar");

const precioNeto = document.querySelector("#resultado-div");
const des = document.querySelector("#descuento-div");

button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento = descuento(total);
  let totalDescuento = multiplicar(porcentajeDescuento,total);
 
  precioNeto.innerHTML = "<p>El precio neto es: "+firstNumber+ "*"+ secondNumber +" = "+total+ "</p>";

  des.innerHTML = "<p>El descuento es: "+porcentajeDescuento+"% = "+totalDescuento+"</p>";
});