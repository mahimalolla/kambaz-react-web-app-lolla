export default function Zoom() {
  const meetings = [
    {
      topic: "Live Lecture – Week 1",
      date: "2025-05-21",
      time: "10:00 AM",
      link: "https://zoom.us/j/1234567890",
    },
    {
      topic: "Project Check-in – Week 2",
      date: "2025-05-28",
      time: "2:00 PM",
      link: "https://zoom.us/j/9876543210",
    },
  ];

  return (
    <div className="container mt-4">
      <h3>Zoom Meetings</h3>
      <ul className="list-group">
        {meetings.map((m, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{m.topic}</strong>
              <br />
              <small className="text-muted">
                {m.date} at {m.time}
              </small>
            </div>
            <a href={m.link} className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">
              Join
            </a>
          </li>
        ))}
        <li className="list-group-item">
          <a href="https://zoom.us" target="_blank" rel="noreferrer">
            Go to Zoom →
          </a>
        </li>
      </ul>
    </div>
  );
}
