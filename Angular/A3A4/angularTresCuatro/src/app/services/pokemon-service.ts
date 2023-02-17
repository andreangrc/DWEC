import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/Pokemon';
import { Global } from './global';

@Injectable()
export class AnimeService {
  public url: string;

  constructor (private _http:HttpClient){
    this.url = Global.url;
  }

  getPokemons():Observable<any>{
    return this._http.get(this.url+'');
  }
}
