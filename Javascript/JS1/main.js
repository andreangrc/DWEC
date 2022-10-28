var datos = document.getElementById("tablita");

function generarDatos(filas, columnas) {

    var respuesta = new Array ("Andrea", "Richi", "Manuel", "Paco", "Quiles", "Juanma");
    var aleatorio = Math.floor((Math.random()*respuesta.length));

    for (let i = 0; i < filas; i++) {
        let filaActual = document.getElementById("tablita").insertRow(i);
        
        for (let j = 0; j < columnas; j++) {
            let celda = filaActual.insertCell(j);

            celda.innerHTML = respuesta[aleatorio];
        }
    }
}


generarDatos(5,10);
    
