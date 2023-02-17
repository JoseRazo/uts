import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NoticiaService {
  public apiUrl = "https://api.utsalamanca.edu.mx/api";
  // public apiUrl = "http://127.0.0.1:8001/api";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private httpClient: HttpClient) {}

  public getNoticias(page:number): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/articulos/" + `?page=${page}`);
  }

  // public getNoticias(): Observable<any> {
  //   return this.httpClient.get(this.apiUrl + "/articulos");
  // }

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