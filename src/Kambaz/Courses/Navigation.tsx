import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/Kambaz/Home" },
    { name: "Modules", path: "/Kambaz/Modules" },
    { name: "Piazza", path: "/Kambaz/Piazza" },
    { name: "Zoom", path: "/Kambaz/Zoom" },
    { name: "Assignments", path: "/Kambaz/Assignments" },
    { name: "Quizzes", path: "/Kambaz/Quizzes" },
    { name: "Grades", path: "/Kambaz/Grades" },
    { name: "Labs", path: "/Labs" }, 
  ];

  return (
    <div className="list-group">
      {links.map((link) => {
        const isActive = location.pathname.includes(link.path);
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`list-group-item ${
              isActive
                ? "text-black border-start border-4 border-dark bg-white"
                : "text-white bg-black"
            }`}
          >
            <i className="bi bi-dot text-danger me-2" /> {link.name}
          </Link>
        );
      })}
    </div>
  );
}
