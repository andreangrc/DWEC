import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon-service';

@Component({
  selector: 'app-desplegable',
  providers: [PokemonService],
  templateUrl: './desplegable.component.html',
  styleUrls: ['./desplegable.component.css']
})

export class DesplegableComponent {
  private _PokemonService: any;
  changePokemons(event:Event) {
    this._PokemonService.type=(event.target as HTMLInputElement).value;
    console.log(this._PokemonService.type);
  }
}
