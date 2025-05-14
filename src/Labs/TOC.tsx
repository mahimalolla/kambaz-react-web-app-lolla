import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li><Link to="/Labs">Labs</Link></li>
      <li><Link to="/Labs/Lab1">Lab 1</Link></li>
      <li><Link to="/Kambaz">Kambaz</Link></li>
      <li><a href="https://github.com/your-username/kambaz-react-web-app" id="wd-github" target="_blank">GitHub Repository</a></li>
    </ul>
  );
}