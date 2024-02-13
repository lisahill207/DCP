import  StudentInfo  from "./StudentInfo.jsx";
import  AdvisorInfo  from "./AdvisorInfo.jsx";
import  MajorInfo  from "./MajorInfo.jsx";

export default function FormTop() {
  return (
    <div className="topInfo">
      <StudentInfo />
      <AdvisorInfo />
      <MajorInfo />
    </div>
  );
}
