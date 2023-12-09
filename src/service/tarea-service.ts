import { Tarea, CrearTarea, ActualizarTarea } from '../models/tarea-model'
import { crearId } from '../utils/utils'
import tareas from './tareas.json'

const tareasData: Array<Tarea> = tareas as Array<Tarea>

export const obtenerTareas=()=>{
    return tareasData
}

export const crearTarea=(data:CrearTarea)=>{
    const nuevaTarea = {
        ...data,
        fecha: new Date().toLocaleString(),
        id: crearId()
    }
    tareasData.push(nuevaTarea)
    return nuevaTarea
}

export const borrarTarea=(id:number)=>{
    const index = tareasData.findIndex(t => t.id === id)
    if(index !== -1){
        const tareaBorrada = tareasData[index]
        tareasData.splice(index, 1) 
        return tareaBorrada
    }
    else{
        throw new Error('Tarea no encontrada')
    }
}

export const actualizarTarea=(id:number, data:ActualizarTarea)=>{
    const index = tareasData.findIndex(t => t.id === id)

    if(index !== -1){
        tareasData[index] = {
            ...data,
            fecha: new Date().toLocaleString(),
            id,
        }
        return tareasData[index]
    }
}

export const obtenerTareaPorId=(id:number)=>{
    const tarea = tareasData.find(t => t.id === id)
    if(tarea){
        return tarea
    }
}

export const obtenerPorCateogoria=(categoria:string)=>{
    const tareas = tareasData.filter(t => t.categoria === categoria)
    if(tareas){
        return tareas
    }
    
    return tareas
}