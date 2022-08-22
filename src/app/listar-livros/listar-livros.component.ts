import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Livro } from '../models/livro';
import { LivroService } from '../services/livro/livro.service';


@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit {

  livros: Livro[] = [];
  erroAoListarLivro: string = '';
  sucessoAoDeletarLivro: string = '';
  erroAoDeletarLivro: string = '';
  erro: string = '';


  constructor(private TitleService:Title, private livroService: LivroService)
  {this.TitleService.setTitle('Livros'); }


  ngOnInit(): void {
    this.buscaTodos();
  }

  buscaTodos() {
    this.livroService.listarLivros().subscribe(successData=> {
      this.livros = successData
    },error=> {
      this.erroAoListarLivro = 'Ocorreu um erro ao buscar os livros!'
    })
  }

  remocaoLivro(livro: Livro) {
    this.erroAoListarLivro = ''
    this.sucessoAoDeletarLivro = ''
    let text = "Gostaria de remover o livro " + livro.titulo + "?"

    if(confirm(text) == true) {
      this.livroService.deletar(livro.id).subscribe(successData => {
        this.sucessoAoDeletarLivro = "O livro " + livro.titulo + " foi excluído com sucesso!"
        this.buscaTodos()
      },error =>{
        this.erroAoDeletarLivro = "Ocorreu um erro ao remover livro: " + livro.titulo;

      })
    }
  }

}
