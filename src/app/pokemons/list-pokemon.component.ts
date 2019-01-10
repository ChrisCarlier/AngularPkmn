import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { Router } from '@angular/router';
import { PokemonsService } from './pokemons.service';


@Component({
  selector: 'list-pokemon',
  templateUrl: `./list-pokemon.component.html`
})
export class ListPokemonComponent implements OnInit {

  private pokemons: Pokemon[];
  constructor(private router: Router, private pokemonService: PokemonsService) {  }

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }


}
