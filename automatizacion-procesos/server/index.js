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
  // Lógica para extraer el número de factura del texto
  return "12345";
};

const extractDate = (text) => {
  // Lógica para extraer la fecha del texto
  return "2023-10-01";
};

const extractTotalAmount = (text) => {
  // Lógica para extraer el monto total del texto
  return "1500.00";
};

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});