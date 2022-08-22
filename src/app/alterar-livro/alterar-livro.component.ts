import { LivroService } from './../services/livro/livro.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Livro } from '../models/livro';
import { AlteraLivroService } from '../services/altera-livro/altera-livro.service';
import { AlteraLivro } from './alteraLivro';

const API_URL = environment.API_URL;

@Component({
  selector: 'app-alterar-livro',
  templateUrl: './alterar-livro.component.html',
  styleUrls: ['./alterar-livro.component.scss']
})
export class AlterarLivroComponent implements OnInit {

  livro!: Livro;
  editarLivroForm!: UntypedFormGroup;
  livros: Livro[] = [];


  erroAoMandarRequisicao: Boolean = false;
  mensagemErroRequisicao: string = "";
  mensagemErroEditar: string = "";
  erroAoListarLivro: string = '';


  constructor(private titleService: Title,
    private http:HttpClient,
    private alteraLivroService: AlteraLivroService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private livroService: LivroService)


    {this.titleService.setTitle('Editar Livro') }

  ngOnInit(): void {
    this.livro = this.activatedRoute.snapshot.params['tituloLivro'];
    this.editarLivroForm = this.formBuilder.group({
      titulo: ['',[Validators.required]],
      anoLancamento: ['',[Validators.required]],
    });

    this.editarLivroForm.get('titulo')?.setValue(this.livro.titulo);
    this.editarLivroForm.get('anoLancamento')?.setValue(this.livro.anoLancamento);

    this.livroService.buscaLivro().subscribe({
      next: retorno=>{
        this.livros = retorno as Livro[];
      }

    });

  }

  editaLivroPorId(){
      if(this.editarLivroForm.valid) {
        var livro = this.editarLivroForm.getRawValue() as AlteraLivro;
        this.alteraLivroService.editaLivro(livro, this.livro.id).subscribe({
          next: dados =>{
            console.log(dados, "As alterações foram realizadas.");
          },
          error: erro => {
            this.mensagemErroEditar = "As alterações não foram realizadas, tente novamente."
          }
        });
      }
    }
}

