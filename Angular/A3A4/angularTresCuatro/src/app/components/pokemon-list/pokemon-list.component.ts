import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers:[PokemonService]
})
export class PokemonListComponent{
  pokemons: any;

  constructor(private _pokemonService: PokemonService) {
  }

  changePokemons(type: any) {
    this._pokemonService.type = type;
    this._pokemonService.getPokemons().subscribe(
      response => {
        this.pokemons=response.pokemon;
      },
      error => {
        console.log(error);
      }
    )
  }
}
