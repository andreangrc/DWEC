import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  providers: [PokemonService]
})
export class PokemonListComponent {
  @Input() public name: String;

  @Input() public url: String;

  items: any;
  constructor(private _pokemonService: PokemonService) {
    this.name = "";
    this.url = "";
  }

  changePokemons(event: Event) {
    this._pokemonService.type = (event.target as HTMLInputElement).value;
    console.log(this._pokemonService.type)
    this.ngOnInit();
  }

  ngOnInit(): void {
    this._pokemonService.getPokemons().subscribe(
      response => {
        for (var pokemon in response.pokemon) {
          var pokemons = response.pokemon[pokemon];
          this.items = response.pokemon;
          console.log(pokemons);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
