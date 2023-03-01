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
  @Input() public nombre: String;

  @Input() public url: Pokemon[];
  pokemon: any;
  pokemons: any;

  constructor(private _PokemonService: PokemonService) {
    this.nombre = "";
    this.url = [];
  }

  ngOnInit() :void{
    this._PokemonService.getPokemons().subscribe(
      response => {

        for(var pokemon in response.pokemon) {
          var item=response.pokemon[pokemon];
           this.pokemons=response.pokemon;
            console.log(item);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
