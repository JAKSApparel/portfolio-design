import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";

// Word Export Component
export default function ExportWord({ DATA }) {
  const generateWordDoc = () => {
    const template = `
      <html xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
        <head></head>
        <body>
          <h1>{{name}}'s Resume</h1>
          <p>{{description}}</p>
          <h2>Skills</h2>
          <ul>
            {{#skills}}
              <li>{{.}}</li>
            {{/skills}}
          </ul>
        </body>
      </html>
    `;
    const zip = new PizZip();
    const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

    // Set data for templating
    doc.setData({
      name: DATA.name,
      description: DATA.description,
      skills: DATA.skills.split(", "),
    });

    try {
      doc.render();
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      saveAs(out, `${DATA.name}-resume.docx`);
    } catch (error) {
      console.error("Failed to create Word document:", error);
    }
  };

  return (
    <button
      onClick={generateWordDoc}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Download as Word Document
    </button>
  );
}
