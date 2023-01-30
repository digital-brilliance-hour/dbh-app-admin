import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
  NavLink,
} from "react-bootstrap";

const HelpfulLinks = () => {
  return(
    <div>
    <PageTitle activeMenu="Help fulLinks" motherMenu="Pages" />
    <Row>
    <Col lg={12}>
             <Card>
                <Card.Header>
                   <Card.Title>Helpful Links</Card.Title>
                </Card.Header>
                <Card.Body>
                   <Table responsive hover>
                      <thead>
                         <tr>
                            <th>Link Name</th>
                            <th>Link</th>
                            
                         </tr>
                      </thead>
                      <tbody>
                         <tr>
                            <td>Beginers Course</td>
                            <td>
                              <url>
                               <Badge variant="primary light" >https://bit.ly/3Bak763</Badge>
                              </url>
                            </td>
                            
                         </tr>
                         <tr>
                            <td>Intermediate Course</td>
                            <td>
                               <url>
                                  <Badge variant="primary light" >https://bit.ly/3Ks5BtB</Badge>
                               </url>
                               </td>
                         </tr>
                         <tr>

                            <td>Advanced Course</td>
                            <td>
                               <url>
                                  <Badge variant="primary light" >https://bit.ly/3r2JNNN </Badge>
                               </url>
                            </td>
                         </tr>
                         <tr>
                            <td>Expert Course</td>
                            <td>
                              <url>
                               <Badge variant="primary light" >https://bit.ly/3yczlqx</Badge>
                              </url>
                            </td>
                         </tr>
                      </tbody>
                   </Table>
                </Card.Body>
             </Card>
             {/* <!-- /# card --> */}
          </Col>
    </Row>
    </div>
  ) 
} 	

export default HelpfulLinks;