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
  else if (tot >= 10000 && tot < 30000)
  {
    des = 0.1;
  }
  else if (tot >= 30000)
  {
    des = 0.15;
  }
  return des;
}

function impuesto(lugar)
{
    let imp = 0;
    switch(lugar)
    {
        case 'UT':
            imp = 0.0665;
            break;
        case 'NV':
            imp = 0.08;
            break;
        case 'TX':
            imp = 0.0625;
            break;
        case 'AL':
            imp = 0.04;
            break;
        case 'CA':
            imp = 0.0825;
            break;
        default:
            break;
    }
    
    return imp;
}

export {sumar, multiplicar, descuento, impuesto};