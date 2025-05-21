import CourseNavigation from "../Courses/Navigation";
import Modules from "../Modules";
import Status from "./status";
import Details from "./details";

export default function Home() {
  return (
    <div className="d-flex">
      {/* Left: Course Navigation */}
      <div style={{ width: 150 }}>
        <CourseNavigation />
      </div>

      {/* Middle: Modules */}
      <div style={{ flex: 2, padding: "0 20px" }}>
        <Modules />
      </div>

      {/* Right: Course Status + Details */}
      <div style={{ flex: 1 }}>
        <Status />
        <Details />
      </div>
    </div>
  );
}
