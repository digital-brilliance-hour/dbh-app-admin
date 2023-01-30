import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";

import PageTitle from "../../../layouts/PageTitle";

const EditPost = () => {
   const [activeToggle, setActiveToggle] = useState("posts");
   const [setReplay] = useState(false);

   return (
      <Fragment>
         <PageTitle activeMenu="Edit Post" motherMenu="Managment" />

            <div>
               <div className="card">
                  <div className="card-body">
                     <div className="profile-tab">
                        <div className="custom-tab-1">
                           <ul className="nav nav-tabs">
                              <li
                                 className="nav-item"
                                 onClick={() => setActiveToggle("posts")}
                              >
                                 <Link
                                    to="#my-posts"
                                    data-toggle="tab"
                                    className={`nav-link ${
                                       activeToggle === "posts"
                                          ? "active show"
                                          : ""
                                    }`}
                                 >
                                    Posts
                                 </Link>
                              </li>
                           </ul>
                           <div className="tab-content">
                              <div
                                 id="my-posts"
                                 className={`tab-pane fade ${
                                    activeToggle === "posts"
                                       ? "active show"
                                       : ""
                                 }`}
                              >
                                 <div className="my-post-content pt-3">
                                    <div className="post-input">
                                       <textarea
                                          name="textarea"
                                          id="textarea"
                                          cols="30"
                                          rows="5"
                                          className="form-control bg-transparent"
                                          defaultValue="Please type what you want...."
                                       />
                                       <Link
                                          to=""
                                          className="btn btn-primary light px-3"
                                       >
                                          <i className="fa fa-link" />
                                       </Link>
                                       <Link
                                          to=""
                                          className="btn btn-primary light mr-1 px-3 ml-1"
                                       >
                                          <i className="fa fa-camera" />
                                       </Link>
                                       <Link
                                          to=""
                                          className="btn btn-primary mr-1"
                                       >
                                          Post
                                       </Link>
                                       <Link
                                          to=""
                                          className="btn btn-danger mr-1"
                                       >
                                          Delete Post
                                       </Link>
                                       <Link
                                          to="/diet-food-menu"
                                          className="btn rounded text-black border border-light"
                                       >
                                          <svg
                                             width={25}
                                             height={24}
                                             viewBox="0 0 25 24"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg"
                                          >
                                             <path
                                                d="M3.31615 6H14.4744C14.4744 6.53043 14.6882 7.03914 15.0686 7.41421C15.4491 7.78929 15.9651 8 16.5032 8H18.532C19.07 8 19.5861 7.78929 19.9665 7.41421C20.347 7.03914 20.5607 6.53043 20.5607 6H21.5751C21.8442 6 22.1022 5.89464 22.2924 5.70711C22.4827 5.51957 22.5895 5.26522 22.5895 5C22.5895 4.73478 22.4827 4.48043 22.2924 4.29289C22.1022 4.10536 21.8442 4 21.5751 4H20.5607C20.5607 3.46957 20.347 2.96086 19.9665 2.58579C19.5861 2.21071 19.07 2 18.532 2H16.5032C15.9651 2 15.4491 2.21071 15.0686 2.58579C14.6882 2.96086 14.4744 3.46957 14.4744 4H3.31615C3.04711 4 2.7891 4.10536 2.59887 4.29289C2.40863 4.48043 2.30176 4.73478 2.30176 5C2.30176 5.26522 2.40863 5.51957 2.59887 5.70711C2.7891 5.89464 3.04711 6 3.31615 6ZM16.5032 4H18.532V5V6H16.5032V4ZM21.5751 11H12.4456C12.4456 10.4696 12.2319 9.96086 11.8514 9.58579C11.471 9.21071 10.9549 9 10.4169 9H8.38809C7.85002 9 7.334 9.21071 6.95353 9.58579C6.57306 9.96086 6.35931 10.4696 6.35931 11H3.31615C3.04711 11 2.7891 11.1054 2.59887 11.2929C2.40863 11.4804 2.30176 11.7348 2.30176 12C2.30176 12.2652 2.40863 12.5196 2.59887 12.7071C2.7891 12.8946 3.04711 13 3.31615 13H6.35931C6.35931 13.5304 6.57306 14.0391 6.95353 14.4142C7.334 14.7893 7.85002 15 8.38809 15H10.4169C10.9549 15 11.471 14.7893 11.8514 14.4142C12.2319 14.0391 12.4456 13.5304 12.4456 13H21.5751C21.8442 13 22.1022 12.8946 22.2924 12.7071C22.4827 12.5196 22.5895 12.2652 22.5895 12C22.5895 11.7348 22.4827 11.4804 22.2924 11.2929C22.1022 11.1054 21.8442 11 21.5751 11ZM8.38809 13V11H10.4169V12V13H8.38809ZM21.5751 18H18.532C18.532 17.4696 18.3182 16.9609 17.9378 16.5858C17.5573 16.2107 17.0413 16 16.5032 16H14.4744C13.9364 16 13.4203 16.2107 13.0399 16.5858C12.6594 16.9609 12.4456 17.4696 12.4456 18H3.31615C3.04711 18 2.7891 18.1054 2.59887 18.2929C2.40863 18.4804 2.30176 18.7348 2.30176 19C2.30176 19.2652 2.40863 19.5196 2.59887 19.7071C2.7891 19.8946 3.04711 20 3.31615 20H12.4456C12.4456 20.5304 12.6594 21.0391 13.0399 21.4142C13.4203 21.7893 13.9364 22 14.4744 22H16.5032C17.0413 22 17.5573 21.7893 17.9378 21.4142C18.3182 21.0391 18.532 20.5304 18.532 20H21.5751C21.8442 20 22.1022 19.8946 22.2924 19.7071C22.4827 19.5196 22.5895 19.2652 22.5895 19C22.5895 18.7348 22.4827 18.4804 22.2924 18.2929C22.1022 18.1054 21.8442 18 21.5751 18ZM14.4744 20V18H16.5032V19V20H14.4744Z"
                                                fill="black"
                                             />
                                          </svg>
                                          Filter Post
                                       </Link>
                                    </div>
                                    <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                       <img
                                          src={profile08}
                                          alt=""
                                          className="img-fluid"
                                       />
                                       <Link
                                          className="post-title"
                                          to="/post-details"
                                       >
                                          <h4>
                                             Collection of textile samples lay
                                             spread
                                          </h4>
                                       </Link>
                                       <p>
                                          A wonderful serenity has take
                                          possession of my entire soul like
                                          these sweet morning of spare which
                                          enjoy whole heart.A wonderful serenity
                                          has take possession of my entire soul
                                          like these sweet morning of spare
                                          which enjoy whole heart.
                                       </p>
                                       <button className="btn btn-primary mr-2">
                                          <span className="mr-2">
                                             <i className="fa fa-heart" />
                                          </span>
                                          Like
                                       </button>
                                       <button
                                          className="btn btn-secondary"
                                          onClick={() => setReplay(true)}
                                       >
                                          <span className="mr-2">
                                             <i className="fa fa-reply" />
                                          </span>
                                          Reply
                                       </button>
                                    </div>
                                    <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                       <img
                                          src={profile09}
                                          alt=""
                                          className="img-fluid"
                                       />
                                       <Link
                                          className="post-title"
                                          to="/post-details"
                                       >
                                          <h4>
                                             Collection of textile samples lay
                                             spread
                                          </h4>
                                       </Link>
                                       <p>
                                          A wonderful serenity has take
                                          possession of my entire soul like
                                          these sweet morning of spare which
                                          enjoy whole heart.A wonderful serenity
                                          has take possession of my entire soul
                                          like these sweet morning of spare
                                          which enjoy whole heart.
                                       </p>
                                       <button className="btn btn-primary mr-2">
                                          <span className="mr-2">
                                             <i className="fa fa-heart" />
                                          </span>
                                          Like
                                       </button>
                                       <button
                                          className="btn btn-secondary"
                                          onClick={() => setReplay(true)}
                                       >
                                          <span className="mr-2">
                                             <i className="fa fa-reply" />
                                          </span>
                                          Reply
                                       </button>
                                    </div>
                                    <div className="profile-uoloaded-post pb-3">
                                       <img
                                          src={profile08}
                                          alt=""
                                          className="img-fluid"
                                       />
                                       <Link
                                          className="post-title"
                                          to="/post-details"
                                       >
                                          <h4>
                                             Collection of textile samples lay
                                             spread
                                          </h4>
                                       </Link>
                                       <p>
                                          A wonderful serenity has take
                                          possession of my entire soul like
                                          these sweet morning of spare which
                                          enjoy whole heart.A wonderful serenity
                                          has take possession of my entire soul
                                          like these sweet morning of spare
                                          which enjoy whole heart.
                                       </p>
                                       <button className="btn btn-primary mr-2">
                                          <span className="mr-2">
                                             <i className="fa fa-heart" />
                                          </span>
                                          Like
                                       </button>
                                       <button
                                          className="btn btn-secondary"
                                          onClick={() => setReplay(true)}
                                       >
                                          <span className="mr-2">
                                             <i className="fa fa-reply" />
                                          </span>
                                          Reply
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </Fragment>
   );
};

export default EditPost;
