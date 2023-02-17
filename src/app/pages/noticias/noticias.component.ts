import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Noticia } from "../../noticias/noticia.interfaces";
import { NoticiaService } from "../../noticias/noticia.service";

@Component({
  selector: "app-noticias",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.css"],
})
export class NoticiasComponent implements OnInit {
  page: number = 1;
  isFirst = false;
  isLast = false;
  isNextDisabled: boolean = false;
  isPrevDisabled: boolean = false;
  noticias: Noticia[];
  noticia: Noticia = new Noticia();
  constructor(private noticiaService: NoticiaService, private router: Router) {}

  // ngOnInit() {
  //   this.noticiaService.getNoticias(this.page).subscribe((data) => {
  //     this.noticias = data;
  //     console.log(data);
  //   });
  // }

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias() {
    this.noticiaService.getNoticias(this.page).subscribe(
      (data) => {
        this.noticias = data.results;
        console.log(data);
        if (data.next == null) {
          this.isNextDisabled = true;
        } else {
          this.isNextDisabled = false;
        }
        if (data.previous == null) {
          this.isPrevDisabled = true;
        } else {
          this.isPrevDisabled = false;
        }
      },
      (err) => {
        console.log(err.error);
      }
    );
  }

  nextPage(): void {
    if (!this.isLast) {
      this.page++;
      this.cargarNoticias();
      this.noticiasTop();
    }
  }

  prevPage(): void {
    if (!this.isFirst) {
      this.page--;
      this.cargarNoticias();
      this.noticiasTop();
    }
  }

  noticiasTop(): void {
    const noticiasTop = document.getElementById('noticias');
    noticiasTop.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  noticiaDetails(slug: string) {
    this.router.navigate(["noticias", slug]);
    console.log(slug);
  }
}
