import express from "express";
import multer from "multer";
import { processOCR } from "../utils/tesseract.js";
import { openai } from "../utils/openai.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No se subió ningún archivo.");
  }

  try {
    const text = await processOCR(file.buffer);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Eres un asistente que extrae información clave de facturas (número de factura, fecha y monto total).",
        },
        {
          role: "user",
          content: `Analiza esta factura:\n\n${text}`,
        },
      ],
    });

    res.json({ analysis: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error procesando la factura.");
  }
});

export default router;
