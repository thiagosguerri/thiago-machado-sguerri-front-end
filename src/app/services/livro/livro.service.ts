import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

const API_URL = environment.API_URL + '/livros';
@Injectable({
  providedIn: 'root'
})
export class LivroService {

  livro!: Livro[];

  constructor(private http: HttpClient) { }

  listarLivros() : Observable<Livro[]> {
    return this.http.get<Livro[]>(API_URL);
  }

  buscaLivro(){
    return this.http.get(`${API_URL}/livros/`);
  }

  deletar(id: number): Observable<void>{
    return this.http.delete<void>(API_URL + "/" + id)
  }

  atualiza(livro: Livro){

    return this.http.put(
      `${API_URL}/livros/`,
      {
        "titulo": livro.titulo,
        "anoLancamento": livro.anoLancamento,
        "autoresIds": livro.autoresIds,
      });
  }

  cadastra(livro : Livro) {

    return this.http.post(`${API_URL}/livros`, livro);
   }
}
