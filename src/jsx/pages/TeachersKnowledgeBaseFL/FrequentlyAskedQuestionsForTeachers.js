import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";

/// Image
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import avatar7 from "../../../images/avatar/7.jpg";
import avatar4 from "../../../images/avatar/4.jpg";
import avatar5 from "../../../images/avatar/5.jpg";
import avatar6 from "../../../images/avatar/6.jpg";
import avatar8 from "../../../images/avatar/8.jpg";

/// Bootstrap
import { Row, Col, Card, Media, Button } from "react-bootstrap";

const FrequentlyAskedQuestionsForTeachers = () => {
  const heading = "Media heading";
  const text =
     "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";
  const text2 =
     " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fuscecondimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.";
  const text3 =
     "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.";

  return(
    <Fragment>
    <PageTitle activeMenu="F.A.Q For Teachers" motherMenu="Pages" />
    <Row>
    <div className="col-lg-12">
       <Card>
          <Card.Header>
             <Card.Title>Frequently Asked Questions For Teachers</Card.Title>
          </Card.Header>
          <Card.Body>
             <div className="bootstrap-media">
                <ul className="list-unstyled">
                   <li className="media">
                      <img
                         className="mr-3 "
                         width="60"
                         src={avatar8}
                         alt="DexignZone"
                      />
                      <Media.Body>
                         <h5 className="mt-0">
                            Question:
                         </h5>
                         <p className="mb-0">{text2}</p>
                      </Media.Body>
                   </li>
                   <li className="media my-4">
                      <img
                         className="mr-3 "
                         width="60"
                         src={avatar1}
                         alt="DexignZone"
                      />
                      <Media.Body>
                         <h5 className="mt-0">
                            Answer:
                         </h5>
                         <p className="mb-0">{text2}</p>
                      </Media.Body>
                   </li>
                   <li className="media">
                      <img
                         className="mr-3 "
                         width="60"
                         src={avatar2}
                         alt="DexignZone"
                      />
                      <Media.Body>
                         <h5 className="mt-0">
                            Question:
                         </h5>
                         <p className="mb-0">{text2}</p>
                      </Media.Body>
                   </li>
                   <li className="media my-4">
                      <img
                         className="mr-3 "
                         width="60"
                         src={avatar1}
                         alt="DexignZone"
                      />
                      <Media.Body>
                         <h5 className="mt-0">
                            Answer:
                         </h5>
                         <p className="mb-0">{text2}</p>
                      </Media.Body>
                   </li>
                </ul>
             </div>
          </Card.Body>
       </Card>
    </div>
    <div className="col-xl-6 col-lg-6">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Ask A Question </h4>
                  </div>
                  <div className="card-body">
                     <div className="basic-form">
                        <form onSubmit={(e) => e.preventDefault()}>
                           <div className="form-group">
                              <textarea
                                 className="form-control"
                                 rows="4"
                                 id="comment"
                              ></textarea>
                              <Button variant="primary">Submit</Button>
                              <i className="la la-angle-right" />
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
    </Row>
    </Fragment>
    
  ) 
} 	

export default FrequentlyAskedQuestionsForTeachers;