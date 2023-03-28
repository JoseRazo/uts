import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {
  public apiUrl = "https://api.utsalamanca.edu.mx/api";
  // public apiUrl = "http://127.0.0.1:8001/api";

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private httpClient: HttpClient) { }

  public getInstituciones(): Observable<any> {
    return this.httpClient.get(this.apiUrl + "/instituciones");
  }

}
