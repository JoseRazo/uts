import { Pipe, PipeTransform } from '@angular/core';
import { Vacante } from './vacante.interfaces';

@Pipe({
  name: 'vacantesFiltro'
})
export class VacantesFiltroPipe implements PipeTransform {

  transform(vacantes: Vacante[], filtro: string): Vacante[] {
    if (!vacantes || !filtro) {
      return vacantes;
    }
    return vacantes.filter(vacante => vacante.categoria.nombre === filtro);
  }

}
