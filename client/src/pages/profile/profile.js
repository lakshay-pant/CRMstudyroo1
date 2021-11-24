import React, { useEffect, useState } from 'react';

import './profile.style.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudents } from '../allStudents/allStudentAction';

import { Spinner, Alert } from 'react-bootstrap';

import ProfilePasswordToggle from '../../hooks/profilePasswordToggle';
import ProfileConfirmPasswordToggle from '../../hooks/profileConfirmPasswordToggle';
import { editUser } from './profileeditAction';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { editResetSuccessMSg } from './profileeditSlice';
import { addUserDpic } from './profileDpAction';
import { getUserProfile } from '../dashboard/userAction';

import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';

export const Profile = () => {
	const [PasswordInputType, ToggleIcon] = ProfilePasswordToggle();
	const [ConfirmPasswordInputType, ConfirmToggleIcon] =
		ProfileConfirmPasswordToggle();
	const dispatch = useDispatch();

	// const { isLoading, status, message } = useSelector(
	//   (state) => state.signup
	// );
	const { user } = useSelector((state) => state.user);

	const { isLoadingEdit, statusEdit, messageEdit } = useSelector(
		(state) => state.editUser
	);

	useEffect(() => {
		// messageDelete && dispatch(deleteResetSuccessMSg());
		messageEdit && dispatch(editResetSuccessMSg());
	}, [dispatch]);

	useEffect(() => {
		// messageDelete && dispatch(deleteResetSuccessMSg());
		dispatch(getUserProfile());
	}, []);

	useEffect(() => {
		// messageDelete && dispatch(deleteResetSuccessMSg());
		messageEdit && dispatch(editResetSuccessMSg());
	}, []);
	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [email, setEmail] = useState(user.email);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [birthdate, setDate] = useState(user.birthdate);
	const [tele, setTel] = useState(user.tele);
	const [gender, setGender] = useState(user.gender);
	const [position, setPosition] = useState(user.position);
	const [officeName, setOfficeName] = useState(user.officeName);
	const [userGroup, setUserGroup] = useState(user.userGroup);
	const [isError, setIsError] = useState('');
	const [isChecked, setIsChecked] = useState(false);
	const [uploadedFile, setUploadedFile] = useState(null);
	const [isValidate, setIsValidate] = useState(false);

	const changeProfileImage = (e) => {
		console.log('hi');
		setUploadedFile(e.target.files[0]);
		console.log('ss', uploadedFile);
	};

	const UpdateProfileHandler = async (e) => {
		e.preventDefault();
		//create object of form data
		if (uploadedFile) {
			const formData = new FormData();
			formData.append('avatar', uploadedFile);
			console.log('ss2', formData);

			await dispatch(addUserDpic(formData));
		} else {
			return alert('add profile picture');
		}
	};
	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'firstName':
				setFirstName(value);
				break;

			case 'lastName':
				setLastName(value);
				break;

			case 'birthdate':
				setDate(value);
				break;

			case 'tele':
				setTel(value);
				break;

			case 'gender':
				setGender(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'password':
				setPassword(value);
				break;

			case 'officeName':
				setOfficeName(value);
				break;

			case 'userGroup':
				setUserGroup(value);
				break;

			case 'position':
				setPosition(value);
				break;

			default:
				break;
		}
	};

	const checkValidation = (e) => {
		setConfirmPassword(e.target.value);
		if (password === e.target.value) {
			setIsError('Confirm Password Matched');
			setIsValidate(true);
		} else {
			setIsError('Confirm Password should match with Password');
			setIsValidate(false);
		}
	};

	const handleOnProfileSubmit = async (e) => {
		e.preventDefault();
		const { name, value } = e.target;

		const updateProfile = {
			firstName,
			lastName,
			birthdate,
			email,
			tele,
			gender,
			position,
			officeName,
			userGroup,
		};
		await dispatch(editUser(updateProfile));
		await dispatch(getUserProfile());
	};

	const handleOnProfileSubmit1 = async (e) => {
		e.preventDefault();

		const updateProfile1 = {
			email,
		};
		dispatch(editUser(updateProfile1));
	};

	const handleOnProfileSubmit2 = async (e) => {
		e.preventDefault();

		if (!isValidate) {
			return alert('Password did not match');
		}

		const updateProfile2 = {
			password,
		};
		dispatch(editUser(updateProfile2));
	};

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);

	const showModal = () => {
		dispatch(editResetSuccessMSg());

		setIsOpen(true);
	};

	const showModal2 = () => {
		dispatch(editResetSuccessMSg());

		setIsOpen2(true);
	};

	const showModal3 = () => {
		setIsOpen3(true);
	};

	const hideModal = () => {
		dispatch(editResetSuccessMSg());
		setIsOpen(false);
	};
	const hideModal2 = () => {
		dispatch(editResetSuccessMSg());
		setIsOpen2(false);
	};

	const hideModal3 = () => {
		setIsOpen3(false);
	};

	return (
		<div className="content-wrapper profile-page">
			<div className="maincontent-rightside student-view add-student uncategorized">
				<section class="maincontent"></section>

				<div class="container">
					<div class="profile-page-content">
						<div class="row">
							<div class="col-md-4 col-12">
								<div class="profile">
									<div class="profile-img">
										{user.avatar ? (
											<img
												src={`http://localhost:5000/v1/user/get/${user._id}/avatar`}
												class="img-fluid"
												alt="profile"
											/>
										) : (
											<img
												src="images/dpdefault.png"
												class="img-fluid"
												alt="profile"
											/>
										)}
									</div>

									<div class="profile-intro">
										<p class="name">{user.firstName} </p>
										<span>{user.position}</span>
									</div>
									<i class="fas fa-pen" onClick={showModal3}></i>
									<div class="profile-status"></div>
								</div>
							</div>

							<Modal show={isOpen3} onHide={hideModal3}>
								{' '}
								<div id="profileupdate">
									<Modal.Body>
										<div class="fl-head">
											<h5>Change your Profile Picture</h5>
											<button onClick={hideModal3} className="close">
												<span aria-hidden="true">&times;</span>
											</button>
										</div>
										<div class="change-bg">
											<form>
												<div class="form-row">
													<div class="form-group col-md-12 col-12">
														<div class="form-row">
															<div class="form-group col-12">
																<div class="file-input">
																	<input
																		type="file"
																		id="file"
																		class="file"
																		onChange={changeProfileImage}
																	/>
																	<label for="file">
																		Upload Profile Picture
																		<p class="file-name"></p>
																	</label>
																</div>
																<div class="fotercontent">
																	<div class="footersingbtn">
																		<input
																			type="submit"
																			name="Reset"
																			class="btn getin-btn re"
																			value="Cancel"
																		/>
																	</div>
																	<div class="footersingbtn">
																		<input
																			type="submit"
																			name="Save"
																			class="btn getin-btn"
																			value="Update Profile"
																			onClick={UpdateProfileHandler}
																		/>
																	</div>
																</div>
																{/*<label></label>
																<input
																	type="file"
																	onChange={changeProfileImage}
																/>*/}
															</div>
															<div class="form-group col-12"></div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</Modal.Body>
								</div>
							</Modal>

							<div class="col-sm-8 col-12">
								<div class="profile-detail">
									<div class="headingdiv">Personal</div>
									<form onSubmit={handleOnProfileSubmit}>
										{messageEdit && (
											<Alert
												variant={
													statusEdit === 'success' ? 'success' : 'danger'
												}
											>
												{messageEdit}
											</Alert>
										)}
										<div class="form-row">
											<div class="form-group col-md-6">
												<label>First Name*</label>
												<input
													type="text"
													class="form-control"
													placeholder={user.firstName}
													name="firstName"
													onChange={handleOnChange}
													value={firstName}
													required
												/>
											</div>
											<div class="form-group col-md-6">
												<label>Last Name*</label>
												<input
													type="text"
													class="form-control"
													placeholder={user.lastName}
													name="lastName"
													onChange={handleOnChange}
													value={lastName}
													required
												/>
											</div>
											<div class="form-group col-md-4">
												<label>Birthday</label>
												<input
													type="date"
													class="form-control"
													placeholder={user.birthdate}
													name="birthdate"
													onChange={handleOnChange}
													value={birthdate}
												/>
											</div>
											<div class="form-group col-md-4">
												<label>Phone Number</label>
												<input
													type="tele"
													class="form-control"
													placeholder={user.tele}
													name="tele"
													onChange={handleOnChange}
													value={tele}
												/>
											</div>

											<div class="form-group col-md-4">
												<label>Office</label>
												<input
													type="tele"
													class="form-control"
													placeholder={user.officeName}
													name="officeName"
													onChange={handleOnChange}
													value={officeName}
												/>
											</div>

											<div class="form-group col-md-4">
												<label>User Group</label>

												<select
													class="form-control"
													id="cars"
													placeholder={user.userGroup}
													name="userGroup"
													onChange={handleOnChange}
													value={userGroup}
												>
													<option>Sales</option>
													<option>Accounting</option>
													<option>Customer Service</option>
													<option>Marketing</option>
													<option>Admissions</option>
													<option>Back-Office</option>
													<option>Social media</option>
													<option>Management</option>
												</select>
											</div>

											<div class="form-group col-md-4">
												<label>Position</label>
												<input
													type="tele"
													class="form-control"
													placeholder={user.position}
													name="position"
													onChange={handleOnChange}
													value={position}
												/>
											</div>

											<div class="form-group col-md-4">
												<label>Gender</label>
												<select
													class="form-control"
													name="gender"
													id=""
													onChange={handleOnChange}
													value={gender}
													placeholder={user.gender}
												>
													<option>Male</option>
													<option>Female</option>
													<option>Other</option>
												</select>
											</div>
											{/* <div class="form-group col-md-12">                                    
                                    <label>Position</label>
                                    <input type="text" class="form-control" placeholder="" name=""/>
                                </div>
                                <div class="form-group col-md-12">                                    
                                    <label>Email Signature</label>
                                    <textarea name="email-signature" rows="5" class="form-control" placeholder=""></textarea>
                                </div> */}
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

								<div class="profile-details">
									<div class="headingdiv">Your Email</div>

									<p>
										This is the email of your user on EducationLink. Use this
										email to login. You may receive notifications and alerts on
										this email, so make sure to check the spam folder.{' '}
									</p>
									<div class="change-email">
										<p>Your current email address: office@studyroo.com.au</p>
										<div class="footersingbtn">
											<input
												type="submit"
												name="Save"
												class="btn getin-btn"
												value="Change Email Address"
												onClick={showModal}
											/>
										</div>
									</div>
									<Modal show={isOpen} onHide={hideModal}>
										<div id="emailupdate">
											<Modal.Body>
												<div class="fl-head">
													<h5>Change your email address</h5>
													<button onClick={hideModal} className="close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="change-bg">
													<form onSubmit={handleOnProfileSubmit1}>
														{messageEdit && (
															<Alert
																variant={
																	statusEdit === 'success'
																		? 'success'
																		: 'danger'
																}
															>
																{messageEdit}
															</Alert>
														)}
														<div class="form-row">
															<div class="form-group col-md-12 col-12">
																<label>Your new email address</label>
																<input
																	type="text"
																	class="form-control"
																	placeholder=""
																	name="email"
																	onChange={handleOnChange}
																	value={email}
																/>
																<div class="alert alert-warning borderless mt-3">
																	<p>
																		Your current email address will be removed
																		from your account once this new address is
																		verified.
																	</p>
																</div>
															</div>

															<div class="fotercontent">
																<div class="footersingbtn">
																	<input
																		type="submit"
																		name="Reset"
																		class="btn getin-btn re"
																		value="Cancel"
																	/>
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
														</div>
													</form>
												</div>
											</Modal.Body>
										</div>
									</Modal>
								</div>

								<div class="profile-details">
									<div class="headingdiv">Your Password</div>
									<p>You can change your password at any time.</p>
									<div class="change-email facebook-psw">
										<p>Forgot your password?</p>
										<div class="footersingbtn">
											<input
												type="submit"
												name="Save"
												class="btn getin-btn"
												value="Change Password"
												onClick={showModal2}
											/>
										</div>
									</div>

									<Modal show={isOpen2} onHide={hideModal2}>
										<div id="emailupdate" class="pswupdate">
											<Modal.Body>
												<div class="fl-head">
													<h5>Change Password</h5>
													<button onClick={hideModal2} className="close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div class="change-bg">
													<form onSubmit={handleOnProfileSubmit2}>
														{messageEdit && (
															<Alert
																variant={
																	statusEdit === 'success'
																		? 'success'
																		: 'danger'
																}
															>
																{messageEdit}
															</Alert>
														)}
														<div class="form-row">
															<div class="form-group col-md-12 col-12">
																<label>
																	New Password <p>*</p>
																</label>
																<input
																	id="newpassword"
																	type={PasswordInputType}
																	name="password"
																	placeholder="Enter your  Password"
																	id="password"
																	className="form-control"
																	onChange={handleOnChange}
																	value={password}
																	required
																/>
																<span className="toggle-password field-icon">
																	{ToggleIcon}
																</span>

																{/* <input type="text" class="form-control" placeholder="" name="password"  onChange={handleOnChange} value={password}  /> */}
															</div>
															<div class="form-group col-md-12 col-12">
																<label>
																	Confirm New Password <p>*</p>
																</label>
																<input
																	id="loginpassword-cnrm"
																	type={ConfirmPasswordInputType}
																	name="confirmPassword"
																	placeholder="Enter your Confirm Password"
																	id="password"
																	className="form-control"
																	onChange={(e) => checkValidation(e)}
																	value={confirmPassword}
																/>
																<span className="toggle-password field-icon">
																	{ConfirmToggleIcon}
																</span>

																{
																	<span
																		style={{ fontSize: 14, color: '#5c5d5d' }}
																	>
																		{isError}
																	</span>
																}

																{/* <input type="text" class="form-control" placeholder="" name="password"  onChange={handleOnChange} value={password}  /> */}
															</div>
															<div class="fotercontent">
																<div class="footersingbtn">
																	<input
																		type="submit"
																		name="Reset"
																		class="btn getin-btn re"
																		value="Cancel"
																	/>
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
														</div>
													</form>
												</div>
											</Modal.Body>
										</div>
									</Modal>
								</div>

								<div class="profile-details">
									<div class="headingdiv">Connect To Facebook</div>
									<div class="change-email facebook-psw">
										<p class="light">
											Login with your Facebook account, and manage your Pages'
											Leads by syncing them to EducationLink with our special
											Facebook Leads Ads add-on for free.
										</p>
										<div class="footersingbtn">
											<input
												type="submit"
												name="Save"
												class="btn getin-btn"
												value="Connect to facebook"
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
	);
};
