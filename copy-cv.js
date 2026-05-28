import fs from "fs";
import path from "path";

const sourceFile = "C:\\Users\\arodr\\Downloads\\Adrian Rodriguez Fernandez CV (1).pdf";
const destFile = path.join(process.cwd(), "public", "Adrian.R-Cv.pdf");

try {
  const fileBuffer = fs.readFileSync(sourceFile);
  console.log(`Archivo origen: ${sourceFile} - Tamaño: ${fileBuffer.length} bytes`);

  fs.writeFileSync(destFile, fileBuffer);
  console.log(`✓ CV copiado exitosamente a: ${destFile}`);
  console.log(`  Tamaño del archivo: ${fs.statSync(destFile).size} bytes`);
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
