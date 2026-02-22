import "dotenv/config"; //import magico
import { createApp } from "./app.js";
import { connectDB } from "./config/db.js"

const PORT = Number(process.env.PORT ?? 3000);

async function bootstrap() {
    await connectDB(process.env.MONGODB_URI ?? "") //uso de operador Nullish Coalescing o unión nula. ?? (Nullish): Solo devuelve el lado derecho si el izquierdo es exactamente null o undefined.
    
    const app = createApp();
    
    app.listen(PORT, () => {
        console.log(`API running on http://localhost:${PORT}`);
    });
}

bootstrap().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});


// Nota: en ESM con NodeNext, cuando importas archivos TS, en runtime se compila a JS, por eso usamos ./app.js (esto evita errores típicos de ESM).


// package.json
// dev corre TS directo en modo watch
// build compila a dist
// start ejecuta la versión compilada

// Asegurarse de estar en apps/backend (no en src): para correr npm run dev