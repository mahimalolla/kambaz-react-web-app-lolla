import { Routes, Route, Link } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";

export default function Labs() {
  return (
    <div>
      <h2>Labs</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Kambaz">Kambaz</Link></li>
        <li>
          <a
            id="wd-github"
            href="https://github.com/mahimalolla/kambaz-react-web-app-lolla"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
          </a>
        </li>
      </ul>

      <Routes>
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
      </Routes>
    </div>
  );
}
