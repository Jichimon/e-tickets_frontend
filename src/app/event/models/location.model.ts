import { SectorInterface } from "./sector.model";

export interface LocationInterface 
{
    Direccion: string,
    CapacidadTotal: number,
    Fechas: string[],
    Sectores: SectorInterface[]
}
