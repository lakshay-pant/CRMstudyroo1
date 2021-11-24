import "./allStudentStyle.css";
import React, { useState } from 'react';
import {InquiryRecieved} from "../../components/allStudentTemplates/InquiryRecieved"
import {Counselling} from "../../components/allStudentTemplates/Counselling"
import {QuotationSent} from "../../components/allStudentTemplates/QuotationSent"
import {Application} from "../../components/allStudentTemplates/Application"
import {WaitingForLoo} from "../../components/allStudentTemplates/WaitingForLoo"
import {PaymentPending} from "../../components/allStudentTemplates/PaymentPending"
import {WaitingForCoE} from "../../components/allStudentTemplates/WaitingForCoE"
import {ApplyForVisa} from "../../components/allStudentTemplates/ApplyForVisa"
import {WaitingForVisaRequirement} from "../../components/allStudentTemplates/WaitingForVisaRequirements"
import {WaitingForVisa} from "../../components/allStudentTemplates/WaitingForVisa"
import {VisaGranted} from "../../components/allStudentTemplates/VisaGranted"
import {CourseInProgress} from "../../components/allStudentTemplates/CourseInProgress"
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";


 const AllStudent = () => {
   
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
               
            <section className="maincontent">
                <div className="container-fluid">
                    <div className="row">
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
                                <Link to="/student-list">
                                  <i class="fas fa-th"></i>
                                  <label class="labelheade">View as List</label>
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
                                      <h5><span><i class="fas fa-filter"></i></span> Filters</h5>
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

            <section className="student-data">
                <div className="container">

                    <div className="student-collection">
                        <div class="row">
                           <InquiryRecieved/>
                              <Counselling/>
                            
                            <QuotationSent/>
                            <Application/>
                            <WaitingForLoo/>
                            <PaymentPending/>
                        <WaitingForCoE/>
                            <ApplyForVisa/>

                            <WaitingForVisaRequirement/>
                            <WaitingForVisa/>
<VisaGranted/>
<CourseInProgress/>
                            

                            
                            
                        
                            
                            
                            
                    

                           

                          


                          

                           
                        </div>
                    </div>    
                </div>        
            </section>
                
        </div>
    </div>

    )
}

export default AllStudent;