import { Schema, model, InferSchemaType } from "mongoose";
// InferSchemaType es una herramienta de Mongoose (específicamente útil cuando se usa TypeScript) que sirve para crear automáticamente un Tipo o Interfaz basándose en la definición de tu Schema.
// Su objetivo principal es evitar tener que escribir la información dos veces (una para el Schema de Mongoose y otra para la Interfaz de TypeScript).

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            required: true,
        },
        imagenUrl: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

export type Product = InferSchemaType<typeof productSchema>;
// Esta línea crea un Tipo de TypeScript basado en mi esquema de Mongoose.

// typeof productSchema: Le dice a TypeScript que mire la estructura que defini en mi esquema (nombres de campos, si son strings, números, etc.).

// InferSchemaType: Extrae esa estructura y la convierte en una interfaz de TypeScript automáticamente.

// export type Product: Al exportarlo, puedo ir a cualquier otro archivo (como mi componente de React o mi controlador) e importar Product. Así, cuando escriba product., VS Code me sugerirá automáticamente los campos como name, price, etc.

export const ProductModel = model("Product", productSchema);

// Clean Code aplicado 
    // Validaciones mínimas en schema
    // InferSchemaType para tener tipo TS automático
    // NO mezclar lógica de negocio aquí