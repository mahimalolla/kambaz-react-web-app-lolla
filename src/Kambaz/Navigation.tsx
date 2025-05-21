import { Link } from "react-router-dom";

export default function CourseNavigation() {
  return (
    <div id="wd-course-navigation">
      <Link to="/Kambaz/Home">Home</Link><br />
      <Link to="/Kambaz/Modules">Modules</Link><br />
      <Link to="/Kambaz/Piazza">Piazza</Link><br />
      <Link to="/Kambaz/Zoom">Zoom</Link><br />
      <Link to="/Kambaz/Assignments">Assignments</Link><br />
      <Link to="/Kambaz/Quizzes">Quizzes</Link><br />
      <Link to="/Kambaz/Grades">Grades</Link><br />
    </div>
  );
}
