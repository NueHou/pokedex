import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component'; // Certifique-se de que o caminho está correto
import { PokemonService } from './services/pokemon.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/views/footer/footer.component';
import { HeaderComponent } from './components/views/header/header.component';
import { PipeService } from './services/pipe.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonPokemonComponent } from './components/views/body/button-pokemon/button-pokemon.component';
import { CardsComponent } from './components/views/body/cards/cards.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    CardsComponent,
    FooterComponent,
    HeaderComponent ,
    ButtonPokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [PokemonService, PipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
