// GridLayout.tsx
import "./index.css";

const GridLayout = () => (
  <div id="wd-css-grid-layout">
    <div className="wd-grid-row">
      <div className="wd-grid-col-half-page wd-bg-color-yellow">Left Half</div>
      <div className="wd-grid-col-half-page wd-bg-color-blue wd-fg-color-white">Right Half</div>
    </div>
    <div className="wd-grid-row">
      <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">Sidebar</div>
      <div className="wd-grid-col-main-content wd-bg-color-blue wd-fg-color-white">Main Content</div>
      <div className="wd-grid-col-right-sidebar wd-bg-color-green wd-fg-color-white">Sidebar</div>
    </div>
  </div>
);

export default GridLayout;
