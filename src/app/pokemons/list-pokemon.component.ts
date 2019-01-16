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
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.id);
    let link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
