import FormTop from "./FormTop.jsx";
import FormBottom from "./FormBottom.jsx";
import FormButtons from "./FormButtons.jsx";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React from "react";

export default function Form() {
  const [semesters, setSemesters] = useState([]);

  function addSemester() {
    setSemesters((currentSemesters) => {
      return [...currentSemesters, { id: crypto.randomUUID() }];
    });
  }

  function deleteSemester(semesterId) {
    setSemesters((currentSemesters) => {
      return currentSemesters.filter((semester) => semester.id !== semesterId);
    });
  }

  function generatePdf() {
    const formElement = document.getElementById("pdfForm");
    html2canvas(formElement).then((canvas) => {
      var imgWidth = 210;
      var pageHeight = 290;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var pdf = new jsPDF("p", "mm", "a4");
      var position = 0;
      var pageData = canvas.toDataURL("image/jpg", 1.0);
      var imgData = encodeURIComponent(pageData);
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      pdf.setLineWidth(5);
      pdf.setDrawColor(255, 255, 255);
      pdf.rect(0, 0, 210, 295);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        pdf.setLineWidth(5);
        pdf.setDrawColor(255, 255, 255);
        pdf.rect(0, 0, 210, 295);
        heightLeft -= pageHeight;
      }
      pdf.save("DCP.pdf");
    });
  }

  return (
    <>
      <form id="pdfForm">
        <FormTop />
        <FormBottom deleteSemester={deleteSemester} semesters={semesters} />
      </form>
      <FormButtons generatePdf={generatePdf} addSemester={addSemester} />
    </>
  );
}
