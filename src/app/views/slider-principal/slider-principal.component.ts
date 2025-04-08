import { Component, OnInit } from '@angular/core';
import { CarouselPrincipalService } from 'src/app/services/carousel-principal/carousel-principal.service';
import { CarouselItem } from 'src/app/services/carousel-principal/carousel-principal.interfaces';

@Component({
  selector: 'app-slider-principal',
  templateUrl: './slider-principal.component.html',
  styleUrls: ['./slider-principal.component.css']
})
export class SliderPrincipalComponent implements OnInit {

  carouselItems: CarouselItem[] = [];

  constructor(private carouselPrincipalService: CarouselPrincipalService ) { }

  ngOnInit() {
    this.getCarouselItems();
  }

  getCarouselItems(): void {
    this.carouselPrincipalService.getCarouselItems().subscribe(carouselItems => {
      this.carouselItems = carouselItems;
      console.log('Carousel items cargados:', this.carouselItems); // <- Aquí sí se verá
    });
  }
  

  abrirArchivos(archivos: any[], event: Event): void {
    event.preventDefault();
    archivos.forEach(archivo => {
      window.open(archivo.archivo, '_blank');
    });
  }

}
