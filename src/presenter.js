import {sumar,multiplicar,descuento, impuesto, calcularPrecioTotal} from "./sumador";

const first = document.querySelector("#total");
const second = document.querySelector("#precio");
const button1 = document.querySelector("#totalizar");
var lugar = document.getElementById("lugar");


const precioNeto = document.querySelector("#resultado-div");
const des = document.querySelector("#descuento-div");
const impuestoDiv = document.querySelector("#impuesto-div");
const totalDiv = document.querySelector("#total-div");

button1.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  let total = multiplicar(firstNumber, secondNumber);
  let porcentajeDescuento = descuento(total);
  let totalDescuento = multiplicar(porcentajeDescuento,total).toFixed(2);
  let imp = impuesto(lugar.value);
  let totalImpuesto =  multiplicar(imp,total).toFixed(2);
  let PrecioTotal = calcularPrecioTotal(total,totalDescuento,totalImpuesto);

  precioNeto.innerHTML = "<p>El precio neto es: "+firstNumber+ "*"+ secondNumber +" = "+total+ "</p>";
  des.innerHTML = "<p>El descuento es: "+multiplicar(porcentajeDescuento,100).toFixed(2)+"% = "+totalDescuento+"</p>";
  impuestoDiv.innerHTML = "<p>El impuesto para "+lugar.value+" es "+ multiplicar(imp,100).toFixed(2)+"%"
  +" = " +totalImpuesto+"</p>";
  totalDiv.innerHTML = "<p>El precio total es: "+PrecioTotal+ "</p>";
});