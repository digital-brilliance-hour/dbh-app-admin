import React, { Fragment, useState } from "react";
import PageTitle from "../../layouts/PageTitle";
import swal from "sweetalert";
import {nanoid} from 'nanoid';
import user from './../../../images/task/user.jpg';
import {
   Row,
   Col,
   Card,
   Table,
   Badge,
   Button, 
   Modal
} from "react-bootstrap";

const AddTeamTable = () => {
   
   const [postModal, setPostModal] = useState(false);
   const [contacts, setContacts] = useState();
   // delete data  
   const handleDeleteClick = (contactId) => {
       const newContacts = [...contacts];    
       const index = contacts.findIndex((contact)=> contact.id === contactId);
       newContacts.splice(index, 1);
       setContacts(newContacts);
   }
   
   //Add data 
   const [addFormData, setAddFormData ] = useState({
       Cust_Id:'',
       Date_Join:'',
       Cust_Name:'',
       Location:'',
     image:'',
   }); 
   
   // Add contact function
   const handleAddFormChange = (event) => {
       event.preventDefault();    
       const fieldName = event.target.getAttribute('name');
       const fieldValue = event.target.value;
       const newFormData = {...addFormData};
       newFormData[fieldName] = fieldValue;
       setAddFormData(newFormData);
   };
   
    //Add Submit data
   const handleAddFormSubmit = (event)=> {
       event.preventDefault();
       var error = false;
     var errorMsg = '';
       if(addFormData.Date_Join === ""){
           error = true;
        errorMsg = 'Please fill date';
       }else if(addFormData.Cust_Name === ""){
           error = true;
        errorMsg = 'Please fill name.';
       }
       else if(addFormData.Location === ""){
           error = true;
        errorMsg = 'Please fill location';
       }
       if(!error){
           const newContact = {
               id: nanoid(),
               Cust_Id: addFormData.Cust_Id,
               Date_Join:  addFormData.Date_Join,
               Cust_Name:  addFormData.Cust_Name ,
               Location:  addFormData.Location,
           image: addFormData.image,
           };
           const newContacts = [...contacts, newContact];
           setContacts(newContacts);
           setPostModal(false);
           swal('Good job!', 'Successfully Added', "success");
           addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = '';         
           
       }else{
        swal('Oops', errorMsg, "error");
     }
   }
   
	//For Image upload in ListBlog
	const [file, setFile] = React.useState(null)
   const fileHandler = (e) => {
       setFile(e.target.files[0]);
     setTimeout(function(){
        var src = document.getElementById("saveImageFile").getAttribute("src");
        addFormData.image = src; 
     }, 200);
   }

   return (
      <Fragment>
         <PageTitle activeMenu="Add Team" motherMenu="Managment" />
         <Row>
            <Col lg={12}>
               <Card>
                  <Card.Header>
                     <Card.Title>Team List</Card.Title>
                     <Button variant="info btn-rounded" onClick={()=> setPostModal(true)}>
                           <span className="btn-icon-left text-info">
                              <i className="fa fa-plus color-info" />
                           </span>
                           Add Team
                    </Button>
                  <Modal className="modal fade"  show={postModal} onHide={setPostModal} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Team</h4>
									<button type="button" className="close" onClick={()=> setPostModal(false)}><span>×</span></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="image-placeholder">	
												<div className="avatar-edit">
													<input type="file" onChange={fileHandler} id="imageUpload" 
														onClick={(event) => setFile(event.target.value)}
													/> 					
													<label htmlFor="imageUpload" name=''  ></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview">
														<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
															alt={file? file.name : null}
														/>
													</div>
												</div>
											</div> 
											 <div className="form-group mb-3">
												<label className="text-black font-w500">Team Id</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Cust_Id" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="write Id"
													/>
													<span className="validation-text"></span>
												</div>
											</div> 
											 <div className="form-group mb-3">
												<label className="text-black font-w500">Team name</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Cust_Id" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="name"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                 <div className="form-group mb-3">
												<label className="text-black font-w500">Active project</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Date_Join" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="name of project"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Current Workshop</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Location" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="Workshop" 
													/>
												</div>
											</div> 
										</div>
									</div>
								</div>
								<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary"
                                     onClick={handleAddFormSubmit}
                                    >Add</button>  
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>  
						</div>
					</div>
				</Modal>
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