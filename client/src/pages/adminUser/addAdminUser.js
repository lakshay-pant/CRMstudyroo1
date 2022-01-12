import React from 'react';
import './addAdminUser.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { addOffice } from './addOfficeAction';
import { addOfficeResetMessage } from './addOfficeSlice';
import { Spinner, Alert } from 'react-bootstrap';

export const Addadmin = () => {
	const dispatch = useDispatch();

	const [showAddAdmin, setshowAddAdmin] = useState(false);
	const [user, setUser] = useState({});

	const [officeName, setOfficeName] = useState('');
	const [officePhone, setOfficePhone] = useState('');
	const [officeAddress, setOfficeAddress] = useState('');
	const [officeEmail, setOfficeEmail] = useState('');
	const [officeStreetName, setOfficeStreetName] = useState('');
	const [officeStreetNumber, setOfficeStreetNumber] = useState('');
	const [officeCity, setOfficeCity] = useState('');
	const [officeZipcode, setOfficeZipcode] = useState('');
	const [officeCountry, setOfficeCountry] = useState('');
	const [officeCorporationId, setOfficeCorporationId] = useState('');
	const [officeCurrency, setOfficeCurrency] = useState('');
	const [officeLegalName, setOfficeLegalName] = useState('');
	const [officeStudentStatus, setOfficeStudentStatus] = useState('');

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'officeName':
				setOfficeName(value);
				break;

			case 'officePhone':
				setOfficePhone(value);
				break;

			case 'officeAddress':
				setOfficeAddress(value);
				break;

			case 'officeEmail':
				setOfficeEmail(value);
				break;

			case 'officeStreetName':
				setOfficeStreetName(value);
				break;

			case 'officeStreetNumber':
				setOfficeStreetNumber(value);
				break;

			case 'officeCity':
				setOfficeCity(value);
				break;

			case 'officeCountry':
				setOfficeCountry(value);
				break;

			case 'OfficeZipcode':
				setOfficeZipcode(value);
				break;

			case 'officeCorporationId':
				setOfficeCorporationId(value);
				break;

			case 'officeCurrency':
				setOfficeCurrency(value);
				break;

			case 'officeLegalName':
				setOfficeLegalName(value);
				break;

			case 'officeLegalName':
				setOfficeLegalName(value);
				break;

			case 'officeStudentStatus':
				setOfficeStudentStatus(value);
				break;

			default:
				break;
		}
	};

	const { isLoadingOffice, statusOffice, messageOffice } = useSelector(
		(state) => state.addOffice
	);

	useEffect(() => {
		return () => {
			messageOffice && dispatch(addOfficeResetMessage());
		};
	}, [messageOffice, dispatch]);

	const handleOnOfficeSubmit = async (e) => {
		e.preventDefault();

		const officeDetails = {
			officeName,
			officePhone,
			officeStreetName,
			officeStreetNumber,
			officeZipcode,
			officeAddress,
			officeCity,
			officeCorporationId,
			officeEmail,
			officeLegalName,
			officeCurrency,
			officeCountry,
		};

		await dispatch(addOffice(officeDetails));
	};

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
							<form onSubmit={handleOnOfficeSubmit}>
								<div className="add_office_frm_sngl">
									<div className="add_ofc_fmr_slf_ttl">Name & contacts</div>
									<div className="add_ofc_frm_slf_con">
										<div className="row">
											<div className="col-lg-6 form-group">
												<label>Name </label>
												<input
													type="text"
													className="form-control"
													name="officeName"
													value={officeName}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-6 form-group">
												<label>Phone number</label>
												<input
													type="text"
													className="form-control"
													name="officePhone"
													value={officePhone}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-12 form-group">
												<label>Email</label>
												<input
													type="text"
													className="form-control"
													name="officeEmail"
													value={officeEmail}
													onChange={handleOnChange}
												></input>
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
												<input
													type="text"
													className="form-control"
													name="officeAddress"
													value={officeAddress}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>Street number </label>
												<input
													type="number"
													className="form-control"
													name="officeStreetNumber"
													value={officeStreetNumber}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-8 form-group">
												<label>Street name </label>
												<input
													type="text"
													className="form-control"
													name="officeStreetName"
													value={officeStreetName}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>City </label>
												<input
													type="text"
													className="form-control"
													name="officeCity"
													value={officeCity}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>Country</label>
												<input
													className="form-control"
													name="officeCountry"
													value={officeCountry}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-4 form-group">
												<label>Zipcode </label>
												<input
													type="number"
													className="form-control"
													name="officeZipcode"
													value={officeZipcode}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-12 form-group">
												<label>Legal name</label>
												<input
													type="text"
													className="form-control"
													name="officeLegalName"
													value={officeLegalName}
													onChange={handleOnChange}
												></input>
											</div>
											<div className="col-lg-12 form-group">
												<label>Corporation ID (e.g. ABN) </label>
												<input
													type="text"
													className="form-control"
													name="officeCorporationId"
													value={officeCorporationId}
													onChange={handleOnChange}
												></input>
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
												<select
													className="form-control"
													name="officeCurrency"
													value={officeCurrency}
													onChange={handleOnChange}
												>
													<option>dollar</option>
													<option>rupees</option>
												</select>
											</div>
											<div className="col-lg-6 form-group">
												<label>Default student status </label>
												<select
													className="form-control"
													name="officeStudentStatus"
													value={officeStudentStatus}
													onChange={handleOnChange}
												>
													<option>OnShore</option>
													<option>OffShore</option>
												</select>
											</div>
											<div className="col-lg-12 form-group">
												<label>Office logo </label>
												<input type="file" className="form-control"></input>
											</div>
										</div>
									</div>
								</div>
								<div class="footersingbtn">
									<input
										type="submit"
										name="Save"
										class="btn getin-btn"
										value="Save"
									/>
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
