export class Noticia {
    id!: number;
    title!: String;
    content!: String;
    slug!: String;
    images?: Images;
    created_at!: String;
}

interface Images {
    id?: number;
    name?: string;
}
