import { useParams } from "react-router-dom";
import { useState } from "react";

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
  const [assignment, setAssignment] = useState({
    title: "A1 - HTML",
    points: 100,
    group: "Assignments",
    gradeAs: "Percentage",
    submission: "Online",
    availableFrom: "2025-05-10",
    due: "2025-05-25",
    until: "2025-05-30",
  });

  return (
    <div className="container mt-4">
      <h3>Edit Assignment: {assignmentId}</h3>

      <div className="mb-3">
        <label className="form-label">Assignment Title</label>
        <input className="form-control" value={assignment.title} />
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Points</label>
          <input className="form-control" value={assignment.points} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Assignment Group</label>
          <select className="form-control" value={assignment.group}>
            <option>Assignments</option>
            <option>Quizzes</option>
            <option>Projects</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Display Grade As</label>
          <select className="form-control" value={assignment.gradeAs}>
            <option>Percentage</option>
            <option>Complete/Incomplete</option>
            <option>Points</option>
          </select>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Submission Type</label>
        <select className="form-control" value={assignment.submission}>
          <option>Online</option>
          <option>In-Class</option>
        </select>
      </div>

      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Available From</label>
          <input type="date" className="form-control" value={assignment.availableFrom} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" value={assignment.due} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Until</label>
          <input type="date" className="form-control" value={assignment.until} />
        </div>
      </div>
    </div>
  );
}
