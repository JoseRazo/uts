export interface Categoria {
  id: number;
  nombre: string;
}

export interface Descripcion {
  id: number;
  nombre: string;
}

export interface FormatoReferencia {
  id: number;
  nombre: string;
  archivo: string;
  fecha_creacion: string;
  fecha_actualizacion: string;
}

export interface Vacante {
  id: number;
  nombre: string;
  categoria: Categoria;
  descripcion: Descripcion;
  formato_referencia: FormatoReferencia;
  convocatoria: string;
  resultados: string;
  activo: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
}
