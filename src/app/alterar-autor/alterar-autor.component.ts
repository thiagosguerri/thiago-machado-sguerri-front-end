import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Autor } from '../models/autor';
import { AlteraAutorService } from '../services/altera-autor/altera-autor.service';
import { AutorService } from '../services/autor/autor.service';

const API_URL = environment.API_URL;

@Component({
  selector: 'app-alterar-autor',
  templateUrl: './alterar-autor.component.html',
  styleUrls: ['./alterar-autor.component.scss']
})
export class AlterarAutorComponent implements OnInit {

  autor!: Autor;
  editarAutorForm!: UntypedFormGroup;
  autores: Autor[] = [];

  constructor(private titleService: Title,
    private http:HttpClient,
    private alteraAutorService: AlteraAutorService,
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private activatedRoute: ActivatedRoute,
    private autorService: AutorService)

  {this.titleService.setTitle('Editar Autor')}

  ngOnInit(): void {
  this.autor = this.activatedRoute.snapshot.params['tituloLivro'];
    this.editarAutorForm = this.formBuilder.group({
      nome: ['',[Validators.required]],
      biografia: ['',[Validators.required]],
    });

    this.editarAutorForm.get('nome')?.setValue(this.autor.nome);
    this.editarAutorForm.get('biografia')?.setValue(this.autor.biografia);

    this.autorService.buscaTodos().subscribe({
      next: retorno=>{
        this.autores = retorno as Autor[];
      }

    });
  }

}
