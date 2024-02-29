export default function StudentInfo() {
  return (
    <div className="studentInfo">
      <div className="studentNameContainer">
        <label defaultValue="" htmlFor="studentName">
          Student Name:
        </label>
        <input
          type="text"
          id="studentName"
          name="studentName"
          placeholder="First Last"
          aria-required="true"
        />
      </div>
      <div className="studentEmailContainer">
        <label defaultValue="" htmlFor="studentEmail">
          Student TU Email:
        </label>
        <input
          type="email"
          id="studentEmail"
          name="studentEmail"
          placeholder="Student's TU Email"
          aria-required="true"
        />
      </div>
    </div>
  );
}
