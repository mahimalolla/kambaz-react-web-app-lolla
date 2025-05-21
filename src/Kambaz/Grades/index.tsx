const students = [
  {
    name: "Alice Johnson",
    grades: { A1: 95, A2: 88, Quiz1: 10 },
  },
  {
    name: "Bob Smith",
    grades: { A1: 85, A2: 92, Quiz1: 9 },
  },
];

export default function Grades() {
  return (
    <div className="container mt-4">
      <h3>Grades</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Student Name</th>
            <th>A1 - HTML</th>
            <th>A2 - CSS</th>
            <th>Quiz 1</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.name}</td>
              <td>{s.grades.A1}</td>
              <td>{s.grades.A2}</td>
              <td>{s.grades.Quiz1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
