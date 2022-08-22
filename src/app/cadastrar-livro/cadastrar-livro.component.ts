import { AutorService } from './../services/autor/autor.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../models/autor';
import { Livro } from '../models/livro';
import { CadastrarLivroService } from '../services/cadastrar-livro/cadastrar-livro.service';

@Component({
  selector: 'app-cadastrar-livro',
  templateUrl: './cadastrar-livro.component.html',
  styleUrls: ['./cadastrar-livro.component.scss']
})
export class CadastrarLivroComponent implements OnInit {

  livros: Livro[] =[];
  carregadoDaLista = 'false';
  autores: Autor []= [];

  titulo = '';
  anoLancamento = '';
  autoresIds = '';

  cadastroForm!: UntypedFormGroup;
  livro!: Livro;
  listaDeAutores: number[] = [];

  erroAoCadastrarLivro: string = '';
  sucessoAoCadastrarLivro: string = '';

  constructor(private titleService: Title,
    private http:HttpClient,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private cadastrarLivroService: CadastrarLivroService,
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService)

    {this.titleService.setTitle('Cadastrar Livro')}

  ngOnInit(): void {
    this.carregadoDaLista = this.activatedRoute.snapshot.params['carregadoDaLista'];
      this.cadastroForm = this.formBuilder.group({
        titulo: ['', [Validators.required]],
        anoLancamento: ['', [Validators.required]],
        autoresIds: ['', [Validators.required]],
    });

    this.autorService.buscaTodos().subscribe({
      next: todosOsAutores => {
        this.autores = todosOsAutores as Autor[];
      }
    });

  }

  cadastrar() {
    if(this.cadastroForm.valid) {
      var livro= this.cadastroForm.getRawValue() as Livro;
      livro.autoresIds = this.listaDeAutores;
      console.log(livro);

      this.cadastrarLivroService.cadastra(livro).subscribe({
        next: data=>{
          this.sucessoAoCadastrarLivro = "O livro foi cadastrado corretamente."
          console.log(this.sucessoAoCadastrarLivro);
        },
        error: erro=>{
          this.erroAoCadastrarLivro = "O livro não foi cadastrado, por favor, tente mais tarde."
          console.log(this.erroAoCadastrarLivro);
        }
      })
    }else{
      this.erroAoCadastrarLivro = "Por favor, preencha os campos corretamente."
    }
  }
  cancelar() {
    if(this.carregadoDaLista == 'true'){
      this.router.navigate(['listar-livros']);
    }else{
      this.router.navigate(['home']);
    }
  }

}
