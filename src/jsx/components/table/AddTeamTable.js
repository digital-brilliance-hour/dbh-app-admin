import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
   Button
} from "react-bootstrap";

const AddTeamTable = () => {

   return (
      <Fragment>
         <PageTitle activeMenu="Add Team" motherMenu="Managment" />
         <Row>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Team List</Card.Title>
                     <Button variant="info btn-rounded">
                           <span className="btn-icon-left text-info">
                              <i className="fa fa-plus color-info" />
                           </span>
                           Add Team
                    </Button>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive hover>
                        <thead>
                           <tr>
                              <th>Team Name</th>
                              <th>NO.</th>
                              <th>Workshop Date</th>
                              <th>NO. of Memebers</th>
                              <th>Status</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Kolor Tea Shirt For Man</td>
                              <th>1</th>
                              <td>January 22</td>
                              <td className="color-primary">$21.56</td>
                              <td>
                                 <Badge variant="primary light">Sale</Badge>
                              </td>
                           </tr>
                           <tr>
                              <td>Kolor Tea Shirt For Women</td>
                              <th>2</th>
                              <td>January 30</td>
                              <td className="color-success">$55.32</td>
                              <td>
                                 <Badge variant="success">Tax</Badge>
                              </td>
                           </tr>
                           <tr>
                              <td>Blue Backpack For Baby</td>
                              <th>3</th>
                              <td>January 25</td>
                              <td className="color-danger">$14.85</td>
                              <td>
                                 <Badge variant="danger light">Extended</Badge>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
               {/* <!-- /# card --> */}
            </Col>
         </Row>
      </Fragment>
   );
};

export default AddTeamTable;