import mongoose from "mongoose";

export async function connectDB(uri: string):Promise<void> {
    if(!uri) {
        throw new Error("MONGODB_URI is missing. Check your .env file");
    }

    const isConnected = mongoose.connection.readyState ===1;
    if(isConnected) return;

    await mongoose.connect(uri);
    console.log("MongoDB connected");
    
}

export async function disconnectDB(): Promise<void> {
    const isConnected = mongoose.connection.readyState ===1;
    if(!isConnected) return;

    await mongoose.disconnect();
    console.log("MongoDB disconnected");
}

// Clean/SOLID: DB aislada en config, funciones pequeñas, sin mezclar HTTP con infraestructura.