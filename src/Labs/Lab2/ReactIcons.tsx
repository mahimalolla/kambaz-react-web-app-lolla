import { FaBeer, FaApple, FaHeart, FaFacebook, FaGoogle, FaRocket } from "react-icons/fa";

export default function ReactIcons() {
  return (
    <div id="wd-react-icons">
      <h3>React Icons</h3>
      <p>Here are six React Icons:</p>
      <div style={{ fontSize: "2em", display: "flex", gap: "20px" }}>
        <FaBeer title="Beer" />
        <FaApple title="Apple" />
        <FaHeart title="Heart" />
        <FaFacebook title="Facebook" />
        <FaGoogle title="Google" />
        <FaRocket title="Rocket" />
      </div>
    </div>
  );
}
