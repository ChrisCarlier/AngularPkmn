
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule} from './pokemon-routing.module';

import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

import { PokemonsService } from './pokemons.service';

import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        EditPokemonComponent,
        PokemonFormComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }
