import React from 'react';
import './addAdminUser.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export const Addadmin = () => {
	const [showAddAdmin, setshowAddAdmin] = useState(false);

	const addNewAdmin = () => {
		if (showAddAdmin == false) {
			setshowAddAdmin(true);
		}
		if (showAddAdmin == true) {
			setshowAddAdmin(false);
		}
	};

	const [isOpen7, setIsOpen7] = useState(false);

	const showModal7 = (item) => {
		setIsOpen7(true);
	};

	const hideModal7 = () => {
		setIsOpen7(false);
	};

	return (
		<div>
			<div className="add_user_section">
				<section className="maincontent">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-6">
								<div className="add-student">
									<div className="add-text">
										<div className="add-round">
											<span>
												<i className="fa fa-tasks"></i>
											</span>
										</div>
										<small>Providers</small>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="import-from">
									<div className="st-file-upload">
										<a
											href="#"
											className="custom-file-upload"
											onClick={addNewAdmin}
										>
											Add New
											<span>+</span>
										</a>
										<input id="file-upload" type="file" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{showAddAdmin ? (
					<section className="add_usr_pop">
						<div className="add_usr_pop_con">
							<div className="add_usr_pop_ttl">Choose one</div>
							<ul>
								<li>
									<a href="#" onClick={showModal7}>
										<i className="fas fa-building"></i>
										<strong>Office</strong>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-building"></i>
										<strong>Office</strong>
									</a>
								</li>
								<li>
									<a href="#">
										<i className="fas fa-building"></i>
										<strong>Office</strong>
									</a>
								</li>
							</ul>
						</div>
					</section>
				) : null}

				<section className="add_user_tab">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<Tabs className="react-tabs">
									<TabList>
										<Tab>Offices & Users</Tab>
										<Tab>Activity 2</Tab>
									</TabList>

									<TabPanel>
										<div className="add_user_tb_inr">
											<div className="add_usr_office_tb">
												<ul>
													<li>
														<span className="add_usr_offc_ttl">
															Offices & users
														</span>
														<span className="add_usr_offc_vlu">01</span>
														<a className="add_usr_ofc_lnk" href="#">
															Add office
														</a>
													</li>
													<li>
														<span className="add_usr_offc_ttl">
															Active users{' '}
														</span>
														<span className="add_usr_offc_vlu">02</span>
														<a className="add_usr_ofc_lnk" href="#">
															Add office
														</a>
													</li>
													<li>
														<span className="add_usr_offc_ttl">
															Pending users{' '}
														</span>
														<span className="add_usr_offc_vlu">05</span>
														<a className="add_usr_ofc_lnk" href="#">
															Add office
														</a>
													</li>
												</ul>
											</div>
											<div className="ofc_tb_cntrls">
												<div className="ofc_cntrl_view">
													<label>View</label>
													<select className="form-control">
														<option>All groups</option>
													</select>
												</div>
												<div className="ofc_cntrl_btns">
													<a href="#" className="cmn_btn">
														Update office
													</a>
													<a href="#" className="cmn_btn_secondary">
														Remove office
													</a>
												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* add new organisation popup start */}
			<div
				className="modal fade filters-modal show "
				id="leadsFilter"
				aria-modal="true"
			>
				<Modal show={isOpen7} onHide={hideModal7} className="modal_otr">
					<Modal.Body className="add_office_pop">
						<div className="modal_hdr">
							<div className="modal_title">Add office</div>
							<a href="#" onClick={hideModal7}>
								<i className="fa fa-times-circle"></i>
							</a>
						</div>
						<div className="modal_content">
							<form>
								<div className="add_office_frm_sngl">
									<div className="add_ofc_fmr_slf_ttl">Name & contacts</div>
									<div className="add_ofc_frm_slf_con">
										<div className="row">
											<div className="col-lg-6 form-group">
												<label>Name </label>
												<input type="text" className="form-control"></input>
											</div>
											<div className="col-lg-6 form-group">
												<label>Phone number</label>
												<select className="form-control"></select>
											</div>
											<div className="col-lg-12 form-group">
												<label>Email</label>
												<input type="text" className="form-control"></input>
											</div>
										</div>
									</div>
								</div>
								<div className="add_office_frm_sngl">
									<div className="add_ofc_fmr_slf_ttl">
										Address and legal details
									</div>
									<div className="add_ofc_frm_slf_con">
										<div className="row">
											<div className="col-lg-12 form-group">
												<label>Address </label>
												<input type="text" className="form-control"></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>Street number </label>
												<input type="number" className="form-control"></input>
											</div>
											<div className="col-lg-8 form-group">
												<label>Street name </label>
												<input type="text" className="form-control"></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>City </label>
												<input type="text" className="form-control"></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>Country</label>
												<select className="form-control">
													<option>1</option>
												</select>
											</div>
											<div className="col-lg-4 form-group">
												<label>Zipcode </label>
												<input type="number" className="form-control"></input>
											</div>
											<div className="col-lg-12 form-group">
												<label>Legal name</label>
												<input type="text" className="form-control"></input>
											</div>
											<div className="col-lg-12 form-group">
												<label>Corporation ID (e.g. ABN) </label>
												<input type="text" className="form-control"></input>
											</div>
										</div>
									</div>
								</div>
								<div className="add_office_frm_sngl">
									<div className="add_ofc_fmr_slf_ttl">Settings</div>
									<div className="add_ofc_frm_slf_con">
										<div className="row">
											<div className="col-lg-6 form-group">
												<label>Currency </label>
												<select className="form-control"></select>
											</div>
											<div className="col-lg-6 form-group">
												<label>Default student status </label>
												<select className="form-control"></select>
											</div>
											<div className="col-lg-12 form-group">
												<label>Office logo </label>
												<input type="file" className="form-control"></input>
											</div>
										</div>
									</div>
								</div>
								<div className="modal_cnrls">
									<button className="cmn_btn" type="submit">
										Save
									</button>
								</div>
							</form>
						</div>
					</Modal.Body>
				</Modal>
			</div>
			{/* add new organisation popup end */}
		</div>
	);
};
