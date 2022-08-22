import { AutorService } from './../services/autor/autor.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Autor } from '../models/autor';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit {

  erroAoListarAutor: string = '';
  sucessoAoDeletarAutor: string = '';
  erroAoDeletarAutor: string = '';
  erro: string = '';
  autores: Autor[] = [];

  constructor(private TitleService:Title, private autorService: AutorService)
   {this.TitleService.setTitle('Autores')}

  ngOnInit(): void {
    this.buscaTodos();
  }

  buscaTodos() {
    this.autorService.listarAutores().subscribe(successData=> {
      this.autores = successData
    },error=> {
      this.erroAoListarAutor = 'Ocorreu um erro ao buscar os autores!'
    })
  }

}
