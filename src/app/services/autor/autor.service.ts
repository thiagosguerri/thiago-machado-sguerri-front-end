import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autor } from 'src/app/models/autor';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';


const API_URL = environment.API_URL + '/autores';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  listarAutores() : Observable<Autor[]>{
    return this.http.get<Autor[]>(API_URL);
  }

  buscaTodos(){
    return this.http.get(`${API_URL}`).pipe(map(resultado => {
      return resultado as Autor[];
    }))
  }


  deletar(id: number): Observable<void>{
    return this.http.delete<void>(API_URL + "/" + id)
  }

  atualiza(autor: Autor){

    return this.http.put(
      `${API_URL}/autores/`,
      {
        "nome": autor.nome,
        "biografia": autor.biografia,
      });
  }
}
