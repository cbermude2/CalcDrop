const costoAds = 3;
const gananciaUnidad = 10;

let modo = 1;

function setMode(m){
  modo = m;
  document.getElementById("mode1").classList.toggle("hidden", m!==1);
  document.getElementById("mode2").classList.toggle("hidden", m!==2);
}

function simular(meses, inversionInicial, utilidad){

  let acumulado = 0;
  let tabla = "<table><tr><th>Periodo</th><th>Monto reinvertido</th><th>Monto acumulado</th></tr>";

  for(let i=1;i<=meses;i++){

    const reinversion = inversionInicial; 
    const disponible = utilidad - reinversion;

    acumulado += disponible;

    tabla += `<tr>
                <td>${i}</td>
                <td>$${reinversion.toFixed(2)}</td>
                <td>$${acumulado.toFixed(2)}</td>
              </tr>`;
  }

  tabla += "</table>";
  document.getElementById("tabla").innerHTML = tabla;
}

function calcular(){

  const precioUnitario = 26.00;
  const costoAds = 3;
  const costoProductoUnit = 6;
  const costoTransporteUnit = 7;
  const gananciaUnidad = 10;

  let productosMes = 0;
  let inversion = 0;

  if(modo === 1){
    inversion = parseFloat(document.getElementById("inversion").value) || 0;
    productosMes = inversion / costoAds;
  } else {
    const ventasDiarias = parseFloat(document.getElementById("ventasDiarias").value) || 0;
    productosMes = ventasDiarias * 30;
    inversion = productosMes * costoAds;
  }

  const devoluciones = (parseFloat(document.getElementById("devoluciones").value) || 0) / 100;
  const porcentajeVendedor = (parseFloat(document.getElementById("porcentajeVendedor").value) || 0) / 100;
  const meses = parseInt(document.getElementById("meses").value) || 1;

  const ventasTotales = productosMes * precioUnitario;
  const costoProducto = productosMes * costoProductoUnit;
  const costoTransporte = productosMes * costoTransporteUnit;
  const costosTotales = inversion + costoProducto + costoTransporte;

  const gananciaBruta = productosMes * gananciaUnidad;
  const gananciaNeta = gananciaBruta * (1 - devoluciones);

  // 🔥 NUEVO
  const sueldoVendedor = gananciaNeta * porcentajeVendedor;
  const utilidad = gananciaNeta - sueldoVendedor;

  document.getElementById("resultado").innerHTML =
    `<p><strong>Ventas:</strong> $${ventasTotales.toFixed(2)}</p>
     <p><strong>Costos:</strong></p>
     <p>Publicidad: $${inversion.toFixed(2)}</p>
     <p>Producto: $${costoProducto.toFixed(2)}</p>
     <p>Transporte: $${costoTransporte.toFixed(2)}</p>
     <p>Total costos: $${costosTotales.toFixed(2)}</p>
     <p><strong>Ganancia bruta mensual:</strong> $${gananciaBruta.toFixed(2)}</p>
     <p><strong>Ganancia neta mensual:</strong> $${gananciaNeta.toFixed(2)}</p>
     <p><strong>Sueldo vendedor:</strong> $${sueldoVendedor.toFixed(2)}</p>
     <p><strong>Utilidad:</strong> $${utilidad.toFixed(2)}</p>`;

  if(meses > 1){
    simular(meses, inversion, utilidad);
  } else {
    document.getElementById("tabla").innerHTML = "";
  }
}

