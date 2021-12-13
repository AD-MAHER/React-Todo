import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableOperations from "../TableOperations/TableOperations";

export default class GlobalTable extends Component {
 

  render() {
    return (
      <>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr Ellipsis>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Number</th>
              <th>Mail</th >
              <th>City</th>
              <th>Operations</th>


            </tr>
          </thead>
          <tbody>

             
              <TableOperations/>
          
            {/* <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>897764656546</td>
              <td>asas@sada.in</td>
              <td>Ahmd</td>
              <td>Edit</td>

            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
           */}
          </tbody>
        </Table>
      </>
    );
  }
}
