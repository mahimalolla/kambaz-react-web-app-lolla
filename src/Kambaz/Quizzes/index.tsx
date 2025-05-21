import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
const quizzes = [
  { _id: "q1", title: "Quiz 1 - HTML", due: "2025-05-20", points: 10 },
  { _id: "q2", title: "Quiz 2 - CSS", due: "2025-05-27", points: 15 },
];

export default function QuizList() {
  return (
    <div className="container mt-4">
      <h3>Quizzes</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Due</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((q) => (
            <tr key={q._id}>
              <td>{q.title}</td>
              <td>{q.due}</td>
              <td>{q.points}</td>
              <td>
                <Link to={`/Kambaz/Quizzes/${q._id}`} className="btn btn-sm btn-primary">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  <Breadcrumbs />
}
