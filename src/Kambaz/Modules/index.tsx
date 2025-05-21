import Breadcrumbs from "../Breadcrumbs";
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
    <div className="container mt-4">
      <h4>Modules</h4>

      {modules.map((module) => (
        <div key={module._id} className="mb-4 border rounded">
          {/* Module Title */}
          <div className="d-flex justify-content-between align-items-center bg-secondary text-white p-2">
            <div>
              <i className="bi bi-caret-down-fill me-2"></i>
              {module.name}
            </div>
            <div className="d-flex gap-2">
              <i className="bi bi-plus-circle"></i>
              <i className="bi bi-pencil"></i>
              <i className="bi bi-trash"></i>
            </div>
          </div>

          {/* Lessons */}
          <ul className="list-group">
            {module.lessons.map((lesson, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
                style={{ borderLeft: "5px solid green" }}
              >
                <div>
                  <i className="bi bi-file-text me-2"></i>
                  {lesson}
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-three-dots-vertical"></i>
                  <i className="bi bi-pencil"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  <Breadcrumbs />
}
