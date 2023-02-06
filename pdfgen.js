const PDFDocument = require('pdfkit');
const fs = require('fs');

// Create a new PDF document
const doc = new PDFDocument();

// Write the PDF to a file
doc.pipe(fs.createWriteStream('dummy-data-report.pdf'));

// Add the data to the PDF document
doc.font('Helvetica-Bold').text('Dummy Data Report', { align: 'center' });
doc.moveDown();

doc.font('Helvetica').text(`Name: Abhishek Nanda`, { align: 'left' });
doc.moveDown();

doc.font('Helvetica').text(`Age: 23`, { align: 'left' });
doc.moveDown();

doc.font('Helvetica').text(`Occupation: Engineer`, { align: 'left' });
doc.moveDown();

// End and send the PDF document
doc.end();
