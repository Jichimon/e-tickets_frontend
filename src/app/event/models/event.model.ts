import { CategoryInterface } from "./category.model";
import { ImageInterface } from "./images.model";
import { LocationInterface } from "./location.model";

export interface EventInterface 
{
    Nombre: string,
    Descripcion: string,
    EventStatus: number,
    Categoria: CategoryInterface,
    Imagenes: ImageInterface[],
    Lugares: LocationInterface[]
}
