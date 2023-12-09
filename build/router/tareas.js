"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tarea_service_1 = require("../service/tarea-service");
const route = express_1.default.Router();
route.get('/', (req, res) => {
    const tareasData = (0, tarea_service_1.obtenerTareas)();
    res.send(tareasData);
});
route.post('/', (req, res) => {
    const tareaNueva = (0, tarea_service_1.crearTarea)(req.body);
    res.send(tareaNueva);
});
route.delete('/:id', (req, res) => {
    const tareaId = Number(req.params.id);
    const tareaBorrada = (0, tarea_service_1.borrarTarea)(tareaId);
    res.send(tareaBorrada);
});
route.put('/:id', (req, res) => {
    const tareaId = Number(req.params.id);
    const tareaActualizada = (0, tarea_service_1.actualizarTarea)(tareaId, req.body);
    res.send(tareaActualizada);
});
route.get('/:id', (req, res) => {
    const tareaId = Number(req.params.id);
    const tarea = (0, tarea_service_1.obtenerTareaPorId)(tareaId);
    res.send(tarea);
});
route.get('/categoria/:categoria', (req, res) => {
    const categoria = req.params.categoria;
    const tareas = (0, tarea_service_1.obtenerPorCateogoria)(categoria);
    res.send(tareas);
});
exports.default = route;
