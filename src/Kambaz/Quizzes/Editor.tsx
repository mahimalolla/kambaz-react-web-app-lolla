import { useParams } from "react-router-dom";

export default function QuizEditor() {
  const { qid } = useParams();

  return (
    <div className="container mt-4">
      <h3>Edit Quiz {qid}</h3>
      <form>
        <div className="mb-3">
          <label className="form-label">Quiz Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Points</label>
          <input type="number" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input type="date" className="form-control" />
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
}
