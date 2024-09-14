import { Handler } from '@netlify/functions';
import * as pdfLib from 'pdf-lib';

const renderPdf: Handler = async (event) => {
  const payload = event.body ? JSON.parse(event.body) : {};
  const template = 'template.json'; // update with your template path

  // Load the template
  const templateJson = require(`../public/${template}`);

  // Populate the template with the payload data
  const populatedTemplate = populateTemplate(templateJson, payload);

  // Render the PDF document
  const pdfDoc = generatePdf(populatedTemplate);

  // Return the rendered PDF document
  return {
    statusCode: 200,
    headers: {
      'Content-Disposition': `attachment; filename="output.pdf"`,
      'Content-Type': 'application/pdf',
    },
    body: pdfDoc,
  };
};

// Helper function to populate the template with the payload data
function populateTemplate(templateJson: any, payload: any) {
  // TO DO: implement the logic to populate the template with the payload data
  // For example:
  templateJson.fields.forEach((field: any) => {
    field.value = payload[field.name];
  });
  return templateJson;
}

// Helper function to render the PDF document
function generatePdf(populatedTemplate: any) {
  // TO DO: implement the logic to render the PDF document using the populated template
  // For example:
  const pdfDoc = pdfLib.createDocument();
  pdfDoc.addPage();
  pdfDoc.drawText(populatedTemplate.fields[0].value, 100, 100);
  return pdfDoc;
}

export { renderPdf };