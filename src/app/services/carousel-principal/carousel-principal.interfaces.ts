export interface CarouselItem {
  id: number
  nombre: string
  imagen: string
  url?: string
  target: '_self' | '_blank';
  activo: boolean
  archivos: CarouselItemFile[]
}

export interface CarouselItemFile {
  id: number
  nombre: string
  archivo: string
}
