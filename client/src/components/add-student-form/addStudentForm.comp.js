import React, { useState, useEffect, useMemo } from 'react';
import './addStudent.style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { addStudent } from './addStudentAction';
import { addCertificateStud } from './addCertificateAction';
import { addStudentResetMessage } from './addStudentSlice';

export const AddStudentForm = () => {
	const dispatch = useDispatch();

	const { isLoading, status, message } = useSelector(
		(state) => state.addStudent
	);

	const countryOptions = useMemo(() => countryList().getData(), []);

	useEffect(() => {
		return () => {
			message && dispatch(addStudentResetMessage());
		};
	}, [message, dispatch]);

	const [user, setUser] = useState({});
	const [countryValue, setCountryValue] = useState('');
	const [countryValue2, setCountryValue2] = useState('');
	const [countryValue3, setCountryValue3] = useState('');

	const changeHandler = (value) => {
		setCountryValue(value);
		setUser({
			...user,
			nation: countryValue,
		});
	};

	const changeHandler2 = (value) => {
		setCountryValue2(value);
		setUser({
			...user,
			country: countryValue2,
		});
	};

	const changeHandler3 = (value) => {
		setCountryValue3(value);
		setUser({
			...user,
			offShoreCountry: countryValue3,
		});
	};

	const handleOnStudentSubmit = async (e) => {
		e.preventDefault();
		console.log(user.certificateImage);
		console.log(user.firstName);

		const form = new FormData();
		form.append('firstName', user.firstName ? user.firstName : '');
		form.append('middleName', user.middleName ? user.middleName : '');
		form.append('lastName', user.lastName ? user.lastName : '');
		form.append('email', user.email ? user.email : '');

		form.append('birthday', user.birthday);
		form.append('genders', user.genders);
		form.append('nation', user.nation ? user.nation.label : '');
		form.append('onShorePhone', user.onShorePhone ? user.onShorePhone : '');
		form.append('offShorePhone', user.offShorePhone ? user.offShorePhone : '');
		form.append('salesPipeline', user.salesPipeline ? user.salesPipeline : '');
		form.append('salesStatus', user.salesStatus ? user.salesStatus : '');
		form.append('heatLevel', user.heatLevel ? user.heatLevel : '');
		form.append('note', user.note ? user.note : '');
		form.append(
			'onShoreCurrentLocation',
			user.onShoreCurrentLocation ? user.onShoreCurrentLocation : ''
		);
		form.append(
			'offShoreCurrentLocation',
			user.offShoreCurrentLocation ? user.offShoreCurrentLocation : ''
		);
		form.append(
			'onShoreAddress',
			user.onShoreAddress ? user.onShoreAddress : ''
		);
		form.append(
			'onShoreLocation',
			user.onShoreLocation ? user.onShoreLocation : ''
		);
		form.append('unitNumber', user.unitNumber ? user.unitNumber : '');
		form.append('streetNumber', user.streetNumber ? user.streetNumber : '');
		form.append('streetName', user.streetName ? user.streetName : '');
		form.append('city', user.city ? user.city : '');
		form.append('country', user.country ? user.country.label : '');
		form.append('zipCode', user.zipCode ? user.zipCode : '');
		form.append(
			'offShoreAdress',
			user.offShoreAdress ? user.offShoreAdress : ''
		);
		form.append(
			'offShoreUnitNumber',
			user.offShoreUnitNumber ? user.offShoreUnitNumber : ''
		);
		form.append(
			'offShoreStreetNumber',
			user.offShoreStreetNumber ? user.offShoreStreetNumber : ''
		);
		form.append('streetNa', user.streetNa ? user.streetNa : '');
		form.append('offShoreCity', user.offShoreCity ? user.offShoreCity : '');
		form.append(
			'offShoreCountry',
			user.offShoreCountry ? user.offShoreCountry.label : ''
		);
		form.append(
			'offShoreZipCode',
			user.offShoreZipCode ? user.offShoreZipCode : ''
		);
		form.append('usi', user.usi ? user.usi : '');
		form.append(
			'educationLevel',
			user.educationLevel ? user.educationLevel : ''
		);
		form.append('instituteName', user.instituteName ? user.instituteName : '');
		form.append('gpa', user.gpa ? user.gpa : '');
		form.append('yearLevel', user.yearLevel ? user.yearLevel : '');
		form.append(
			'schoolCurriculum',
			user.schoolCurriculum ? user.schoolCurriculum : ''
		);
		form.append(
			'schoolCurriculumDetails',
			user.schoolCurriculumDetails ? user.schoolCurriculumDetails : ''
		);
		form.append('passNumber', user.passNumber ? user.passNumber : '');
		form.append(
			'passNationality',
			user.passNationality ? user.passNationality : ''
		);
		form.append('passIssueDate', user.passIssueDate ? user.passIssueDate : '');
		form.append(
			'passExpiryDate',
			user.passExpiryDate ? user.passExpiryDate : ''
		);
		form.append('passComments', user.passComments ? user.passComments : '');
		form.append('grantDate', user.grantDate ? user.grantDate : '');
		form.append(
			'visaExpiryDate',
			user.visaExpiryDate ? user.visaExpiryDate : ''
		);
		form.append('visaType', user.visaType ? user.visaType : '');
		form.append('visaComments', user.visaComments ? user.visaComments : '');
		form.append(
			'insuranceStartDate',
			user.insuranceStartDate ? user.insuranceStartDate : ''
		);
		form.append(
			'insuranceExpiryDate',
			user.insuranceExpiryDate ? user.insuranceExpiryDate : ''
		);
		form.append('insuranceType', user.insuranceType ? user.insuranceType : '');
		form.append(
			'insuranceNumber',
			user.insuranceNumber ? user.insuranceNumber : ''
		);
		form.append(
			'insuranceComment',
			user.insuranceComment ? user.insuranceComment : ''
		);
		form.append('otherComments', user.otherComments ? user.otherComments : '');
		form.append(
			'locationStatus',
			user.locationStatus ? user.locationStatus : ''
		);
		form.append('referalSource', user.referalSource ? user.referalSource : '');
		console.log('student', form);

		const config = {
			headers: {
				'content-type': 'multipart/form-data',
			},
		};

		dispatch(addStudent(form, config));
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [handleOnStudentSubmit]);

	return (
		<div className="content-wrapper">
			<div class="maincontent-rightside add-student">
				<section class="maincontent">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="add-student">
									<div class="add-text">
										<div class="add-round">
											<span>
												<i class="fa fa-user-graduate"></i>
											</span>
										</div>
										<small> Add Student</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class="student-from">
					<div class="container-fluid">
						<div class="student-bg">
							{message && (
								<Alert variant={status === 'success' ? 'success' : 'danger'}>
									{message}
								</Alert>
							)}
							<form onSubmit={handleOnStudentSubmit}>
								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="personal">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#personal1"
													aria-expanded="true"
													aria-controls="personal1"
												>
													<div class="headingdiv">
														Personal{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="personal1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="personal"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>
																	First Name <p>*</p>
																</label>

																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="firstName"
																	onChange={(e) => {
																		setUser({
																			...user,
																			firstName: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Middle name</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="middleName"
																	onChange={(e) => {
																		setUser({
																			...user,
																			middleName: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>
																	Last name <p>*</p>
																</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="lastName"
																	onChange={(e) => {
																		setUser({
																			...user,
																			lastName: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Birthday</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="birthday"
																	onChange={(e) => {
																		setUser({
																			...user,
																			birthday: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Gender</label>
																<select
																	class="form-control"
																	id="cars"
																	name="genders"
																	onChange={(e) => {
																		setUser({
																			...user,
																			genders: e.target.value,
																		});
																	}}
																>
																	<option>Male</option>
																	<option>Female</option>
																</select>
															</div>

															<div class="form-group col-md-4">
																<label>Nationality</label>

																<Select
																	options={countryOptions}
																	value={countryValue}
																	onChange={changeHandler}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Email</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="email"
																	onChange={(e) => {
																		setUser({ ...user, email: e.target.value });
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="location">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#location1"
													aria-expanded="true"
													aria-controls="location1"
												>
													<div class="headingdiv">
														Applicant Current Location{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="location1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="location"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Onshore (In Australia)</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="onShoreCurrentLocation"
																	onChange={(e) => {
																		setUser({
																			...user,
																			onShoreCurrentLocation: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Offshore (Overseas)</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreCurrentLocation"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreCurrentLocation: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="onshore">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#onshore1"
													aria-expanded="true"
													aria-controls="onshore1"
												>
													<div class="headingdiv">
														Onshore Information{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="onshore1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="onshore"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-row">
																<div class="form-group col-md-4">
																	<label>Phone</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="onShorePhone"
																		onChange={(e) => {
																			setUser({
																				...user,
																				onShorePhone: e.target.value,
																			});
																		}}
																	/>
																</div>
																<div class="form-group col-md-4">
																	<label>Address</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="onShoreAddress"
																		onChange={(e) => {
																			setUser({
																				...user,
																				onShoreAddress: e.target.value,
																			});
																		}}
																	/>
																</div>
																<div class="form-group col-md-4">
																	<label>Enter a location</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="onShoreLocation"
																		onChange={(e) => {
																			setUser({
																				...user,
																				onShoreLocation: e.target.value,
																			});
																		}}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>Unit number</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="unitNumber"
																		onChange={(e) => {
																			setUser({
																				...user,
																				unitNumber: e.target.value,
																			});
																		}}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>Street number</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="streetNumber"
																		onChange={(e) => {
																			setUser({
																				...user,
																				streetNumber: e.target.value,
																			});
																		}}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>Street Name</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="streetName"
																		onChange={(e) => {
																			setUser({
																				...user,
																				streetName: e.target.value,
																			});
																		}}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>City</label>

																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="city"
																		onChange={(e) => {
																			setUser({
																				...user,
																				city: e.target.value,
																			});
																		}}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>Country</label>

																	<Select
																		options={countryOptions}
																		value={countryValue2}
																		onChange={changeHandler2}
																	/>
																</div>

																<div class="form-group col-md-4">
																	<label>Zipcode</label>
																	<input
																		type="text"
																		class="form-control"
																		placeholder=""
																		name="zipCode"
																		onChange={(e) => {
																			setUser({
																				...user,
																				zipCode: e.target.value,
																			});
																		}}
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="offshore2">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#offshore3"
													aria-expanded="true"
													aria-controls="location1"
												>
													<div class="headingdiv">
														Offshore Information{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="offshore3"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="offshore2"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Phone</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShorePhone"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShorePhone: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Address</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreAdress"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreAdress: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Enter a location</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreLocation"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreLocation: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Unit number</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreUnitNumber"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreUnitNumber: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Street number</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreStreetNumber"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreStreetNumber: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Street Name</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="streetNa"
																	onChange={(e) => {
																		setUser({
																			...user,
																			streetNa: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>City</label>

																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreCity"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreCity: e.target.value,
																		});
																	}}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Country</label>

																<Select
																	options={countryOptions}
																	value={countryValue3}
																	onChange={changeHandler3}
																/>
															</div>

															<div class="form-group col-md-4">
																<label>Zipcode</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="offShoreZipCode"
																	onChange={(e) => {
																		setUser({
																			...user,
																			offShoreZipCode: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="education">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#education1"
													aria-expanded="true"
													aria-controls="education1"
												>
													<div class="headingdiv">
														Education Details{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="education1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="education"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-row">
														<div class="form-group col-md-4">
															<label>USI (Unique Student Number)</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="usi"
																onChange={(e) => {
																	setUser({ ...user, usi: e.target.value });
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>Education Level</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="educationLevel"
																onChange={(e) => {
																	setUser({
																		...user,
																		educationLevel: e.target.value,
																	});
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>Institute Name</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="instituteName"
																onChange={(e) => {
																	setUser({
																		...user,
																		instituteName: e.target.value,
																	});
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>GPA</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="gpa"
																onChange={(e) => {
																	setUser({ ...user, gpa: e.target.value });
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>Year level</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="yearLevel"
																onChange={(e) => {
																	setUser({
																		...user,
																		yearLevel: e.target.value,
																	});
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>School curriculum</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="schoolCurriculum"
																onChange={(e) => {
																	setUser({
																		...user,
																		schoolCurriculum: e.target.value,
																	});
																}}
															/>
														</div>
														<div class="form-group col-md-4">
															<label>School curriculum details</label>
															<input
																type="text"
																class="form-control"
																placeholder=""
																name="schoolCurriculumDetails"
																onChange={(e) => {
																	setUser({
																		...user,
																		schoolCurriculumDetails: e.target.value,
																	});
																}}
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="passport">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#passport1"
													aria-expanded="true"
													aria-controls="passport1"
												>
													<div class="headingdiv">
														Passports{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="passport1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="passport"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Number</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="passNumber"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passNumber: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Nationality</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="passNationality"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passNationality: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Issue Date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="passIssueDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passIssueDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Expiry Date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="passExpiryDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passExpiryDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Comments</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="passComments"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passComments: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="visa">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#visa1"
													aria-expanded="true"
													aria-controls="visa1"
												>
													<div class="headingdiv">
														Visas <i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="visa1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="visa"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Grant date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="grantDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			grantDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Expiry Date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="visaExpiryDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			visaExpiryDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Type</label>
																<select
																	class="form-control"
																	id="cars"
																	name="visaType"
																	onChange={(e) => {
																		setUser({
																			...user,
																			visaType: e.target.value,
																		});
																	}}
																>
																	<option>Any</option>
																	<option>Student visa</option>
																	<option>Working holiday</option>
																	<option>Work & holiday</option>
																	<option>Citizenship</option>
																	<option>other</option>
																</select>
															</div>
															<div class="form-group col-md-4">
																<label>Other comments (remarks)</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="visaComments"
																	onChange={(e) => {
																		setUser({
																			...user,
																			visaComments: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="date">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#date1"
													aria-expanded="true"
													aria-controls="date1"
												>
													<div class="headingdiv">
														Insurance{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="date1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="date"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Start Date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="insuranceStartDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			insuranceStartDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Expiry Date</label>
																<input
																	type="date"
																	class="form-control"
																	placeholder=""
																	name="insuranceExpiryDate"
																	onChange={(e) => {
																		setUser({
																			...user,
																			insuranceExpiryDate: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Type</label>
																<select
																	class="form-control"
																	id="cars"
																	name="insuranceType"
																	onChange={(e) => {
																		setUser({
																			...user,
																			insuranceType: e.target.value,
																		});
																	}}
																>
																	<option>Single(Just for the student)</option>
																	<option>Couple(Just for the student)</option>
																	<option>
																		Single parent(Student and their kid)
																	</option>
																	<option>
																		Family(Student,partner and Kid)
																	</option>
																</select>
															</div>
															<div class="form-group col-md-4">
																<label>Number</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="insuranceNumber"
																	onChange={(e) => {
																		setUser({
																			...user,
																			insuranceNumber: e.target.value,
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Other comments (remarks)</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="insuranceComment"
																	onChange={(e) => {
																		setUser({
																			...user,
																			insuranceComment: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="crm">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#crm1"
													aria-expanded="true"
													aria-controls="crm1"
												>
													<div class="headingdiv">
														CRM<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="crm1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="crm"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>
																	Sales pipeline<p>*</p>
																</label>
																<select
																	class="form-control"
																	id="cars"
																	name="salesPipeline"
																	onChange={(e) => {
																		setUser({
																			...user,
																			salesPipeline: e.target.value,
																		});
																	}}
																>
																	<option>OnShore</option>
																	<option>OffShore</option>
																</select>
															</div>
															<div class="form-group col-md-4">
																<label>
																	Sale status<p>*</p>
																</label>
																<select
																	class="form-control"
																	id="cars"
																	name="salesStatus"
																	onChange={(e) => {
																		setUser({
																			...user,
																			salesStatus: e.target.value,
																		});
																	}}
																>
																	<option>Inquiry Received</option>
																	<option>Counselling</option>
																	<option>Quotation Sent</option>
																	<option>Application</option>
																	<option>Waiting for Loo</option>
																	<option>Payment Pending</option>
																	<option>Waiting for CoE</option>
																	<option>Apply for Visa</option>
																	<option>Waiting for Visa Requirement</option>
																	<option>Waiting for Visa</option>
																	<option>Visa Granted</option>
																	<option>Course in Progress</option>
																</select>
															</div>
															<div class="form-group col-md-4">
																<label>Lead level</label>
																<select
																	class="form-control"
																	id="cars"
																	name="heatLevel"
																	onChange={(e) => {
																		setUser({
																			...user,
																			heatLevel: e.target.value,
																		});
																	}}
																>
																	<option>Very Hot</option>
																	<option>Hot</option>
																	<option>Warm</option>
																	<option>Cold</option>
																</select>
															</div>
															<div class="form-group col-md-4">
																<label>Other comments (remarks)</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="otherComments"
																	onChange={(e) => {
																		setUser({
																			...user,
																			otherComments: e.target.value,
																		});
																	}}
																/>
															</div>
														</div>
													</div>
													{isLoading && (
														<Spinner variant="primary" animation="border" />
													)}
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="location">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#documents1"
													aria-expanded="true"
													aria-controls="documents1"
												>
													<div class="headingdiv">
														Documents
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="documents1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="documents1"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4">
																<label>Passport</label>
																<input
																	type="file"
																	name="file"
																	onChange={(e) => {
																		setUser({
																			...user,
																			passPortImage: e.target.files[0],
																		});
																	}}
																/>
															</div>
															<div class="form-group col-md-4">
																<label>Certificate</label>
																<input
																	type="file"
																	onChange={(e) => {
																		setUser({
																			...user,
																			certificateImage: e.target.files[0],
																		});
																	}}
																/>
															</div>
														</div>
														{isLoading && (
															<Spinner variant="primary" animation="border" />
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="others">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#others1"
													aria-expanded="true"
													aria-controls="others1"
												>
													<div class="headingdiv">
														Others<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="others1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="others"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-4 col-12">
																<label>
																	Status <p>*</p>
																</label>
																<select
																	class="form-control"
																	name="locationStatus"
																	onChange={(e) => {
																		setUser({
																			...user,
																			locationStatus: e.target.value,
																		});
																	}}
																	id="cars"
																>
																	<option>Onshore</option>
																	<option>Offshore</option>
																</select>
															</div>

															<div class="form-group col-md-4 col-12">
																<label>
																	Referral source <p>*</p>
																</label>
																<select
																	class="form-control"
																	id="cars"
																	name="referalSource"
																	onChange={(e) => {
																		setUser({
																			...user,
																			referalSource: e.target.value,
																		});
																	}}
																>
																	<option>unknown</option>
																	<option>Youtube</option>
																	<option>Instagram</option>
																	<option>Facebook</option>
																	<option>Google</option>
																</select>
															</div>
														</div>

														{isLoading && (
															<Spinner variant="primary" animation="border" />
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div
										class="accordion md-accordion"
										id="accordionEx"
										role="tablist"
										aria-multiselectable="true"
									>
										<div class="card">
											<div class="card-header" role="tab" id="note">
												<a
													data-toggle="collapse"
													data-parent="#accordionEx"
													href="#note1"
													aria-expanded="true"
													aria-controls="note1"
												>
													<div class="headingdiv">
														Add a Note{' '}
														<i class="fas fa-angle-down rotate-icon"></i>
													</div>
												</a>
											</div>
											<div
												id="note1"
												class="collapse show"
												role="tabpanel"
												aria-labelledby="note"
												data-parent="#accordionEx"
											>
												<div class="card-body">
													<div class="form-bgclr">
														<div class="form-row">
															<div class="form-group col-md-12">
																<textarea
																	class="form-control"
																	rows="5"
																	placeholder="Add a note"
																	name="note"
																	onChange={(e) => {
																		setUser({ ...user, note: e.target.value });
																	}}
																></textarea>
															</div>
														</div>
													</div>
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
								</div>
							</form>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
