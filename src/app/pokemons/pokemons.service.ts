
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import {Observable, of, from } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

@Injectable()
export class PokemonsService {

  constructor(private http: HttpClient) { }

  private pokemonUrl =  'http://nas-carlier.synology.me/api/pokemons';
  private pokemonsUrl = 'http://nas-carlier.synology.me/api/pokemon';

    private log(log: string) {
      // console.info(log);
    }

    private handleError<T>(Operation= 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(error);
        console.log('${operation} failed: ${error.message}');

        return of(result as T);
      };
    }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
      return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
        tap(_ => this.log('fetched pokemons')),
        catchError(this.handleError('getPokemons', []))
      );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log('fetched pokemon id=${id}')),
      catchError(this.handleError<Pokemon>('getPokemon id=${id}'))
      );
    }

    getPokemonTypes(): string[] {
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol'];
    }
}