import { MensagemComponent } from './mensagem/mensagem.component';
import { MensagemModule } from './mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { HomeComponent } from './home/home.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { CadastrarAutorComponent } from './cadastrar-autor/cadastrar-autor.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { AlterarAutorComponent } from './alterar-autor/alterar-autor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarLivrosComponent,
    ListarAutoresComponent,
    HomeComponent,
    CadastrarLivroComponent,
    CadastrarAutorComponent,
    AlterarLivroComponent,
    AlterarAutorComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MensagemModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
