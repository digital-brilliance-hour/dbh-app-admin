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

const CourseManuals = () => {

  return(
   <div>
      <PageTitle activeMenu="Course Manuals" motherMenu="Pages" />
   
      <Row>
      <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Ogre's Mayhem</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive hover>
                        <thead>
                           <tr>
                              <th>Course Name</th>
                              <th>Link</th>
                              <th>Application</th>
                              
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Beginers Course</td>
                              <td>
                                <Link to={"https://bit.ly/3Bak763"}>
                                 <Badge variant="primary light" >https://bit.ly/3Bak763</Badge>
                                </Link>
                              </td>
                              <td>Open BOR</td>
                              
                           </tr>
                           <tr>
                              <td>Intermediate Course</td>
                              <td>
                                 <url>
                                    <Badge variant="primary light" >https://bit.ly/3Ks5BtB</Badge>
                                 </url>
                                 </td>
                              <td>Open BOR</td>
                           </tr>
                           <tr>

                              <td>Advanced Course</td>
                              <td>
                                 <url>
                                    <Badge variant="primary light" >https://bit.ly/3r2JNNN </Badge>
                                 </url>
                              </td>
                              <td>Open BOR</td>
                              
                           </tr>
                           <tr>
                              <td>Expert Course</td>
                              <td>
                                <url>
                                 <Badge variant="primary light" >https://bit.ly/3yczlqx</Badge>
                                </url>
                              </td>
                              <td>Open BOR</td>
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

export default CourseManuals;