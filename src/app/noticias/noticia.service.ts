import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  public baseUrl = "https://utsalamanca.edu.mx/blog/api/noticias";

  constructor(private httpClient: HttpClient) { }

  public getNoticias(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
