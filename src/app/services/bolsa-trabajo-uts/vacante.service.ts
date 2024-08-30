import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Vacante } from "./vacante.interfaces";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class VacanteService {
  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getVacantes(): Observable<Vacante[]> {
    return this.http.get<Vacante[]>(this.apiUrl + "/vacantes");
  }
}
