const express = require("express");
const multer = require("multer");
const Tesseract = require("tesseract.js");
const path = require("path");

const app = express();
const port = 5173;

// Configuración de multer para manejar la carga de archivos
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/api/process", upload.single("file"), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  Tesseract.recognize(file.buffer, "eng", {
    logger: (m) => console.log(m),
  })
    .then(({ data: { text } }) => {
      // Aquí puedes agregar lógica para extraer datos clave del texto
      const invoiceNumber = extractInvoiceNumber(text);
      const date = extractDate(text);
      const totalAmount = extractTotalAmount(text);

      res.json({
        invoiceNumber,
        date,
        totalAmount,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error processing the file.");
    });
});

const extractInvoiceNumber = (text) => {
  const match = text.match(/Invoice Number:\s*(\d+)/i);
  return match ? match[1] : "No encontrado";
};

const extractDate = (text) => {
  const match = text.match(/Date:\s*([0-9]{4}-[0-9]{2}-[0-9]{2})/i);
  return match ? match[1] : "No encontrado";
};

const extractTotalAmount = (text) => {
  const match = text.match(/Total Amount:\s*\$?(\d+(\.\d{2})?)/i);
  return match ? match[1] : "No encontrado";
};

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});