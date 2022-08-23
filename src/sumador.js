function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function descuento(tot) {
  let des = 0;
  if (tot >= 1000)
  {
    des = 0.03;
  }
  return des;
}

export {sumar, multiplicar, descuento};