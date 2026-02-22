import { Request, Response, NextFunction } from "express"
import { getAllProducts } from "../services/product.service.js"

export async function getProducts(
    _req: Request,
    res: Response,
    next: NextFunction
) {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    }catch(error) {
        next(error);
    }
}

// No lógica de negocio aquí
// Solo orquestación HTTP
// Se usa next() para middleware global

// next: Es una función que le dice a Express: "Yo ya terminé, pasa al siguiente middleware".
// next(error): Al pasarle el error, Express salta automáticamente a un Manejador de Errores Global.
// Ventaja: No se tiene que escribir res.status(500).json(...) en cada controlador. Se tiene un solo lugar en mi app que centraliza cómo se muestran los errores, manteniendo mis controladores limpios.