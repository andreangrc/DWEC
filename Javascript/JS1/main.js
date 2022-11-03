function generaDatos(filas, columnas) {

    var array = new Array ("Andrea", "Richi", "Manuel", "Paco", "Quiles", "Juanma");
    
    for (let i = 0; i < filas; i++) {   //Recorremos las filas de la tabla
        let nuevaFila = document.getElementById("tablita").insertRow(i);  /*Damos los valores a la 
        tabla "tablita" del html con getElementById e insertamos en las filas*/
        
        for (let j = 0; j < columnas; j++) { //Recorremos las columnas de la tabla
            let celda = nuevaFila.insertCell(j); /*Insertamos en las columnas con insertCell*/

            celda.innerHTML = array[Math.floor((Math.random()*array.length))]; /*Mandamos los datos del .js al HTML con el inner HTML
            y a continuación, recorremos el array con los datos aleatoriamente*/
        }
    }
}

generaDatos(12,8);
    
