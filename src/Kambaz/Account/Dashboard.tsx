import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const courses = [
    {
      title: "CS1234 React JS",
      subtitle: "Full Stack software developer",
      route: "/Kambaz/Courses/1234/Home",
      image: "https://via.placeholder.com/300x150/0d6efd/ffffff?text=React+JS",
    },
    {
      title: "CS2345 Node.js",
      subtitle: "Server-side JavaScript",
      route: "/Kambaz/Courses/2345/Home",
      image: "https://via.placeholder.com/300x150/198754/ffffff?text=Node.js",
    },
    {
      title: "CS3456 MongoDB",
      subtitle: "NoSQL Database",
      route: "/Kambaz/Courses/3456/Home",
      image: "https://via.placeholder.com/300x150/f39c12/ffffff?text=MongoDB",
    },
  ];

  return (
    <div className="container-fluid mt-4 px-5">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {courses.map((course, index) => (
          <div key={index} className="col">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.subtitle}</Card.Text>
                <Link to={course.route} className="btn btn-primary">Go</Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
