import "./leadsPopupStyle.css";
import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";

const LeadsPopup = () => {
   
    const [isOpen, setIsOpen] = useState(false);
    
    const showModal = () => {
        setIsOpen(true);
    }

    const hideModal = () => {
        setIsOpen(false);
    };

    return(
        <div className="content-wrapper">
            <div className="maincontent-rightside student-view add-student uncategorized">
                <div class="filter">
                    <h1>Hello</h1>
                    <button onClick={showModal}>
                        <i class="fas fa-filter"></i>
                        <label class="labelheade">Filters</label>
                    </button>
                    <div class="modal fade filters-modal show" id="leadsFilter" aria-modal="true">
                        <Modal show={isOpen} onHide={hideModal}>
                            <Modal.Body>

                                    <div class="row">
                                        <div class="col-lg-4 col-12">
                                            <div class="leads-area">
                                                <div class="lead-detail">
                                                    <p class="head">Lead Name</p>
                                                    <hr/>
                                                    <p class="sub">Details</p>
                                                    <hr/>
                                                    <ul>
                                                        <li>Name</li>
                                                        <hr/>
                                                        <li>Phone</li>
                                                        <hr/>
                                                        <li>Email</li>
                                                        <hr/>
                                                        <li>Priority</li>
                                                        <hr/>
                                                        <li>Source</li>
                                                        <hr/>
                                                        <li>Created Date</li>
                                                        <hr/>
                                                        <li>Created Time</li>
                                                        <hr/>
                                                        <li>Assignee</li>
                                                        <hr/>
                                                    </ul>
                                               </div>
                                            </div>
                                            <div class="lead-action">
                                                <ul>
                                                    <li>
                                                    <div class="list-view">
                                                        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                                                    </div>
                                                    </li>
                                                    <li>
                                                        <div class="delete">
                                                        <i class="fa fa-trash" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="convert">
                                                        <button type="button" class="btn btn-convert">Convert to deal
                                                        </button>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>


                                        <div class="col-lg-8 col-12">
                                            <div class="notes-area">
                                                <div class="container">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <div class="tabbable-panel">
                                                                <div class="tabbable-line">
                                                                    <ul class="nav nav-tabs">
                                                                        <li class="active">
                                                                            <a href="/#tab_default_1" data-toggle="tab">
                                                                            Notes 
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="/#tab_default_2" data-toggle="tab">
                                                                            Activity
                                                                            </a>
                                                                        </li>                
                                                                    </ul>

                                                                    <div class="tab-content">
                                                                        <div class="tab-pane active" id="tab_default_1">
                                                                            <p>
                                                                            Hello
                                                                            </p>
                                                                        </div>

                                                                       {/* <!--activty tab !-->*/}
                                                                        <div class="row">
                                                                            <div class="col-md-12 col-12">

                                                                                    <div class="call-sec">
                                                                                        <div class="row">
                                                                                            <div class="col-md-1 col-2">
                                                                                            </div>
                                                                                            <div class="col-md-11 col-12">
                                                                                                <div class="meeting-input">
                                                                                                    
                                                                                                    <div class="tab-content">
                                                                                                        <div id="home" class="tab-pane fade in active show">
                                                                                                        <input type="text" class="form-control" placeholder="Call"/>
                                                                                                        </div>
                                                                                                        <div id="menu1" class="tab-pane fade">
                                                                                                        <input type="text" class="form-control" placeholder="Meeting"/>
                                                                                                        </div>
                                                                                                        <div id="menu2" class="tab-pane fade">
                                                                                                        <input type="text" class="form-control" placeholder="Task"/>
                                                                                                        </div>
                                                                                                        <div id="menu3" class="tab-pane fade">
                                                                                                        <input type="text" class="form-control" placeholder="Deadline"/>
                                                                                                        </div>
                                                                                                        <div id="menu4" class="tab-pane fade">
                                                                                                        <input type="text" class="form-control" placeholder="Email"/>
                                                                                                        </div>
                                                                                                        <div id="menu5" class="tab-pane fade">
                                                                                                        <input type="text" class="form-control" placeholder="Lunch"/>
                                                                                                        </div>
                                                                                                    </div>

                                                                                                    <ul class="act-icon nav nav-pills">
                                                                                                        <li >
                                                                                                        <a data-toggle="pill" href="/#home" class="active">
                                                                                                        <div class="icon-bg"><i class="fa fa-phone" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                        <a data-toggle="pill" href="/#menu1">
                                                                                                        <div class="icon-bg"><i class="fa fa-user" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                        <a data-toggle="pill" href="/#menu2">
                                                                                                        <div class="icon-bg"><i class="fa fa-clock-o" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li>
                                                                                                        <li>
                                                                                                        <a data-toggle="pill" href="/#menu3">
                                                                                                        <div class="icon-bg"><i class="fa fa-flag" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li> 
                                                                                                        <li>
                                                                                                        <a data-toggle="pill" href="/#menu4">
                                                                                                        <div class="icon-bg"><i class="fa fa-paper-plane" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li> 
                                                                                                        <li>
                                                                                                        <a data-toggle="pill" href="/#menu5">
                                                                                                        <div class="icon-bg"><i class="fa fa-cutlery" aria-hidden="true"></i></div>
                                                                                                        </a>
                                                                                                        </li>         
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="date-sec">
                                                                                        <div class="row">
                                                                                            <div class="col-md-1 col-2">
                                                                                                <i class="fa fa-clock-o left-icon" aria-hidden="true"></i>
                                                                                            </div>
                                                                                            <div class="col-md-11 col-12">
                                                                                                <div class="time-area">
                                                                                                <input type="date" class="form-control" placeholder="Date"/>
                                                                                                <input type="text" class="form-control" place="time"/>
                                                                                                <input type="date" class="form-control" placeholder="Date"/>
                                                                                                <input type="text" class="form-control" place="time"/>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                    <div class="multi-section">
                                                                                        <div class="row">
                                                                                            <div class="col-md-1 col-2">
                                                                                                <i class="fa fa-user left-icon" aria-hidden="true"></i>
                                                                                            </div>
                                                                                            <div class="col-md-11 col-12">
                                                                                                <div class="hide-show">
                                                                                                <span class="edit-on-click ">Guests</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                <div class="row">
                                                                                    <div class="col-md-1 col-2">
                                                                                        <i class="fa fa-map-marker left-icon" aria-hidden="true"></i>
                                                                                    </div>
                                                                                    <div class="col-md-11 col-12">
                                                                                        <div class="hide-show">
                                                                                            <span class="edit-on-click ">Location</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-md-1 col-2">
                                                                                        <i class="fa fa-list left-icon" aria-hidden="true"></i>
                                                                                    </div>
                                                                                    <div class="col-md-11 col-12">
                                                                                        <div class="hide-show">
                                                                                            <span class="edit-on-click ">Description</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                </div>
                                                                                
                                                                                <div class="busy-dropdown">
                                                                                    <div class="row">
                                                                                        <div class="col-md-1 col-2">
                                                                                        <i class="fa fa-sticky-note left-icon" aria-hidden="true"></i>
                                                                                        </div>
                                                                                        <div class="col-md-3 col-12">
                                                                                            <select class="form-control" name="busy" >
                                                                                                <option value="new"></option>
                                                                                                <option value="new">Busy</option>
                                                                                                <option value="exisitng">Free</option>  
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="add-note">
                                                                                    <div class="row">
                                                                                        <div class="col-md-1 col-2">
                                                                                            <i class="fa fa-sticky-note left-icon" aria-hidden="true"></i>
                                                                                        </div>
                                                                                        <div class="col-md-11 col-12">
                                                                                            <textarea name="message" rows="4" class="form-control" placeholder="add"></textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="user-dropdown">
                                                                                    <div class="row">
                                                                                        <div class="col-md-1 col-2">
                                                                                            <i class="fa fa-user" aria-hidden="true"></i>
                                                                                        </div>
                                                                                        <div class="col-md-11 col-12">
                                                                                            <select class="form-control" name="user" >
                                                                                                <option value="new">Raj(You)</option>
                                                                                                <option value="new">asasa</option>
                                                                                                <option value="exisitng">asdsad</option>  
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                <div class="user-dropdown">
                                                                                    <div class="row">
                                                                                        <div class="col-md-1 col-2">
                                                                                            <i class="fa fa-link" aria-hidden="true"></i>
                                                                                        </div>
                                                                                        <div class="col-md-11 col-12">
                                                                                            <div class="inputWithIcon">
                                                                                                <input type="text" class="form-control" placeholder="Deal or Lead"/>
                                                                                                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                                                                            </div>

                                                                                            <div class="inputWithIcon">
                                                                                                <input type="text" class="form-control" placeholder="Your name"/>
                                                                                                <i class="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
                                                                                            </div>

                                                                                            <div class="inputWithIcon">
                                                                                                <input type="text" class="form-control" placeholder="Organization"/>
                                                                                                <i class="fa fa-building-o" aria-hidden="true"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                            </div>
                                                                            
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                     </div>

                             </div>
                            </Modal.Body>

                             
                            <Modal.Footer>
                                <div class="fotercontent">
                                    <div class="rest">
                                        <a href="/#"><span><i class="far fa-redo"></i></span>Reset</a>
                                    </div>
                                    <div class="footersingbtn">
                                        <input type="submit" name="Save" class="btn getin-btn" value="Save"/>
                                    </div>
                                </div>

                            </Modal.Footer>
                        </Modal>
                   </div>
                </div>
                </div>
            
             </div>
        )
    }
    
    
    export default LeadsPopup;