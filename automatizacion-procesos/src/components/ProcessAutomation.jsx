import React, { useState } from "react";

const ProcessAutomation = () => {
  const [file, setFile] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("instructions", instructions);

    try {
      const res = await fetch("http://localhost:5173/api/process", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Procesar Factura</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Instrucciones adicionales"
        />
        <button type="submit">Procesar</button>
      </form>
      {response && (
        <div>
          <h2>Resultados</h2>
          <p>Número de Factura: {response.invoiceNumber}</p>
          <p>Fecha: {response.date}</p>
          <p>Monto Total: {response.totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default ProcessAutomation;