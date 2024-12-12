import React, { useState } from "react";

const InvoiceProcessor = () => {
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description) {
      alert("Por favor, describe tu proyecto.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setTasks(data.tasks); // Actualiza las tareas generadas
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un problema al generar las tareas.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Automatización de Tareas</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe tu proyecto o lista de tareas"
          style={{ width: "100%", height: "100px", marginBottom: "10px" }}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Generando..." : "Generar Tareas"}
        </button>
      </form>

      {tasks.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Lista de Tareas Generadas</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.description}</strong> - <em>{task.priority}</em>{" "}
                {task.due_date && <span>(Fecha: {task.due_date})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InvoiceProcessor;
