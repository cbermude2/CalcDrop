const costoAds = 3;
const gananciaUnidad = 10;

let modo = 1;

function setMode(m){
  modo = m;
  document.getElementById("mode1").classList.toggle("hidden", m!==1);
  document.getElementById("mode2").classList.toggle("hidden", m!==2);
}

function calcular(){

  let inversion = 0;
  let productosMes = 0;

  if(modo === 1){
    inversion = parseFloat(document.getElementById("inversion").value) || 0;
  } else {
    const ventasDiarias = parseInt(document.getElementById("ventasDiarias").value) || 0;
    productosMes = ventasDiarias * 30;
  }

  const devoluciones = (parseFloat(document.getElementById("devoluciones").value) || 0) / 100;
  const meses = parseInt(document.getElementById("meses").value) || 1;

  let gananciaBruta = 0;
  let gananciaNeta = 0;
  let reinversion = 0;

  if(modo === 1){

    // 🔥 NUEVA ESTRUCTURA PROPORCIONAL
    const precio = inversion * 8.67;
    const costoProducto = inversion * 2;
    const costoTransporte = inversion * 2.33;
    const costosTotales = inversion * 5.33;

    gananciaBruta = inversion * 3.33;
    gananciaNeta = gananciaBruta * (1 - devoluciones);

    reinversion = inversion;

    document.getElementById("resultado").innerHTML =
      `<p><strong>Precio estimado:</strong> $${precio.toFixed(2)}</p>
       <p><strong>Costos:</strong></p>
       <p>Publicidad: $${inversion.toFixed(2)}</p>
       <p>Producto: $${costoProducto.toFixed(2)}</p>
       <p>Transporte: $${costoTransporte.toFixed(2)}</p>
       <p>Total costos: $${costosTotales.toFixed(2)}</p>
       <p><strong>Ganancia bruta mensual:</strong> $${gananciaBruta.toFixed(2)}</p>
       <p><strong>Ganancia neta mensual:</strong> $${gananciaNeta.toFixed(2)}</p>`;

  } else {

    // MODO VENTAS DIARIAS (lo dejamos compatible)
    gananciaBruta = productosMes * 10;
    gananciaNeta = gananciaBruta * (1 - devoluciones);
    reinversion = productosMes * 3;

    document.getElementById("resultado").innerHTML =
      `<p><strong>Ganancia bruta mensual:</strong> $${gananciaBruta.toFixed(2)}</p>
       <p><strong>Ganancia neta mensual:</strong> $${gananciaNeta.toFixed(2)}</p>`;
  }

  simular(meses, gananciaNeta, reinversion);
}
