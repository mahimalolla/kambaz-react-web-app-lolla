import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const location = useLocation();

  const links = [
    { name: "Account", icon: "person-circle", path: "/Kambaz/Account" },
    { name: "Dashboard", icon: "speedometer2", path: "/Kambaz/Dashboard" },
    { name: "Courses", icon: "book", path: "/Kambaz/Home" },
    { name: "Calendar", icon: "calendar", path: "/Kambaz/Calendar" },
    { name: "Inbox", icon: "envelope", path: "/Kambaz/Inbox" },
    { name: "Labs", icon: "terminal", path: "/Labs" },
    { name: "Lab 3", icon: "code-slash", path: "/Labs/Lab3" },  // ✅ NEW Lab 3 link
  ];

  return (
    <div className="bg-black text-center pt-3" style={{ width: "85px", minHeight: "100vh" }}>
      <a href="https://www.northeastern.edu" target="_blank" rel="noreferrer">
        <img
          src="https://northeastern.edu/wp-content/themes/northeastern/assets/images/northeastern-logo.svg"
          alt="Northeastern"
          className="img-fluid mb-4"
          style={{ width: "60px" }}
        />
      </a>

      {links.map((link) => {
        const isActive = location.pathname.startsWith(link.path);
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`d-block py-2 px-1 ${
              isActive
                ? "bg-white text-danger border-start border-4 border-dark"
                : "text-white"
            }`}
            style={{ fontSize: "0.75rem" }}
          >
            <i className={`bi bi-${link.icon} d-block`} style={{ fontSize: "1.3rem" }}></i>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
