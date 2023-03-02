import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PokemonService {
  public url: string;
  public type: string;

  constructor (private _http:HttpClient){
    this.url = Global.url;
    this.type = "10";
  }

  getPokemons():Observable<any>{
    return this._http.get(this.url+this.type);
  }
}
