// BootstrapNavigation.tsx
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

const BootstrapNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="mt-5">
      <h2>Bootstrap Navigation</h2>
      <Nav variant="tabs" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey || "home")}> 
        <Nav.Item>
          <Nav.Link eventKey="home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2">Tab 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab3">Tab 3</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="mt-3">
        {activeTab === "home" && <p>This is the content for the Home tab.</p>}
        {activeTab === "tab2" && <p>This is the content for Tab 2.</p>}
        {activeTab === "tab3" && <p>This is the content for Tab 3.</p>}
      </div>
    </div>
  );
};

export default BootstrapNavigation;
