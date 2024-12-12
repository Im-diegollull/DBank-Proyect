const sqlite3 = require("sqlite3");

// Crear la conexión a la base de datos
const db = new sqlite3.Database("tasks.db");

// Exportar la instancia
module.exports = db;
