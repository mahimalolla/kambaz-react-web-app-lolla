export default function Piazza() {
  const discussions = [
    {
      title: "Welcome to the course!",
      author: "Prof. Smith",
      date: "2025-05-01",
    },
    {
      title: "Assignment 2 Clarification",
      author: "Jane Doe",
      date: "2025-05-15",
    },
  ];

  return (
    <div className="container mt-4">
      <h3>Piazza Discussions</h3>
      <ul className="list-group">
        {discussions.map((d, index) => (
          <li key={index} className="list-group-item">
            <strong>{d.title}</strong>
            <br />
            <small className="text-muted">
              Posted by {d.author} on {d.date}
            </small>
          </li>
        ))}
        <li className="list-group-item">
          <a href="https://piazza.com" target="_blank" rel="noreferrer">
            Go to Piazza →
          </a>
        </li>
      </ul>
    </div>
  );
}
