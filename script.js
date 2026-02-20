const costoAds = 3;
const gananciaUnidad = 10;

let modo = 1;

function setMode(m){
  modo = m;
  document.getElementById("mode1").classList.toggle("hidden", m!==1);
  document.getElementById("mode2").classList.toggle("hidden", m!==2);
}

function calcular(){

  let productosMes = 0;

  if(modo === 1){
    const inversion = parseFloat(document.getElementById("inversion").value);
    productosMes = inversion / costoAds;
  } else {
    const ventasDiarias = parseInt(document.getElementById("ventasDiarias").value);
    productosMes = ventasDiarias * 30;
  }

  const devoluciones = parseFloat(document.getElementById("devoluciones").value) / 100;
  const meses = parseInt(document.getElementById("meses").value);

  const gananciaBruta = productosMes * gananciaUnidad;
  const gananciaNeta = gananciaBruta * (1 - devoluciones);

  document.getElementById("resultado").innerHTML =
    `<p>Ganancia bruta mensual: $${gananciaBruta.toFixed(2)}</p>
     <p>Ganancia neta mensual: $${gananciaNeta.toFixed(2)}</p>`;

  simular(meses, gananciaNeta, productosMes);
}

function simular(meses, gananciaNeta, reinversion){

  let acumulado = 0;
  let tabla = "<table><tr><th>Mes</th><th>Reinversión</th><th>Acumulado</th></tr>";

  for(let i=1;i<=meses;i++){
    acumulado += (gananciaNeta - reinversion);
    tabla += `<tr><td>${i}</td><td>$${reinversion.toFixed(2)}</td><td>$${acumulado.toFixed(2)}</td></tr>`;
  }

  tabla += "</table>";
  document.getElementById("tabla").innerHTML = tabla;
}
