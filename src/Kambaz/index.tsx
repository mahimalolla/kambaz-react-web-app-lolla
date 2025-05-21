import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./Courses/Navigation";  
import Account from "./Account";
import Dashboard from "./Account/Dashboard";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/editor";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/Editor";
import './styles.css';
import Grades from "./Grades";
import Piazza from "./Piazza";
import Zoom from "./Zoom";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <CourseNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Modules" element={<Modules />} />
                <Route path="/Assignments" element={<Assignments />} />
                <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="/Quizzes" element={<Quizzes />} />
                <Route path="/Quizzes/:qid" element={<QuizEditor />} />
                <Route path="/Grades" element={<Grades />} />
                <Route path="/Piazza" element={<Piazza />} />
                <Route path="/Zoom" element={<Zoom />} />
                
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
