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
          aria-required="false"
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
          placeholder="student@students.towson.edu"
          aria-required="false"
        />
      </div>
    </div>
  );
}
