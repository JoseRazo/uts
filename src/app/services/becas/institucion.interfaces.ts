export class Institucion {
    id!: number;
    nombre!: string;
    url!: string;
    activo!: boolean;
    imagenes?: Becas;
    convocatorias?: Convocatoria;
}

interface Becas {
    id?: number;
    nombre?: string;
    descripcion?: string;
    activo?: boolean;
}

interface Convocatoria {
    id?: number;
    nombre?: string;
    fecha_inicio?: string;
    fecha_fin?: string;
    imagen?: string;
    file?: string;
    activo?: boolean;
}