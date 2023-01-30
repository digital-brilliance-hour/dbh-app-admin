import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
   Row,
   Col,
   Card,
   Table,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { Link } from "react-router-dom";

const EditTeamTable = () => {

   return (
      <Fragment>
      <PageTitle activeMenu="Edit Team" motherMenu="Managment" />
         <Row>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Teams</Card.Title>
                  </Card.Header>
                  <Card.Body>
                     <Table responsive>
                        <thead>
                           <tr>
                              <th className="width50">
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="checkAll"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="checkAll"
                                    ></label>
                                 </div>
                              </th>
                              <th>
                                 <strong>NAME</strong>
                              </th>
                              <th>
                                 <strong>ROLL NO.</strong>
                              </th>
                              <th>
                                 <strong>Workshop Date</strong>
                              </th>
                              <th>
                                 <strong>NO. of Memebers</strong>
                              </th>
                              <th>
                                 <strong>Status</strong>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox2"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox2"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar1}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>01 August 2020</td>
                              <td>example@example.com </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-success mr-1"></i>{" "}
                                    Successful
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox3"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox3"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar2}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>01 August 2020</td>
                              <td>example@example.com </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-danger mr-1"></i>{" "}
                                    Canceled
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td>
                                 <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox4"
                                       required=""
                                    />
                                    <label
                                       className="custom-control-label"
                                       htmlFor="customCheckBox4"
                                    ></label>
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <img
                                       src={avatar3}
                                       className="rounded-lg mr-2"
                                       width="24"
                                       alt=""
                                    />{" "}
                                    <span className="w-space-no">
                                       Dr. Jackson
                                    </span>
                                 </div>
                              </td>
                              <td>
                                 <strong>542</strong>
                              </td>
                              <td>01 August 2020</td>
                              <td>example@example.com </td>
                              <td>
                                 <div className="d-flex align-items-center">
                                    <i className="fa fa-circle text-warning mr-1"></i>{" "}
                                    Pending
                                 </div>
                              </td>
                              <td>
                                 <div className="d-flex">
                                    <Link
                                       href="#"
                                       className="btn btn-primary shadow btn-xs sharp mr-1"
                                    >
                                       <i className="fa fa-pencil"></i>
                                    </Link>
                                    <Link
                                       href="#"
                                       className="btn btn-danger shadow btn-xs sharp"
                                    >
                                       <i className="fa fa-trash"></i>
                                    </Link>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </Table>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
      </Fragment>
   );
};

export default EditTeamTable;