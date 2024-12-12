# DBank-Proyect
Flujo de Trabajo
Entrada del Usuario:

El usuario sube una imagen o escribe instrucciones.
La plataforma convierte la imagen a texto (usando OCR como Tesseract.js o una API de terceros como Google Vision).

Identificación de Tareas:

El texto extraído se analiza para identificar tareas.
Usa OpenAI API para clasificar las tareas en "Automatizables" o "No Automatizables".

Ejecución de Procesos:

Los asistentes virtuales se activan para procesar las tareas automatizables.
El backend almacena el progreso y resultados.
Visualización de Resultados:

El usuario ve el proceso documentado en tiempo real en el frontend.