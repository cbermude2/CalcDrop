const costoAds = 3;
const gananciaUnidad = 10;

let modo = 1;

function setMode(m){
  modo = m;
  document.getElementById("mode1").classList.toggle("hidden", m!==1);
  document.getElementById("mode2").classList.toggle("hidden", m!==2);
}

function simular(meses, gananciaNeta, inversion){

  let acumulado = 0;
  let tabla = "<table><tr><th>Mes</th><th>Reinversión</th><th>Acumulado</th></tr>";

  for(let i=1;i<=meses;i++){

    acumulado += gananciaNeta;

    tabla += `<tr>
                <td>${i}</td>
                <td>$${inversion.toFixed(2)}</td>
                <td>$${acumulado.toFixed(2)}</td>
              </tr>`;
  }

  tabla += "</table>";
  document.getElementById("tabla").innerHTML = tabla;
}

function calcular(){

  const inversion = parseFloat(document.getElementById("inversion").value) || 0;
  const devoluciones = (parseFloat(document.getElementById("devoluciones").value) || 0) / 100;
  const meses = parseInt(document.getElementById("meses").value) || 1;

  // 🔢 Estructura proporcional
  const precio = inversion * 8.67;
  const costoProducto = inversion * 2;
  const costoTransporte = inversion * 2.33;
  const costosTotales = inversion * 5.33;

  const gananciaBruta = inversion * 3.33;
  const gananciaNeta = gananciaBruta * (1 - devoluciones);

  // Mostrar resultados completos
  document.getElementById("resultado").innerHTML =
    `<p><strong>Precio estimado:</strong> $${precio.toFixed(2)}</p>
     <p><strong>Costos:</strong></p>
     <p>Publicidad: $${inversion.toFixed(2)}</p>
     <p>Producto: $${costoProducto.toFixed(2)}</p>
     <p>Transporte: $${costoTransporte.toFixed(2)}</p>
     <p>Total costos: $${costosTotales.toFixed(2)}</p>
     <p><strong>Ganancia bruta mensual:</strong> $${gananciaBruta.toFixed(2)}</p>
     <p><strong>Ganancia neta mensual:</strong> $${gananciaNeta.toFixed(2)}</p>`;

  simular(meses, gananciaNeta, inversion);
}

