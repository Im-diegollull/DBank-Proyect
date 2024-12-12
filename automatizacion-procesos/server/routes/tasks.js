import express from "express";
import { openai } from "../utils/openai.js";

const router = express.Router();

// Ruta para crear tareas
router.post("/", async (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).send("La descripción es obligatoria.");
  }

  try {
    // Generar tareas usando OpenAI
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Eres un asistente que organiza proyectos en tareas estructuradas.",
        },
        {
          role: "user",
          content: `Organiza este proyecto:\n\n${description}`,
        },
      ],
    });

    // Parsear las tareas generadas
    const tasks = JSON.parse(response.choices[0].message.content);

    // Devolver las tareas directamente al frontend
    res.json({ success: true, tasks });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear tareas.");
  }
});

export default router;
