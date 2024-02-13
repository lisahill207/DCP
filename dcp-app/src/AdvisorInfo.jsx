export default function AdvisorInfo() {
  return (
    <div className="advisorInfo">
      <div className="advisorNameContainer">
        <label htmlFor="advisorName">Advisor's Name:</label>
        <input
          type="text"
          id="advisorName"
          name="advisorName"
          placeholder="First Last"
          aria-required="false"
        />
      </div>
      <div className="advisorEmailContainer">
        <label htmlFor="advisorEmail">Advisor TU Email:</label>
        <input
          type="email"
          id="advisorEmail"
          name="advisorEmail"
          placeholder="advisor@towson.edu"
          aria-required="false"
        />
      </div>
    </div>
  );
}
