"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearId = void 0;
const crearId = () => {
    const id = Math.floor(Math.random() * 1000000);
    return id;
};
exports.crearId = crearId;
