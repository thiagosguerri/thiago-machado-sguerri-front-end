import { CadastrarAutorComponent } from './cadastrar-autor/cadastrar-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListarAutoresComponent } from './listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { CadastrarLivroComponent } from './cadastrar-livro/cadastrar-livro.component';
import { AlterarLivroComponent } from './alterar-livro/alterar-livro.component';
import { AlterarAutorComponent } from './alterar-autor/alterar-autor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: []
  },
  {
    path: 'listar-livros',
    component: ListarLivrosComponent,
    canActivate: []
  },
  {
    path: 'listar-autores',
    component: ListarAutoresComponent,
    canActivate: []
  },
  {
    path: 'cadastrar-livro',
    component: CadastrarLivroComponent,
    canActivate: []
  },
  {
    path: 'cadastrar-autor',
    component: CadastrarAutorComponent,
    canActivate: []
  },
  {
    path: 'alterar-livro',
    component: AlterarLivroComponent,
    canActivate: [ ]
  },
  {
    path: 'alterar-autor',
    component: AlterarAutorComponent,
    canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
