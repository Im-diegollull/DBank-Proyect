import React, { useState } from "react";

const ProcessAutomatization = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Por favor, sube un archivo.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://localhost:3000/api/invoices", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }

      const data = await res.json();
      setResponse(data.analysis);
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error al procesar la solicitud.");
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
        <button type="submit">Procesar</button>
      </form>
      {response && (
        <div>
          <h2>Resultados</h2>
          <pre>{response}</pre>
        </div>
      )}
    </div>
  );
};

export default ProcessAutomatization;
