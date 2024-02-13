export default function FormButtons({ addSemester, generatePdf }) {
  function semesterClick(e) {
    e.preventDefault();
    addSemester();
  }

  function submitClick(e) {
    e.preventDefault();
    generatePdf();
  }
  return (
    <section className="bottomButtons">
      <button onClick={semesterClick} className="bottomButton" id="addSemester">
        Add Semester
      </button>
      <button onClick={submitClick} className="bottomButton" id="submit">
        Submit
      </button>
    </section>
  );
}
