import { Observable } from 'rxjs';
import { Autor } from './../../models/autor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CadastrarAutorService {

  constructor(private http:HttpClient, private router: Router) { }

  cadastra(autor : Autor): Observable<Autor> {

    return this.http.post<Autor>(`${API_URL}/autores`, autor);
   }


}
