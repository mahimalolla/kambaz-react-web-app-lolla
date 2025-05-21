import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
const assignments = [
  { _id: "123", title: "A1 - HTML", due: "2025-05-25", points: 100 },
  { _id: "234", title: "A2 - CSS", due: "2025-06-01", points: 100 },
  { _id: "345", title: "A3 - Bootstrap", due: "2025-06-08", points: 100 },
];

export default function AssignmentList() {
  return (
    <div className="container mt-4">
      <h3>Assignments</h3>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Due</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map((a) => (
            <tr key={a._id}>
              <td>{a.title}</td>
              <td>{a.due}</td>
              <td>{a.points}</td>
              <td>
                <Link
                  to={`/Kambaz/Assignments/${a._id}`}
                  className="btn btn-sm btn-primary"
                >
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
