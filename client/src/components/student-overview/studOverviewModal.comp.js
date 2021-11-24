import React, { useEffect,useState } from 'react';
import "./studOverview.style.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import { fetchAllStudents } from "../../pages/allStudents/allStudentAction";
import { filterSearchUser, fetchAllUsers } from "../getAllTheUsers/getUsersAction";
import Moment from 'moment';
import axios from "axios"
import { Accordion } from 'react-bootstrap';

export const UncategorizedStudents = () => {
 

  const dispatch = useDispatch();
  const { students } = useSelector(
    (state) => state.allStudent
  );
 

  const [studentUserName,setStudentUserName]=useState("")
  const [cliId,setCliId]=useState("")
  useEffect(() => {
    if (!students.length) {
      dispatch(fetchAllStudents());
    }
  }, [students, dispatch]);

  const { users } = useSelector(
    (state) => state.getUser
  );

  console.log("users", users)


  
  
  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
  }, [users, dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  }

  const showModal2 = () => {
    setIsOpen2(true);
  }

  const hideModal = () => {
    setIsOpen(false);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };
  

  return (
    <div className="content-wrapper">
      <div className="maincontent-rightside student-view add-student uncategorized">

        <section class="maincontent">
          <div class="container-fluid">
            <div class="row">
              <div className="col-md-6">
                <div className="add-student">
                    <div className="add-text">
                        <div className="add-round">
                          <span><i className="fa fa-tasks"></i></span>
                        </div>
                        <small>All Students</small>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="import-from">
                  <p>Import from spreadsheet</p>
                  <div className="st-file-upload">
                  <Link to="/addstudent"><label for="file-upload" className="custom-file-upload">
                  <i className="fa fa-user-graduate"></i> Add New Student
                  <span>+</span>
                  </label></Link>

                  <input id="file-upload" type="file"/>
                </div>       
              </div>
            </div>
          </div>
        </div>
      </section>


        {/*--student-leads start --*/}
        <div class="student-leads">
          <div class="container-fluid">
            <div class="leads">
              <div class="headingdiv">
                <div class="row">
                  <div class="col-lg-6 col-12">
                    <div class="student-lead ">
                      <p>I need help with students & leads</p>
                    </div>
                  </div>

                  <div class="col-lg-6 col-12">
                    <form class="activform ml-auto">
                      <div class="form-row">
                        <div class="form-group">
                          <div class="activi-inputs">
                            <div class="filter">
                              <div class="view">
                                <Link to="/student-overview">
                                  <i class="fas fa-th"></i>
                                  <label class="labelheade">View as pipelines</label>
                                </Link>
                              </div>
                            </div>
                            <select class="form-control filter-box">
                              <option>Import</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            <div class="filter">
                              <button onClick={showModal}>
                                <i class="fas fa-filter"></i>
                                <label class="labelheade">Filters</label>
                              </button>
                              <div class="modal fade filters-modal show" id="update" aria-modal="true">
                                <Modal show={isOpen} onHide={hideModal}>
                                  <Modal.Body>
                                    <div class="fl-head">
                                      <h5><span><i class="fal fa-filter"></i></span> Filters</h5>
                                      <button onClick={hideModal} className="close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>
                                    <div class="fl-form">
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label>List</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Visa expiring</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Courses ending</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Offers</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Status</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sale</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Referal source</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Next follow up date</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Heat level</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sort by</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="fotercontent">
                                          <div class="rest">
                                            <a href="#"><span><i class="far fa-redo"></i></span> Reset</a>
                                          </div>
                                          <div class="footersingbtn">
                                            <input type="submit" name="Save" class="btn getin-btn" value="Save" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Modal.Body>

                                  <Modal.Footer>

                                  </Modal.Footer>
                                </Modal>
                              </div>
                            </div>

                            <div class="modal fade filters-modal" id="filters" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div class="modal-dialog" role="document">

                                <div class="modal-content">
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>

                                  <div class="modal-body">
                                    <div class="fl-head">
                                      <h5><span><i class="fal fa-filter"></i></span> Filters</h5>
                                    </div>
                                    <div class="fl-form">
                                      <div class="form-row">
                                        <div class="form-group col-md-6">
                                          <label>List</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Visa expiring</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Courses ending</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Offers</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Status</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sale</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Referal source</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Next follow up date</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Heat level</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                          <label>Sort by</label>
                                          <select name="" class="form-control">
                                            <option value="volvo">1</option>
                                            <option value="saab">Saab</option>
                                            <option value="mercedes">Mercedes</option>
                                            <option value="audi">Audi</option>
                                          </select>
                                        </div>
                                        <div class="fotercontent">
                                          <div class="rest">
                                            <a href="#"><span><i class="far fa-redo"></i></span> Reset</a>
                                          </div>
                                          <div class="footersingbtn">
                                            <input type="submit" name="Save" class="btn getin-btn" value="Save" />
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
                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--student-leads end --*/}

        {/*-- commantable --*/}
        <div class="commantablesection uncategorized-list">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <div class="stuednttable table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>NAME</th>
                        <th>CREATED DATES</th>
                        <th>INFO</th>
                        <th>DATES</th>
                        <th>VISA</th>
                        <th>Sale status</th>
                        <th>ASSIGNED TO</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        students.slice(0).reverse().map( (item)=>(
                            <tr key={item.id}>
                              <td>{item.firstName}</td>
                              <td>{(Moment(item.addedAt).format('DD/MM/YYYY'))}</td>
                              <td>{item.email}</td>
                              <td>{(Moment(item.addedAt).format('DD/MM/YYYY'))}</td>
                              <td>{item.salesStatus}</td>
                              <td>{item.userName}</td> 
                              <td>{item.userName}</td>             
                              <td>
                                  <div class="action">
                                      <a onClick={showModal2}><i class="fas fa-pen"></i></a>
                                  </div>
                                  <div class="modal fade filters-modal show" aria-modal="true">
                                      <Modal show={isOpen2} onHide={hideModal2}>
                                    <div id="studentFilter">
                                      <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-top">
                                              <h5>Update Student</h5>
                                              <button type="button" onClick={hideModal2} class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                              </button>
                                            </div>
                                          <Modal.Body>

                                                <div class="student-filter-area">

                                                  <div class="row">

                                                    <div class="col-lg-7 col-12">

                                                        <div class="update-crm">
                                                          <div class="headingdiv">CRM</div>
                                                          <div class="crm-form">
                                                            <div class="form-row">

                                                                <div class="form-group col-md-6 col-12">
                                                                  <label>Sales Pipeline<p>*</p></label>
                                                                  <select class="form-control" name="cars" id="cars">
                                                                    <option value="allstudent">All Student</option>
                                                                    <option value="europeans">Europeans</option>
                                                                    <option value="allstudent">All Student</option>
                                                                    <option value="europeans">Europeans</option>
                                                                  </select>
                                                                </div>

                                                                <div class="form-group col-md-6 col-12">
                                                                  <label>Sale Status<p>*</p></label>
                                                                  <select class="form-control" name="cars" id="cars">
                                                                    <option value="allstudent">All Student</option>
                                                                    <option value="europeans">Europeans</option>
                                                                    <option value="allstudent">All Student</option>
                                                                  </select>
                                                                </div>

                                                                <div class="form-group col-md-6 col-12">
                                                                  <label>Heat Level</label>
                                                                  <select class="form-control" name="cars" id="cars">
                                                                    <option value="allstudent">Very Hot</option>
                                                                    <option value="europeans">Hot</option>
                                                                    <option value="allstudent">Warm</option>
                                                                  </select>
                                                                </div>

                                                                <div class="form-group col-md-12 col-12">
                                                                  <label>Other comments (remarks)</label>
                                                                  <textarea name="message" rows="5" class="form-control" placeholder="insert text here"></textarea>
                                                                </div>      
                                                            </div>
                                                          </div>
                                                        </div>
                                                        

                                                        <div class="others">
                                                          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                              <div class="card">
                                                                  <div class="card-header" role="tab" id="headingOne1">
                                                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                                                      aria-controls="collapseOne1">
                                                                      <div class="headingdiv">Others <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                    </a>
                                                                  </div>
                                                                  <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                                                      data-parent="#accordionEx">
                                                                      <div class="card-body">
                                                                          <div class="crm-form">
                                                                            <div class="form-row">

                                                                                <div class="form-group col-md-4 col-12">
                                                                                  <label>Status <p>*</p></label>
                                                                                  <select class="form-control" name="cars" id="cars">
                                                                                    <option value="allstudent">Onshore</option>
                                                                                    <option value="europeans">Offshore</option>
                                                                                  </select>
                                                                                </div>

                                                                                <div class="form-group col-md-4 col-12">
                                                                                  <label>Referral source <p>*</p></label>
                                                                                  <select class="form-control" name="cars" id="cars">
                                                                                    <option value="allstudent">unknown</option>
                                                                                    <option value="europeans">Youtube</option>
                                                                                    <option value="europeans">Instagram</option>
                                                                                    <option value="europeans">Facebook</option>
                                                                                    <option value="europeans">Google</option>
                                                                                  </select>
                                                                                </div>

                                                                                <div class="form-group col-md-4 col-12">
                                                                                  <label>Referral details</label>
                                                                                  <select class="form-control" name="cars" id="cars">
                                                                                    <option value="allstudent">Zbigniew Malkowski</option>
                                                                                  </select>
                                                                                </div>
                                                                            </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                        </div>

                                                        <div class="counsellor">
                                                          <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                              <div class="card">
                                                                  <div class="card-header" role="tab" id="headingOne2">
                                                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne2" aria-expanded="true"
                                                                      aria-controls="collapseOne2">
                                                                      <div class="headingdiv">Counsellors <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                    </a>
                                                                  </div>
                                                                  <div id="collapseOne2" class="collapse show" role="tabpanel" aria-labelledby="headingOne2"
                                                                      data-parent="#accordionEx">
                                                                    <div class="card-body">
                                                                      <div class="crm-form">
                                                                        <div class="form-row">

                                                                            <div class="form-group col-md-12 col-12">
                                                                              <label>Counsellor 1</label>
                                                                              <input type="text" class="form-control" placeholder="" name="" value="Artur Szulakowski" />
                                                                            </div>

                                                                            <div class="form-group col-md-12 col-12">
                                                                              <label>Counsellor 2</label>
                                                                              <input type="text" class="form-control" placeholder="" name="" />
                                                                            </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                          </div>
                                                        </div>


                                                        <div class="notes">
                                                            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                <div class="card">
                                                                    <div class="card-header" role="tab" id="headingOne3">
                                                                      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne3" aria-expanded="true"
                                                                        aria-controls="collapseOne3">
                                                                        <div class="headingdiv">Add a note <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                      </a>
                                                                    </div>
                                                                    <div id="collapseOne3" class="collapse show" role="tabpanel" aria-labelledby="headingOne3"
                                                                        data-parent="#accordionEx">
                                                                      <div class="card-body">
                                                                        <div class="crm-form">
                                                                          <div class="form-row">

                                                                              <div class="form-group col-md-12 col-12">
                                                                                <textarea name="message" rows="4" class="form-control" placeholder="Add a Note"></textarea>
                                                                              </div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="update-student">
                                                            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                <div class="card">
                                                                    <div class="card-header" role="tab" id="headingOne4">
                                                                      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne4" aria-expanded="true"
                                                                        aria-controls="collapseOne4">
                                                                        <div class="headingdiv">Personal <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                      </a>
                                                                    </div>
                                                                    <div id="collapseOne4" class="collapse show" role="tabpanel" aria-labelledby="headingOne4"
                                                                        data-parent="#accordionEx">
                                                                        <div class="card-body">
                                                                            <div class="crm-form">
                                                                                <div class="form-row">

                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>First Name<p>*</p></label>
                                                                                      <input type="text" class="form-control" placeholder="" name="" value="Artur"/>
                                                                                    </div>

                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>Last Name<p>*</p></label>
                                                                                      <input type="text" class="form-control" placeholder="" name="" value="Szulakowski"/>
                                                                                    </div>

                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>Birthday<p>*</p></label>
                                                                                      <input type="date" class="form-control" placeholder="" name="" value=""/>
                                                                                    </div>

                                                                                  
                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>Gender</label>
                                                                                      <select class="form-control" name="gender">
                                                                                        <option value="allstudent">Male</option>
                                                                                        <option value="europeans">Female</option>
                                                                                        <option value="allstudent">Other</option>
                                                                                      </select>
                                                                                    </div>

                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>Status<p>*</p></label>
                                                                                      <input type="date" class="form-control" placeholder="" name="" value="Onshore"/>
                                                                                    </div>

                                                                                    <div class="form-group col-md-4 col-12">
                                                                                      <label>Nationality</label>
                                                                                      <select class="form-control" name="gender">
                                                                                        <option value="allstudent">Poland</option>
                                                                                        <option value="europeans">Peru</option>
                                                                                        <option value="allstudent">Norway</option>
                                                                                        <option value="allstudent">Ghana</option>
                                                                                      </select>
                                                                                    </div>  
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                      </div>
                              

                                                        <div class="contact">
                                                           <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                              <div class="card">
                                                                  <div class="card-header" role="tab" id="headingOne1">
                                                                    <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne5" aria-expanded="true"
                                                                      aria-controls="collapseOne5">
                                                                      <div class="headingdiv">Contact <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                    </a>
                                                                  </div>
                                                                  <div id="collapseOne5" class="collapse show" role="tabpanel" aria-labelledby="headingOne5"
                                                                      data-parent="#accordionEx">
                                                                      <div class="card-body">
                                                                          <div class="crm-form">
                                                                              <div class="form-row">

                                                                                <div class="form-group col-md-12 col-12">
                                                                                  <label>Email</label>
                                                                                  <input type="email" class="form-control" placeholder="" name="" value="adams258@o2.pl"/>
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                  <label>Onshore phone</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="" />
                                                                                </div>

                                                                                <div class="form-group col-md-12 col-12">
                                                                                  <label>Offshore phone</label>
                                                                                  <input type="text" class="form-control" placeholder="" name="" />
                                                                                </div>

                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                        </div>

                                                        <div class="visa">
                                                            <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                                                                <div class="card">
                                                                    <div class="card-header" role="tab" id="headingOne6">
                                                                      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne6" aria-expanded="true"
                                                                        aria-controls="collapseOne6">
                                                                        <div class="headingdiv">Visa <i class="fas fa-angle-down rotate-icon"></i></div>
                                                                      </a>
                                                                    </div>
                                                                    <div id="collapseOne6" class="collapse show" role="tabpanel" aria-labelledby="headingOne6"
                                                                        data-parent="#accordionEx">
                                                                          <div class="card-body">
                                                                            <div class="crm-form">
                                                                              <div class="form-row">

                                                                                  <div class="form-group col-md-4 col-12">
                                                                                    <label>Type</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="" value="500"/>
                                                                                  </div>

                                                                                  <div class="form-group col-md-4 col-12">
                                                                                    <label>Visa expire date</label>
                                                                                    <input type="text" class="form-control" placeholder="" name="" value="03/06/2022" />
                                                                                  </div>
                                                                            </div>
                                                                          </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                    </div>                                                
                                                    <div class="col-lg-5 col-12">
                                                        <div class="personal">
                                                                <div class="headingdiv">Personal Details
                                                                    <div class="element-actions" >
                                                                      <a href="" class="btn btn-sm" data-toggle="modal" data-target="#personalEdit" >
                                                                        <i class="fa fa-pencil" aria-hidden="true"></i><span>Edit</span>
                                                                      </a>
                                                                    </div>
                                                                </div>

                                                                <div class="first-name">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-address-book" aria-hidden="true"></i>
                                                                          <span class="text-muted">First name</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>Chen-Ting</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="last-name">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-address-book" aria-hidden="true"></i>
                                                                          <span class="text-muted">Last name</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>Tsung</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="birth">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-birthday-cake" aria-hidden="true"></i>
                                                                          <span class="text-muted">Birthday</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>01/01/1999</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="status mb-10">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-map-marker" aria-hidden="true"></i>
                                                                          <span class="text-muted">Status</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>Male</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="nationality">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-globe" aria-hidden="true"></i>
                                                                          <span class="text-muted">Nationality</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>Taiwan</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="email">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-envelope" aria-hidden="true"></i>
                                                                          <span class="text-muted">Email</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>a0961005565@gmail.com</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="phone">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                                                          <span class="text-muted">Onshore phone</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>+61 409 130 865</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="phone">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <i class="fa fa-phone" aria-hidden="true"></i>
                                                                          <span class="text-muted">Offshore phone</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>+61 409 130 865</b></span>
                                                                  </div>
                                                                  </div>
                                                                </div>

                                                                <div class="visa">
                                                                  <div class="row">
                                                                      <div class='col-sm-6 col-12'>
                                                                          <span class="text-muted">Visa expiry date</span>
                                                                      </div>
                                                                      <div class='col-sm-6 col-12 text-right'>
                                                                      <span class="text"><b>10/09/2022</b></span>
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
                                              <div class="form-buttons-w">
                                                  <div className="row">
                                                     <div className="col-md-9">
                                                        <button type="button" class="btn btn-danger btn-secondary">Delete</button>
                                                     </div>
                                                     <div className="col-md-3">
                                                        <button type="button" class="btn float-right btn-primary getin-btn">Save</button>
                                                     </div>
                                                  </div>      
                                              </div>          
                                            </div>
                                          </Modal.Footer>
                                          </div>
                                      </div>
                                    </div>
                                    </Modal>
                                    
                                  </div>
                              </td>
                             
                            </tr>
                          )
                        )
                      }



                      {/* <tr>
                                                    <td>Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="action">
                                                            <a href="#"><i class="fas fa-pen"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                <td>Adam Malkowski</td>
                                                <td>01/02/2021</td>
                                                <td>adams258@o2.pl
                                                    Predicted income: A$21,600.00</td>
                                                <td>01/04/2021</td>
                                                <td>500
                                                    Exp: 03/06/2022
                                                </td>
                                                <td>Course in progress</td>
                                                <td>
                                                    <div class="assign">
                                                        <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                        </div>
                                                        <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="action">
                                                        <a href="#"><i class="fas fa-pen"></i></a>
                                                    </div>
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                            <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                            <p class="name">Artur Szulakowski</p>
                                                            <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="action">
                                                            <a href="#"><i class="fas fa-pen"></i></a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2 Adam Malkowski</td>
                                                    <td>01/02/2021</td>
                                                    <td>adams258@o2.pl
                                                        Predicted income: A$21,600.00</td>
                                                    <td>01/04/2021</td>
                                                    <td>500
                                                        Exp: 03/06/2022
                                                    </td>
                                                    <td>Course in progress</td>
                                                    <td>
                                                        <div class="assign">
                                                            <div class="assign-img-wrap">
                                                                <img src="images/admin.png" class="img-fluid" />
                                                            </div>
                                                            <div class="assign-name">
                                                                <p class="name">Artur Szulakowski</p>
                                                                <p class="dept">Headquarters</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                    <div class="action">
                                                        <a href="#"><i class="fas fa-pen"></i></a>
                                                    </div>
                                                    </td>
                                                </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- commantable end here --*/}

      </div>
    </div>

  );

};