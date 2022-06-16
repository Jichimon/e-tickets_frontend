export interface SectorInterface 
{
    Nombre: string,
    Capacidad: number,
    Precio: number,
    EsNumerado: boolean,
    EspaciosNumerados: EspacioNumerado[]
}


export interface EspacioNumerado {
    Codigo: string,
    Estado: number,
} 