import OneClass from "./OneClass.jsx";
import { useState } from "react";

export default function Classes({ deleteSemester, semesterId }) {
  const [courses, setCourses] = useState([]);

  function addCourse(e) {
    e.preventDefault();
    setCourses((currentCourses) => {
      return [...currentCourses, { id: crypto.randomUUID() }];
    });
  }
  function deleteCourse(courseId) {
    setCourses((currentCourses) => {
      return currentCourses.filter((course) => course.id !== courseId);
    });
  }

  return (
    <>
      {courses.length === 0 && "Click to add a class"}
      {courses.map((course, index) => {
        if (index < 9) {
          return (
            <OneClass
              {...course}
              courseId={course.id}
              deleteCourse={deleteCourse}
              key={course.id}
            />
          );
        }
      })}
      <div className="courseButtons">
        <button onClick={addCourse} className="courseBtn addCourseBtn">
          Add Class
        </button>
        <button
          onClick={() => deleteSemester(semesterId)}
          className="courseBtn deleteSemesterBtn"
        >
          Delete Semester
        </button>
      </div>
    </>
  );
}
