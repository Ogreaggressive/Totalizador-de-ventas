function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function descuento(tot) {
  let des = 0;
  if (tot >= 1000 && tot <3000)
  {
    des = 0.03;
  }
  else if (tot >= 3000 && tot < 7000)
  {
    des = 0.05;
  }
  else if (tot >= 7000 && tot < 10000)
  {
    des = 0.07;
  }
  return des;
}

export {sumar, multiplicar, descuento};