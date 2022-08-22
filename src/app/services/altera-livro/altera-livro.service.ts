import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlteraLivro } from 'src/app/alterar-livro/alteraLivro';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlteraLivroService {

  constructor(private http: HttpClient, private router: Router) { }

  editaLivro(livro : AlteraLivro, id : number) {

    return this.http.put(`${API_URL}/livros/${id}`, livro);
  }
}
