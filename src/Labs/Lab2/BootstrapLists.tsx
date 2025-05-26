import ListGroup from "react-bootstrap/ListGroup";

const BootstrapLists = () => (
  <div className="mt-5">
    <h2>Bootstrap Lists</h2>
    <ListGroup>
      <ListGroup.Item>First item</ListGroup.Item>
      <ListGroup.Item>Second item</ListGroup.Item>
      <ListGroup.Item active>Active item</ListGroup.Item>
      <ListGroup.Item disabled>Disabled item</ListGroup.Item>
    </ListGroup>
  </div>
);

export default BootstrapLists;
