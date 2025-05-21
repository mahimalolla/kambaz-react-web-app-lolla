import { useParams } from "react-router-dom";

export default function AssignmentEditor() {
  const { aid } = useParams();

  return (
    <div className="container mt-4">
      <h3>Edit Assignment {aid}</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Assignment Title</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Points</label>
          <input type="number" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Assignment Group</label>
          <select className="form-select">
            <option>A1</option>
            <option>A2</option>
            <option>A3</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Submission Type</label>
          <select className="form-select">
            <option>Online</option>
            <option>On Paper</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" />
        </div>

        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
