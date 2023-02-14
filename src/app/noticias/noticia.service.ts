import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoticiaService {
  public apiUrl = "https://api.utsalamanca.edu.mx/api";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private httpClient: HttpClient) {}

  public getNoticias(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/articulos");
  }

  public getUltimasNoticias(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/ultimos-articulos");
  }

  public getNoticiasDestacadas(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/articulos-destacados");
  }

  public getNoticia(slug: string): Observable<Object> {
    return this.httpClient.get(`${this.apiUrl}/articulos/${slug}`);
  }
}