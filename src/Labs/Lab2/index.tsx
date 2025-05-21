import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactIcons from "./ReactIcons";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>

      {/* 2.1.2 – Style attribute */}
      <h3>Styling with the STYLE attribute</h3>
      <p id="wd-style-attribute-paragraph">
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient, it is considered bad practice.
      </p>

      {/* 2.1.3 – ID Selectors */}
      <div id="wd-css-id-selectors">
        <h3>ID Selectors</h3>
        <p id="wd-id-selector-1">
          This paragraph uses ID selector 1 with white text on red background.
        </p>
        <p id="wd-id-selector-2">
          This paragraph uses ID selector 2 with black text on yellow background.
        </p>
      </div>

      {/* 2.1.4 – Class Selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class Selectors</h3>
        <p className="wd-class-selector">
          This paragraph uses a class selector.
        </p>
        <h4 className="wd-class-selector">
          This heading also uses the same class selector.
        </h4>
      </div>

      {/* 2.1.5 – Document Structure */}
      <div id="wd-css-structure-selectors">
        <h3>Document Structure Selectors</h3>
        <div id="wd-structure-div">
          This is a red DIV with white text and a
          <span> yellow span with blue text inside it</span>.
        </div>
      </div>

      {/* 2.1.6 – Foreground Colors */}
      <div id="wd-css-foreground-colors">
        <h3>Foreground Colors</h3>
        <h4 id="wd-foreground-blue-heading">
          This heading uses blue as the foreground color.
        </h4>
        <p id="wd-foreground-red-text">
          This paragraph uses red as the foreground color.
        </p>
        <p id="wd-foreground-green-text">
          This paragraph uses green as the foreground color.
        </p>
      </div>

      {/* 2.1.7 – Background Colors */}
      <div id="wd-css-background-colors">
        <h3>Background Colors</h3>
        <h4 id="wd-background-blue-heading">
          This heading has white text on a blue background.
        </h4>
        <p id="wd-background-red-paragraph">
          This paragraph has black text on a red background.
        </p>
        <p>
          This is a paragraph with a
          <span id="wd-background-green-span"> green span on white text </span>
          inside it.
        </p>
      </div>

      {/* 2.1.8 – Borders */}
      <div id="wd-css-borders">
        <h3>Borders</h3>
        <p id="wd-border-fat-red">
          This paragraph has a fat red solid border.
        </p>
        <p id="wd-border-thin-blue-dashed">
          This paragraph has a thin blue dashed border.
        </p>
      </div>

      {/* 2.1.9 – Margins and Padding */}
      <div id="wd-css-margins-padding">
        <h3>Margins and Padding</h3>
        <p id="wd-margin-red-yellow">
          Fat red border with yellow background and big padding above and left.
        </p>
        <p id="wd-margin-blue-yellow">
          Fat blue border with yellow background and big padding at bottom.
        </p>
        <p id="wd-margin-yellow-blue">
          Fat yellow border with blue background and big padding all around.
        </p>
        <p id="wd-margin-red-yellow-bottom">
          Fat red border with yellow background and margin at bottom.
        </p>
        <p id="wd-margin-blue-yellow-centered">
          Fat blue border with yellow background and centered using auto margins.
        </p>
        <p id="wd-margin-yellow-blue-all">
          Fat yellow border with blue background and big margin all around.
        </p>
      </div>

      {/* 2.1.10–13 – Corners */}
      <div id="wd-css-corners">
        <h3>Corners</h3>
        <div id="wd-corner-top-left-right">
          Rounded top left and top right corners.
        </div>
        <div id="wd-corner-bottom-left-right">
          Rounded bottom left and bottom right corners.
        </div>
        <div id="wd-corner-all">
          Rounded corners on all sides.
        </div>
        <div id="wd-corner-all-except-top-right">
          Rounded corners except top right.
        </div>
      </div>

      {/* 2.2 – React Icons */}
      <ReactIcons />

      {/* 2.3 – Bootstrap Responsive Grid */}
      <div className="container mt-5">
        <h3>Bootstrap Grid</h3>
        <div className="row text-center">
          <div className="col-sm-6 col-md-4 col-lg-3 bg-primary text-white p-3 m-1 rounded">Column A</div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-success text-white p-3 m-1 rounded">Column B</div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-warning text-dark p-3 m-1 rounded">Column C</div>
          <div className="col-sm-6 col-md-4 col-lg-3 bg-danger text-white p-3 m-1 rounded">Column D</div>
        </div>

        <h3 className="mt-5">12 Column Responsive Grid</h3>
        <div className="row text-center">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="col-1 border bg-light p-2">
              {i + 1}
            </div>
          ))}
        </div>

        <h3 className="mt-5">Responsive Breakpoints</h3>
        <div className="position-fixed top-0 start-0 bg-dark text-white px-2 py-1">
          <span className="d-block d-sm-none">XS</span>
          <span className="d-none d-sm-block d-md-none">SM</span>
          <span className="d-none d-md-block d-lg-none">MD</span>
          <span className="d-none d-lg-block d-xl-none">LG</span>
          <span className="d-none d-xl-block">XL+</span>
        </div>
      </div>
    </div>
  );
}
