import React, { Fragment,  useRef, useState } from "react";
import { Table, Pagination, Button, Modal } from "react-bootstrap";

import { Link } from "react-router-dom";
import data from "./tableData.js";
import swal from "sweetalert";
import {nanoid} from 'nanoid';
import user from './../../../images/task/user.jpg';
 

const AddTeacherTable = () => {
   const sort = 3;
   let jobPagination = Array(Math.ceil(data.profileTable.data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   const activePag = useRef(0);
   const jobData = useRef(
      data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      )
   );
   const [demo, setdemo] = useState();
   const onClick = (i) => {
      activePag.current = i;

      jobData.current = data.profileTable.data.slice(
         activePag.current * sort,
         (activePag.current + 1) * sort
      );
/*       setdemo(
         data.profileTable.data.slice(
            activePag.current * sort,
            (activePag.current + 1) * sort
         )
      ); */
   };

   
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
      <div className="col-12">
         <div className="card">
            <div className="card-header">
               <h4 className="card-title">Teachers List</h4>
                  <Button variant="info btn-rounded" onClick={()=> setPostModal(true)}>
                              <span className="btn-icon-left text-info">
                                 <i className="fa fa-plus color-info" />
                              </span>
                              Add Teachers
                  </Button>
                  <Modal className="modal fade"  show={postModal} onHide={setPostModal} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Teacher</h4>
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
												<label className="text-black font-w500">Teacher Id</label>
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
												<label className="text-black font-w500">Teacher name</label>
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
												<label className="text-black font-w500">Start Date</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Date_Join" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="date"
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Current status</label>
												<div className="contact-occupation">
													<input type="text"   autocomplete="off"
                                                        onChange={handleAddFormChange}
														name="Cust_Name" required="required"
														className="form-control" placeholder="status" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Level</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Location" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="Level" 
													/>
												</div>
											</div> 
											<div className="form-group mb-3">
												<label className="text-black font-w500">Phone number</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Location" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="" 
													/>
												</div>
											</div>
											<div className="form-group mb-3">
												<label className="text-black font-w500">Email</label>
												<div className="contact-occupation">
													<input type="text"  autocomplete="off"
                                                        name="Location" required="required"
														onChange={handleAddFormChange}
														className="form-control" placeholder="Email" 
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
            </div>
            <div className="card-body">
               <Table responsive className="w-100">
                  <div id="example_wrapper" className="dataTables_wrapper">
                     <table id="example" className="display w-100 dataTable">
                        <thead>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {jobData.current.map((d, i) => (
                              <tr key={i}>
                                 {d.map((da, i) => (
                                    <Fragment key={i}>
                                       <td>
                                          {i === 0 ? (
                                             <img
                                                className="rounded-circle"
                                                width="35"
                                                src={da}
                                                alt=""
                                             />
                                          ) : (
                                             <Fragment>
                                                {da}
                                                {i === 8 && (
                                                   <div className="d-flex">
                                                      <Link
                                                         to="#"
                                                         className="btn btn-primary shadow btn-xs sharp mr-1"
                                                      >
                                                         <i className="fa fa-pencil"></i>
                                                      </Link>
                                                      <Link
                                                         to="#"
                                                         className="btn btn-danger shadow btn-xs sharp"
                                                      >
                                                         <i className="fa fa-trash"></i>
                                                      </Link>
                                                   </div>
                                                )}
                                             </Fragment>
                                          )}
                                       </td>
                                    </Fragment>
                                 ))}
                              </tr>
                           ))}
                        </tbody>
                        <tfoot>
                           <tr role="row">
                              {data.profileTable.columns.map((d, i) => (
                                 <th key={i}>{d}</th>
                              ))}
                           </tr>
                        </tfoot>
                     </table>

                     <div className="d-flex justify-content-between align-items-center mt-3">
                        <div className="dataTables_info">
                           Showing 
                           {data.profileTable.data.length <
                           (activePag.current + 1) * sort
                              ? data.profileTable.data.length
                              : (activePag.current + 1) * sort}
                           of {data.profileTable.data.length} entries
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers">
                           <Pagination
                              className="pagination-primary pagination-circle"
                              size="lg"
                           >
                              <li
                                 className="page-item page-indicator "
                                 onClick={() =>
                                    activePag.current > 1 &&
                                    onClick(activePag.current - 1)
                                 }
                              >
                                 <Link className="page-link" to="#">
                                    <i className="la la-angle-left" />
                                 </Link>
                              </li>
                              {jobPagination.map((number, i) => (
                                 <Pagination.Item
                                    className={
                                       activePag.current === i ? "active" : ""
                                    }
                                    onClick={() => onClick(i)}
                                 >
                                    {number}
                                 </Pagination.Item>
                              ))}
                              <li
                                 className="page-item page-indicator"
                                 onClick={() =>
                                    activePag.current + 1 <
                                       jobPagination.length &&
                                    onClick(activePag.current + 1)
                                 }
                              >
                                 <Link className="page-link" to="#">
                                    <i className="la la-angle-right" />
                                 </Link>
                              </li>
                           </Pagination>
                        </div>
                     </div>
                  </div>
               </Table>
            </div>
         </div>
      </div>
   );
};

export default AddTeacherTable;