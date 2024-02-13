import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function OneClass({ deleteCourse, courseId }) {
  return (
    <div key={courseId} className="oneClass">
      <label htmlFor={`class_name_for_${courseId}`}>
        Class Name:
        <input
          type="text"
          id={`class_name_for_${courseId}`}
          name={`class_name_for_${courseId}`}
          placeholder="ENGL 102"
          aria-required="false"
        />
      </label>
      <label htmlFor={`credits_for_${courseId}`}>
        Credits
        <input
          type="text"
          id={`credits_for_${courseId}`}
          name={`credits_for_${courseId}`}
          placeholder="3"
          aria-required="false"
        />
      </label>
      <button
        className="deleteCourseBtn"
        onClick={() => deleteCourse(courseId)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
