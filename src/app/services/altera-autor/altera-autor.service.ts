import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlteraAutor } from 'src/app/alterar-autor/alteraAutor';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AlteraAutorService {

  constructor(private http: HttpClient, private router: Router) { }

  editaAutor(autor : AlteraAutor, id : number) {

    return this.http.put(`${API_URL}/autor/${id}`, autor);
  }
}
