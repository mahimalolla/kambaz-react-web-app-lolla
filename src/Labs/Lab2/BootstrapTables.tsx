import Table from "react-bootstrap/Table";

const BootstrapTables = () => (
  <div className="mt-5">
    <h2>Bootstrap Tables</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr className="table-success">
          <td>1</td>
          <td>John</td>
          <td>Doe</td>
          <td>@johndoe</td>
        </tr>
        <tr className="table-warning">
          <td>2</td>
          <td>Jane</td>
          <td>Smith</td>
          <td>@janesmith</td>
        </tr>
        <tr className="table-danger">
          <td>3</td>
          <td>Mike</td>
          <td>Brown</td>
          <td>@mikebrown</td>
        </tr>
      </tbody>
    </Table>
  </div>
);

export default BootstrapTables;
