import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { CarouselItem } from "./carousel-principal.interfaces";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})

export class CarouselPrincipalService {
  private apiUrl = environment.apiUrl;

  headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");
  httpOptions = {
    headers: this.headers,
  };

  constructor(private http: HttpClient) {}

  getCarouselItems(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>(this.apiUrl + "/carousel-principal");
  }
}