import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-list',
  providers: [PokemonService],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  // @Inpunt public pokemons: Array<any>;
  @Input() public nombre: String;

  @Input() public url: Pokemon[];
  pokemon: any;

  constructor(private _PokemonService: PokemonService) {
    this.nombre = "";
    this.url = [];
  }

  ngOnInit(): void {
      this._PokemonService.getPokemons().subscribe(
        response => {
          for (var i = 0; i < response.pokemon.length; i++) {
            console.log(response.pokemon[i].pokemon.name);
            console.log(response.pokemon[i].pokemon.url);
            this.pokemon[i] = new Pokemon(
              response.pokemon[i].pokemon.name,
              response.pokemon[i].pokemon.url
            );
          }
        },
        error => {
          console.log(error);
        }
      )
  }
}
