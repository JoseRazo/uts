export class Noticia {
    id!: number;
    titulo!: String;
    contenido!: String;
    slug!: String;
    imagen!: String;
    imagenes?: Imagenes;
    fecha_evento!: String;
}

interface Imagenes {
    id?: number;
    imagen?: string;
}
