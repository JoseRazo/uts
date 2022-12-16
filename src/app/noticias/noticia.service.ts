import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class NoticiaService {
  public baseUrl = "https://utsalamanca.edu.mx/blog/api";

  constructor(private httpClient: HttpClient) { }

  public getNoticias(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/noticias');
  }

  public getUltimasNoticias(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/ultimas-noticias');
  }

  public getNoticiasDestacadas(): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/noticias-destacadas');
  }

  public getNoticia(slug: string): Observable<Object> {
    return this.httpClient.get(`${this.baseUrl}/noticias/${slug}`);
  }
}
