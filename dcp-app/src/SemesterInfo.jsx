export default function SemesterInfo({ semesterId }) {
  return (
    <div className="semesterInfo">
      <label htmlFor={`semester_semester ${semesterId}`}>
        Semester
        <input
          type="text"
          id={`semester_semester ${semesterId}`}
          name={`semester_semester ${semesterId}`}
          placeholder="Spring, Summer, or Fall"
          aria-required="false"
        />
      </label>
      <label htmlFor={`year_semester_${semesterId}`}>
        Year
        <input
          type="text"
          id={`year_semester_${semesterId}`}
          name={`year_semester_${semesterId}`}
          placeholder="2024"
          aria-required="false"
        />
      </label>
    </div>
  );
}
