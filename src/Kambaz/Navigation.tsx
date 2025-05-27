import { Link } from "react-router-dom";

export default function KambazNavigation() {
  const links = [
    { name: "Home", path: "/Kambaz/Account" },
    { name: "Modules", path: "/Kambaz/Dashboard" },
    { name: "Piazza", path: "/Kambaz/Piazza" },
    { name: "Zoom", path: "/Kambaz/Zoom" },
    { name: "Assignments", path: "/Kambaz/Assignments" },
    { name: "Quizzes", path: "/Kambaz/Quizzes" },
    { name: "Grades", path: "/Kambaz/Grades" },
    { name: "Labs", path: "/Labs" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "white",
        width: "180px",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            style={{
              textDecoration: "none",
              color: "crimson",
              fontWeight: "bold",
              paddingLeft: "20px",
              paddingTop: "6px",
              paddingBottom: "6px",
            }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
