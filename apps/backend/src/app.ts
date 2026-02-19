import express from "express";
import cors from "cors" //cors en Node.js sirve para configurar quién tiene permiso para hablar con mi API.

export function createApp() {
    const app = express();

    app.use(cors());
    app.use(express.json());

    // _req Se usa para indicar que esa variable es necesaria por la firma de la función, pero no la vas a usar dentro del código.
    app.get("/health", (_req, res)=>{
        res.status(200).json({ok: true})
    });

    return app;
}