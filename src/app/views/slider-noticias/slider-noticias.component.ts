import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Noticia } from "../../noticias/noticia";
import { NoticiaService } from "../../noticias/noticia.service";

@Component({
  selector: "app-slider-noticias",
  templateUrl: "./slider-noticias.component.html",
  styleUrls: ["./slider-noticias.component.css"],
})
export class SliderNoticiasComponent implements OnInit {
  noticias!: Noticia[];
  noticia: Noticia = new Noticia();
  constructor(private noticiaService: NoticiaService, private router: Router) {}

  ngOnInit() {
    this.noticiaService.getUltimasNoticias().subscribe((data) => {
      console.log(data);
      this.noticias = data;
    });
  }

  noticiaDetails(slug: string) {
    this.router.navigate(["noticias", slug]);
    console.log(slug);
  }
}
