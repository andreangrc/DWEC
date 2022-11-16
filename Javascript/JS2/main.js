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
            "nombre" : "Reino Unido",
            "capital" : "Londres"
        },
        {
            "nombre" : "Finlandia",
            "capital" : "Helsinki"
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
            "nombre" : "Italia",
            "capital" : "Roma"
        },
        {
            "nombre" : "Luxemburgo",
            "capital" : "Luxemburgo"
        },
        {
            "nombre" : "Rusia",
            "capital" : "Moscú"
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
        },
        {
            "nombre" : "Grecia",
            "capital" : "Atenas"
        }
    ];

//GENERAR TABLA CON JSON REPRESENTADO

var tabla = document.getElementById("tablita");

let generaTabla = "";

generaTabla += `<tr><th>Capital</th><th>País</th></tr>`;

for (pais of paises) {
    generaTabla += `<tr>`;
    generaTabla += `<td>${pais.capital}</td>`;
    generaTabla += `<td>${pais.nombre}</td>`;
    generaTabla += `</tr>`;
}

tabla.innerHTML += generaTabla;


//FILTRAR 
function filtrarTabla() {
    
    var input = document.getElementById("input");

    var filter = input.value;

    var tr = tabla.getElementsByTagName("tr");
      
    for (var i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];

      if (td) {
        const txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
            tr[i].style.display = "";
            tr[i].id = "visible";
        } else {
            tr[i].style.display = "none";
            tr[i].id = "no visible";
        }
      }
    }
}



