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
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
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
