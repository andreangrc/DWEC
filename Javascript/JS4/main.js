
var respuesta;
var xhr = new XMLHttpRequest();

function buscarPokemon() {
  const nombrePokemon = document.getElementById('input');

  var texto = nombrePokemon.value;

  var nombre = document.getElementById('name');
  var sprite = document.getElementById('sprite');
  var height = document.getElementById('height');
  var weight = document.getElementById('weight');
  var version = document.getElementById('version');
  var type = document.getElementById('type');

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      respuesta = JSON.parse(this.responseText);
      nombre.innerHTML = respuesta.name;
      sprite.innerHTML = `<img src="${respuesta.sprites.front_default}">`;
      height.innerHTML = respuesta.height;
      weight.innerHTML = respuesta.weight;
      type.innerHTML = respuesta.types[0].type.name;
      version.innerHTML = "";

      for (let i = 0; i < respuesta.game_indices.length; i++) {
        console.log(respuesta.game_indices[i].version.name)
        version.innerHTML += `${respuesta.game_indices[i].version.name}, `;
      }
    }
  });

  xhr.open(`GET`, `https://pokeapi.co/api/v2/pokemon/${texto}`);
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}
