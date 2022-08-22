import { Livro } from 'src/app/models/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL

@Injectable({
  providedIn: 'root'
})
export class CadastrarLivroService {

  constructor(private http:HttpClient, private router: Router) { }

  cadastra(livro : Livro) {

    return this.http.post(`${API_URL}/livros`, livro);
   }
}
