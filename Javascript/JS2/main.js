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

generaTabla += `<tr><th>Capital</th><th>Pais</th></tr>`;

for (pais of paises) {
    generaTabla += `<tr>`;
    generaTabla += `<td>${pais.capital}</td>`;
    generaTabla += `<td>${pais.nombre}</td>`;
    generaTabla += `</tr>`;
}

tabla.innerHTML += generaTabla;


//FILTRAR 
function filtrarTabla() {
    
    var input = document.getElementById("myInput");

    var filter = input.value;

    var tr = tabla.getElementsByTagName("tr");
      
    for (var i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];

      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

//how do i make a table with json


