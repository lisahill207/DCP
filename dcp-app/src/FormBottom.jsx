import OneSemester from "./OneSemester.jsx";

export default function FormBottom({ deleteSemester, semesters }) {
  return (
    <section className="allSemesters">
      {semesters.length === 0 && "Click to add a semester"}
      {semesters.map((semester) => {
        return (
          <OneSemester
            deleteSemester={deleteSemester}
            {...semester}
            semesterId={semester.id}
            semesters={semesters}
            key={semester.id}
          />
        );
      })}
    </section>
  );
}
