import { Component, OnInit } from "@angular/core";
import { Noticia } from "../../../noticias/noticia";
import { NoticiaService } from "../../../noticias/noticia.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-noticias-destacadas",
  templateUrl: "./noticias-destacadas.component.html",
  styleUrls: ["./noticias-destacadas.component.css"],
})
export class NoticiasDestacadasComponent implements OnInit {
  noticias!: Noticia[];
  noticia: Noticia = new Noticia();
  constructor(private noticiaService: NoticiaService, private router: Router) {}

  ngOnInit() {
    this.noticiaService.getNoticiasDestacadas().subscribe((data) => {
      console.log(data);
      this.noticias = data;
    });
  }

  noticiaDetails(slug: number) {
    this.router.navigate(["noticias", slug]);
    console.log(slug);
  }
}
