import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ExportPdf({ DATA }: { DATA: any }) {
  const generatePdf = async () => {
    const input = document.getElementById('pdf-content');
    
    if (!input) return;

    const canvas = await html2canvas(input, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`${DATA.name}-resume.pdf`);
  };

  return (
    <button
      onClick={generatePdf}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      Export as PDF
    </button>
  );
}
