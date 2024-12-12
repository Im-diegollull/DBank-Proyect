import Tesseract from "tesseract.js";

export const processOCR = async (buffer) => {
  const { data: { text } } = await Tesseract.recognize(buffer, "eng");
  return text;
};
