import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Institucion } from 'src/app/services/becas/institucion.interfaces';
import { InstitucionService } from 'src/app/services/becas/institucion.service';

@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecasComponent implements OnInit {
  instituciones: Institucion[];
  institucion: Institucion = new Institucion();

  constructor(private institucionService: InstitucionService, private router: Router) {}

  ngOnInit() {
    this.institucionService.getInstituciones().subscribe((data) => {
      console.log(data);
      this.instituciones = data;
    });
  }

}
