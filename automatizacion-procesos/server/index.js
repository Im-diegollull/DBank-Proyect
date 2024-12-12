import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/tasks.js";
import invoiceRoutes from "./routes/invoices.js";

dotenv.config();
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/tasks", taskRoutes); // Gestión de tareas
app.use("/api/invoices", invoiceRoutes); // Procesamiento de facturas

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
