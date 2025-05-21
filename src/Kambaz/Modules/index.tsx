import { Button, Dropdown } from "react-bootstrap";
import { FaEllipsisV, FaPlus, FaCheckCircle } from "react-icons/fa";

export default function Modules() {
  const modules = [
    {
      _id: "1",
      name: "Week 1 - HTML",
      lessons: ["Intro to HTML", "Tags and Structure"],
    },
    {
      _id: "2",
      name: "Week 2 - CSS",
      lessons: ["Selectors", "Box Model"],
    },
  ];

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end gap-2 mb-3">
        <Button variant="light" className="border">Collapse All</Button>
        <Button variant="light" className="border">View Progress</Button>
        <Button variant="danger"><FaPlus className="me-1" /> Module</Button>
<div className="position-relative z-3">
  <Dropdown>
    <Dropdown.Toggle variant="light" className="border">
      <FaCheckCircle className="me-2 text-success" />
      Publish All
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Publish All</Dropdown.Item>
      <Dropdown.Item>Unpublish All</Dropdown.Item>
      <Dropdown.Item>Only Published</Dropdown.Item>
      <Dropdown.Item>Published and Scheduled</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>

      </div>

      {modules.map((module, index) => (
        <div key={index} className="bg-light border mb-3 rounded p-2">
          <div className="d-flex justify-content-between align-items-center bg-secondary text-white p-2 rounded">
            <div><i className="bi bi-folder-fill me-2"></i>{module.name}</div>
            <FaEllipsisV />
          </div>
          <ul className="list-group list-group-flush">
            {module.lessons.map((lesson, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between align-items-center ps-3"
                  style={{ borderLeft: "4px solid green" }}>
                <span><i className="bi bi-file-earmark me-2"></i>{lesson}</span>
                <FaEllipsisV />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
