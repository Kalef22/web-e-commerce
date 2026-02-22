import { ProductModel, Product } from "../models/product.model.js"

export async function getAllProducts(): Promise<Product[]> {
    return ProductModel.find().lean();
}
// Le estoy diciendo a TypeScript: "Esta función promete devolver un array ([]) de productos". Esto es genial porque, al llamar a la función, VS Code sabrá exactamente qué propiedades tiene cada producto de la lista.

// La magia del .lean()
// Esta es la parte más importante para el rendimiento:

// Sin .lean(): Mongoose devuelve objetos pesados llamados "Documentos de Mongoose", que tienen métodos internos (como .save(), .populate()).

// Con .lean(): Le dices a Mongoose: "Solo dame objetos de JavaScript puros (POJOs)".

// Resultado: La consulta es mucho más rápida y consume menos memoria, porque no carga todas las herramientas internas de Mongoose que no necesitas si solo vas a enviar los datos al frontend.


// La lógica de acceso a datos vive en services
// .lean() mejora rendimiento (devuelve objetos planos)
// No mezclamos HTTP con DB → SRP correcto