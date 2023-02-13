import { Component, OnInit } from "@angular/core";
import { Noticia } from "../../../noticias/noticia";
import { NoticiaService } from "../../../noticias/noticia.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detalle-noticia",
  templateUrl: "./detalle-noticia.component.html",
  styleUrls: ["./detalle-noticia.component.css"],
})
export class DetalleNoticiaComponent implements OnInit {
  slug!: string;
  noticia!: Noticia;

  constructor(
    private noticiaService: NoticiaService,
    private route: ActivatedRoute,
    private router: Router
  ) {this.router.routeReuseStrategy.shouldReuseRoute = () => false;}

  ngOnInit() {
    this.noticia = new Noticia();
    this.slug = this.route.snapshot.params["slug"];

    this.noticiaService.getNoticia(this.slug).subscribe(
      (data:any) => {
        console.log(data);
        this.noticia = data;
      },
      (error) => console.log(error)
    );
  }
}