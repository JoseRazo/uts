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

}
