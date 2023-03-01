import { Component, OnInit } from '@angular/core';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-desplegable',
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})
export class DesplegableComponent implements OnInit {

  _pokeComp: PokemonListComponent;

  constructor(_pokeComp: PokemonListComponent){
    this._pokeComp = _pokeComp;
  }

  ngOnInit(): void {
    this._pokeComp.changePokemons("10");
  }

  changePokemons(event:Event) {
    this._pokeComp.changePokemons((event.target as HTMLInputElement).value);
  }

}
