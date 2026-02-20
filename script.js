function calcularModoInversion() {
    // Obtener valores del usuario
    const inversion = parseFloat(document.getElementById("inversion").value) || 0;
    const devolucion = parseFloat(document.getElementById("devolucion").value) || 0;
    const meses = parseInt(document.getElementById("meses").value) || 1;

    // 🔢 Estructura proporcional basada en el ejemplo
    const precio = inversion * 8.67;
    const costoProducto = inversion * 2;
    const costoTransporte = inversion * 2.33;
    const costosTotales = inversion * 5.33;
    const gananciaBruta = inversion * 3.33;

    // Aplicar porcentaje de devolución
    const gananciaNetaUnidad = gananciaBruta * (1 - devolucion / 100);

    // Calcular resultados mensuales
    const gananciaBrutaMensual = gananciaBruta * meses;
    const gananciaNetaMensual = gananciaNetaUnidad * meses;

    // Mostrar resultados
    document.getElementById("resultado").innerHTML = `
        <p><strong>Precio estimado:</strong> $${precio.toFixed(2)}</p>
        <p><strong>Costos:</strong></p>
        <ul>
            <li>Publicidad: $${inversion.toFixed(2)}</li>
            <li>Producto: $${costoProducto.toFixed(2)}</li>
            <li>Transporte: $${costoTransporte.toFixed(2)}</li>
            <li>Total costos: $${costosTotales.toFixed(2)}</li>
        </ul>
        <p><strong>Ganancia bruta mensual:</strong> $${gananciaBrutaMensual.toFixed(2)}</p>
        <p><strong>Ganancia neta mensual:</strong> $${gananciaNetaMensual.toFixed(2)}</p>
    `;
}
