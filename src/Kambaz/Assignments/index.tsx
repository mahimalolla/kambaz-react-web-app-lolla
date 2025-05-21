import { Link } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { FaPlus, FaEdit } from "react-icons/fa";

const assignments = [
  { _id: "123", title: "A1 - HTML", due: "2025-05-25", points: 100 },
  { _id: "234", title: "A2 - CSS", due: "2025-06-01", points: 100 },
  { _id: "345", title: "A3 - Bootstrap", due: "2025-06-08", points: 100 },
];

export default function AssignmentList() {
  return (
    <div className="container mt-4">
      <Breadcrumbs />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text bg-white"><i className="bi bi-search" /></span>
          <input type="text" className="form-control" placeholder="Search for Assignment" />
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-danger">
            <FaPlus className="me-1" />
            Assignment
          </button>
          <button className="btn btn-light border">
            <FaPlus className="me-1" />
            Group
          </button>
        </div>
      </div>

      <table className="table table-bordered table-hover align-middle">
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
                <Link to={`/Kambaz/Assignments/${a._id}`} className="btn btn-sm btn-outline-primary">
                  <FaEdit className="me-1" /> Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
