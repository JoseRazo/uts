import { Component, OnInit } from '@angular/core';
import { VacanteService } from 'src/app/services/bolsa-trabajo-uts/vacante.service';
import { Vacante } from 'src/app/services/bolsa-trabajo-uts/vacante.interfaces';

@Component({
  selector: 'app-bolsa-trabajo-uts',
  templateUrl: './bolsa-trabajo-uts.component.html',
  styleUrls: ['./bolsa-trabajo-uts.component.css']
})
export class BolsaTrabajoUtsComponent implements OnInit {

  vacantes: Vacante[] = [];

  constructor(private vacanteService: VacanteService) { }

  ngOnInit(): void {
    console.log(this.vacantes);
    this.getVacantes();
  }

  getVacantes(): void {
    this.vacanteService.getVacantes().subscribe(vacantes => this.vacantes = vacantes);
  }

}
