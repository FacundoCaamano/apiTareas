"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPorCateogoria = exports.obtenerTareaPorId = exports.actualizarTarea = exports.borrarTarea = exports.crearTarea = exports.obtenerTareas = void 0;
const utils_1 = require("../utils/utils");
const tareas_json_1 = __importDefault(require("./tareas.json"));
const tareasData = tareas_json_1.default;
const obtenerTareas = () => {
    return tareasData;
};
exports.obtenerTareas = obtenerTareas;
const crearTarea = (data) => {
    const nuevaTarea = Object.assign(Object.assign({}, data), { fecha: new Date().toLocaleString(), id: (0, utils_1.crearId)() });
    tareasData.push(nuevaTarea);
    return nuevaTarea;
};
exports.crearTarea = crearTarea;
const borrarTarea = (id) => {
    const index = tareasData.findIndex(t => t.id === id);
    if (index !== -1) {
        const tareaBorrada = tareasData[index];
        tareasData.splice(index, 1);
        return tareaBorrada;
    }
    else {
        throw new Error('Tarea no encontrada');
    }
};
exports.borrarTarea = borrarTarea;
const actualizarTarea = (id, data) => {
    const index = tareasData.findIndex(t => t.id === id);
    if (index !== -1) {
        tareasData[index] = Object.assign(Object.assign({}, data), { fecha: new Date().toLocaleString(), id });
        return tareasData[index];
    }
};
exports.actualizarTarea = actualizarTarea;
const obtenerTareaPorId = (id) => {
    const tarea = tareasData.find(t => t.id === id);
    if (tarea) {
        return tarea;
    }
};
exports.obtenerTareaPorId = obtenerTareaPorId;
const obtenerPorCateogoria = (categoria) => {
    const tareas = tareasData.filter(t => t.categoria === categoria);
    if (tareas) {
        return tareas;
    }
    return tareas;
};
exports.obtenerPorCateogoria = obtenerPorCateogoria;
