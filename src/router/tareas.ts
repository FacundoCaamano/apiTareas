import express from 'express'
import {actualizarTarea, borrarTarea, crearTarea, obtenerPorCateogoria, obtenerTareaPorId, obtenerTareas} from '../service/tarea-service'

const route = express.Router()

route.get('/',(req,res)=>{
    const tareasData = obtenerTareas()
    res.send(tareasData)
})

route.post('/',(req,res)=>{
    const tareaNueva = crearTarea(req.body)
    res.send(tareaNueva)
})

route.delete('/:id',(req, res)=>{
    const tareaId = Number(req.params.id)
    const tareaBorrada = borrarTarea(tareaId)
    res.send(tareaBorrada)
})

route.put('/:id',(req,res)=>{
    const tareaId = Number(req.params.id)
    const tareaActualizada = actualizarTarea(tareaId, req.body)
    res.send(tareaActualizada)
})

route.get('/:id' , (req,res)=>{
    const tareaId = Number(req.params.id)
    const tarea = obtenerTareaPorId(tareaId)
    res.send(tarea)
})

route.get('/categoria/:categoria' , (req,res)=>{
    const categoria = req.params.categoria
    const tareas = obtenerPorCateogoria(categoria)
    res.send(tareas)
})

export default route