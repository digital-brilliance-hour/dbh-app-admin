import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";

import PageTitle from "../../../layouts/PageTitle";

const CreatePost = () => {
   const [activeToggle, setActiveToggle] = useState("posts");
   const [setReplay] = useState(false);

   return (
      <Fragment>
         <PageTitle activeMenu="Create Post" motherMenu="Managment" />

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
                                          className="btn btn-primary"
                                       >
                                          Post
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

export default CreatePost;
