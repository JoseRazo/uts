import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Noticia } from "../../noticias/noticia";
import { NoticiaService } from "../../noticias/noticia.service";

@Component({
  selector: "app-noticias",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.css"],
})
export class NoticiasComponent implements OnInit {
  noticias!: Noticia[];
  noticia: Noticia = new Noticia();
  constructor(private noticiaService: NoticiaService, private router: Router) {}

  ngOnInit() {
    this.noticiaService.getNoticias().subscribe((data) => {
      console.log(data);
      this.noticias = data;
    });
  }

  noticiaDetails(id: number) {
    this.router.navigate(["noticias", id]);
    console.log(id);
  }
}
