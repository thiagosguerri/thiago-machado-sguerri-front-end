import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Autor } from '../models/autor';
import { AutorService } from '../services/autor/autor.service';
import { CadastrarAutorService } from '../services/cadastrar-autor/cadastrar-autor.service';

@Component({
  selector: 'app-cadastrar-autor',
  templateUrl: './cadastrar-autor.component.html',
  styleUrls: ['./cadastrar-autor.component.scss']
})
export class CadastrarAutorComponent implements OnInit {

  carregadoDaLista = 'false';
  sucessoAoCadastrarAutor: string = "O autor foi cadastrado corretamente."
  cadastroForm!: UntypedFormGroup;
  erroAoCadastrarAutor: string = '';
  autores: Autor[]= [];
  autor!: Autor;


  cadastroBemSucedido = false;
  alertText = '';
  type = '';

  constructor(private titleService: Title,
    private http:HttpClient,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private cadastrarAutorService: CadastrarAutorService,
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService)
    {this.titleService.setTitle('Cadastrar Autor')}

  ngOnInit(): void {
    this.carregadoDaLista = this.activatedRoute.snapshot.params['carregadoDaLista'];
    this.cadastroForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      biografia: ['', [Validators.required]],
   });

  }

  cadastrar() {
    if(this.cadastroForm.valid)   {
      var autor = this.cadastroForm.getRawValue() as Autor;
      this.cadastrarAutorService.cadastra(autor).subscribe({
        next: data=>{
          this.alertText = 'O autor foi cadastrado corretamente.'
          this.type = 'success';
          this.cadastroBemSucedido = true;

          setTimeout(() => {
            this.router.navigate(['/listar-autores']) }, 1500),
            console.log(this.sucessoAoCadastrarAutor);

        },
        error: erro=>{
          this.erroAoCadastrarAutor = "O autor não foi cadastrado, por favor, tente mais tarde."
          console.log(this.erroAoCadastrarAutor);
        }
      })
    }else{
      this.erroAoCadastrarAutor = "Por favor, preencha os campos corretamente."
    }
  }

  cancelar() {
    if(this.carregadoDaLista == 'true'){
      this.router.navigate(['listar-autores']);
    }else{
      this.router.navigate(['home']);
    }
  }
}
