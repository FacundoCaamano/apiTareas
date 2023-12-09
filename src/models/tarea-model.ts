export interface Tarea{
    titulo: string,
    descripcion: string,
    prioridad: Prioridad,
    categoria: string,
    estado: Estado,
    fecha: string,
    id: number
}

export type CrearTarea = Omit<Tarea, 'id' | 'fecha'>
export type ActualizarTarea = Omit<Tarea, 'id' | 'fecha'>

type Prioridad = 'Alta' | 'Media' | 'Baja';
type Estado = 'Pendiente' | 'En progreso' | 'Completada'