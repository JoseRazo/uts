import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDocuments(event: Event): void {
    event.preventDefault();
    window.open('assets/content/seguro-facultativo/Seguro_ALUMNOS_contra_accidentes.pdf', '_blank');
    window.open('assets/content/seguro-facultativo/AVISO_DE_ACCIDENTE_PREVEM_(002).pdf', '_blank');
  }

  openDocumentsContraloria(event: Event): void {
    event.preventDefault();
    window.open('assets/content/contraloria-social/Convocatoria-CS-U006-2024.pdf', '_blank');
    window.open('assets/content/contraloria-social/TRIPTICO-CS-U006-24.pdf', '_blank');
  }

}
