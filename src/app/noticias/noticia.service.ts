import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoticiaService {
  public apiUrl = "https://utsalamanca.edu.mx/blog/api";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private httpClient: HttpClient) {}

  public getNoticias(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/noticias");
  }

  public getUltimasNoticias(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/ultimas-noticias");
  }

  public getNoticiasDestacadas(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/noticias-destacadas");
  }

  public getNoticia(slug: string): Observable<Object> {
    return this.httpClient.get(`${this.apiUrl}/noticias/${slug}`);
  }
}