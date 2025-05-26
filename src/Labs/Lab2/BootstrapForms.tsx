import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BootstrapForms = () => (
  <div className="mt-5">
    <h2>Bootstrap Forms</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Comments</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Example select</Form.Label>
        <Form.Select>
          <option>Option 1</option>
          <option>Option 2</option>
        </Form.Select>
      </Form.Group>
      <Form.Check type="switch" label="Enable feature" className="mb-3" />
      <Form.Label>Range</Form.Label>
      <Form.Range />
      <Form.Check type="radio" label="Agree" name="radio" className="mb-3" />
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  </div>
);

export default BootstrapForms;