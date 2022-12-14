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
  var error = document.getElementById('error');

  xhr.addEventListener("readystatechange", function () {
    try{
      if (this.readyState === 4) {
        error.innerHTML = "";
        respuesta = JSON.parse(this.responseText);
        nombre.innerHTML = respuesta.name;
        sprite.innerHTML = `<img src="${respuesta.sprites.front_default}">`;
        height.innerHTML = respuesta.height;
        weight.innerHTML = respuesta.weight;
        version.innerHTML = "";
  
        for (let i = 0; i < respuesta.game_indices.length; i++) {
          console.log(respuesta.game_indices[i].version.name);
          version.innerHTML += `${respuesta.game_indices[i].version.name}, `;
        }
        type.innerHTML = "";

        for (let i = 0; i < respuesta.types.length; i++) {
          console.log(respuesta.types[i].type.name);
          type.innerHTML += `${respuesta.types[i].type.name}\n `;
        }
        
      }
    }catch (err){
      nombre.innerHTML = "";
      sprite.innerHTML = "";
      height.innerHTML = "";
      weight.innerHTML = "";
      version.innerHTML = "";
      type.innerHTML = "";
      console.log("No se encuentra ningún pokémon con ese nombre") ;
      error.innerHTML = `<td colspan="6"> No se encuentra el pokémon</td>`
    }
  });
  xhr.open(`GET`, `https://pokeapi.co/api/v2/pokemon/${texto}`);
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
}