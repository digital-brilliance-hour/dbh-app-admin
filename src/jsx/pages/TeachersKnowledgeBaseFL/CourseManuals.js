import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Table,
   Badge
} from "react-bootstrap";

const CourseManuals = () => {

  return(
   <div>
      <PageTitle activeMenu="Course Manuals" motherMenu="Pages" />
   
      <Row>
      <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Game Curriculums</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive hover>
                        <thead>
                           <tr>
                              <th>Course Name</th>
                              <th>Link</th>
                              <th>Application</th>
                              <th>Technology Focus</th>
                              
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Beginners Course</td>
                              <td>
                                <Link to={"https://bit.ly/3Bak763"}>
                                 <Badge variant="primary light" >https://bit.ly/3Bak763</Badge>
                                </Link>
                              </td>
                              <td>Open BOR</td>
                              <td>C#</td>
                              
                           </tr>
                           <tr>
                              <td>Intermediate Course</td>
                              <td>
                                 <url>
                                    <Badge variant="primary light" >https://bit.ly/3Ks5BtB</Badge>
                                 </url>
                                 </td>
                              <td>Open BOR</td>
                              <td>C#</td>
                           </tr>
                           <tr>

                              <td>Advanced Course</td>
                              <td>
                                 <url>
                                    <Badge variant="primary light" >https://bit.ly/3r2JNNN </Badge>
                                 </url>
                              </td>
                              <td>Open BOR</td>
                              <td>C#</td>
                              
                           </tr>
                           <tr>
                              <td>Expert Course</td>
                              <td>
                                <url>
                                 <Badge variant="primary light" >https://bit.ly/3yczlqx</Badge>
                                </url>
                              </td>
                              <td>Open BOR</td>
                              <td>C#</td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
               {/* <!-- /# card --> */}
            </Col>
      </Row>

      <Row>
      <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Music info</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive hover>
                        <thead>
                           <tr>
                              <th>Course Name</th>
                              <th>Link</th>
                              <th>Application</th>
                              <th>Technology Focus</th>
                              
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Music Production</td>
                              <td>
                                <Link to={"https://bit.ly/3Bak763"}>
                                 <Badge variant="primary light" >https://docs.google.com/document/d/13d3k84_ULirmWS7rKQDYr6zXpFpKmcb0diWerJYrJ0M/edit?usp=sharing</Badge>
                                </Link>
                              </td>
                              <td>FL Studio</td>
                              <td>Band Camp</td>
                              
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
