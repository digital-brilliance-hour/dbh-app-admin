import React from "react";
//import { Link } from "react-router-dom";
import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card } from "react-bootstrap";

const StudentInteractionRules = () => {
  return(
    <div>
    <PageTitle activeMenu="Student Interaction Rules" motherMenu="Pages" />
    <Row>
       <Col xs={12}>
          <Card>
             <Card.Body>
                <Row className="justify-content-between">
                   <Col lg={4} className="mb-3">
                      <div className="mb-4">
                         <h4 className="card-title card-intro-title">
                         Student Interaction Rules
                         </h4>
                         <h6>
                            Use tags <code>h1 to h6</code> for get desire
                            heading.
                         </h6>
                      </div>
                      <div className="card-content">
                         <h1>h1. Bootstrap heading</h1>
                         <h2>h2. Bootstrap heading</h2>
                         <h3>h3. Bootstrap heading</h3>
                         <h4>h4. Bootstrap heading</h4>
                         <h5>h5. Bootstrap heading</h5>
                         <h6>h6. Bootstrap heading</h6>
                      </div>
                   </Col>
                   <Col lg={3}>
                      <div className="mb-4">
                         <h4 className="card-title card-intro-title">
                            Paragraph with justify
                         </h4>
                         <p>
                            Use tags <code>text-justify</code> for get
                            desire paragraph.
                         </p>
                      </div>
                      <div className="card-content">
                         <p className="text-justify">
                            Ambitioni dedisse scripsisse iudicaretur. Cras
                            mattis iudicium purus sit amet fermentum. Donec
                            sed odio operae, eu vulputate felis rhoncus.
                            Praeterea iter est quasdam res quas ex communi.
                            At nos hinc posthac, sitientis piros Afros.
                            Petierunt uti sibi concilium totius Galliae in
                            diem certam indicere. Cras mattis iudicium
                            purus sit amet fermentum.
                         </p>
                      </div>
                   </Col>
                   </Row>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </div>
  ) 
} 	

export default StudentInteractionRules;