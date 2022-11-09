var paises =  [
        {
            "nombre" : "España",
            "capital" : "Madrid"
        },
        {
            "nombre" : "Alemania",
            "capital" : "Berlín"
        },
        {
            "nombre" : "Albania",
            "capital" : "Tirana"
        },
        {
            "nombre" : "Andorra",
            "capital" : "Andorra la Vella"
        },
        {
            "nombre" : "Francia",
            "capital" : "París"
        },
        {
            "pais" : "Reino Unido",
            "capital" : "Londres"
        },
        {
            "nombre" : "Bélgica",
            "capital" : "Bruselas"
        },
        {
            "nombre" : "Croacia",
            "capital" : "Zagreb"
        },
        {
            "nombre" : "Dinamarca",
            "capital" : "Copenhage"
        },
        {
            "nombre" : "Eslovaquia",
            "capital" : "Bratislava"
        },
        {
            "nombre" : "Estonia",
            "capital" : "Tallin"
        },
        {
            "nombre" : "Finlandia",
            "capital" : "Helsinki"
        },
        {
            "nombre" : "Italia",
            "capital" : "Roma"
        },
        {
            "nombre" : "Luxemburgo",
            "capital" : "Luxemburgo"
        },
        {
            "nombre" : "Monáco",
            "capital" : "Monáco"
        },
        {
            "nombre" : "Países Bajos",
            "capital" : "Ámsterdam"
        },
        {
            "nombre" : "Polonia",
            "capital" : "Varsovia"
        },
        {
            "nombre" : "Portugal",
            "capital" : "Lisboa"
        }
    ];


    //GENERAR TABLA CON JSON REPRESENTADO

var tabla = document.getElementById("tablita");

let generaTabla = "";

generaTabla += `<tr><td>Capital</td><td>Pais</td></tr>`;

for (pais of paises) {
    generaTabla += `<tr>`;
    generaTabla += `<td>${pais.nombre}</td>`;
    generaTabla += `<td>${pais.capital}</td>`;
    generaTabla += `</tr>`;
}

tabla.innerHTML += generaTabla;


//FILTRAR 
