import React, { useState, useEffect, useRef } from 'react';
import './addTask.style.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTaskPending,
	addTaskSuccess,
	addTaskError,
	addStudentTaskResetMessage,
} from './addTaskSlice';
import { Spinner, Alert } from 'react-bootstrap';
import { createNewTask } from '../../api/taskApi';
import Multiselect from 'multiselect-react-dropdown';
import {
	filterSearchUser,
	fetchAllUsers,
} from '../../components/getAllTheUsers/getUsersAction';
import { fetchAllStudents } from '../allStudents/allStudentAction';
import { addTask } from './addTaskAction';
import { studentTask } from './addTaskStudentAction';
import { userOfficeStudentTask } from './addUserOfficeTaskAction';
import { userStudentTask } from './addTaskUserAction';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { v4 as uuidv4 } from 'uuid';

export const Addtask = () => {
	const dispatch = useDispatch();
	const { searchStudentList } = useSelector((state) => state.allStudent);

	const { users, officesName } = useSelector((state) => state.getUser);

	const { user } = useSelector((state) => state.user);

	const { students } = useSelector((state) => state.allStudent);

	const { isLoading, status, message } = useSelector((state) => state.addTask);

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	});

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplayUsers(false);
		}
	};

	const handleClickOutside1 = (event) => {
		const { current: wrap } = wrapperRef1;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	const handleClickOutside2 = (event) => {
		const { current: wrap } = wrapperRef2;
		if (wrap && !wrap.contains(event.target)) {
			setDisplayOffice(false);
		}
	};

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside1);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside1);
		};
	});
	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside2);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside2);
		};
	});

	useEffect(() => {
		return () => {
			message && dispatch(addStudentTaskResetMessage());
		};
	}, [message, dispatch]);

	const updatePokeDex = async (stud) => {
		setDisplay(false);
		setStudentId(stud._id);
		setAssignTo(stud.firstName);
	};

	const updateUser = (user) => {
		setDisplayUsers(false);
		setStudentAssign(user.firstName);

		setUserId(user._id);
	};

	const updateOffice = (office) => {
		setDisplayOffice(false);
		setOffices(office.officeName);
	};

	const [taskName, setTaskName] = useState('');
	const [type, setType] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [taskStatus, settaskStatus] = useState('');

	const [taskDetails, setTaskDetails] = useState('');
	const [studentAssign, setStudentAssign] = useState('');
	const [assignTo, setAssignTo] = useState('');

	const [userGroup, setUserGroup] = useState('');
	const [offices, setOffices] = useState('');
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [displayUsers, setDisplayUsers] = useState(false);
	const [displayOffice, setDisplayOffice] = useState(false);
	const [optionsUsers, setUserOptions] = useState([]);
	const [optionsOffice, setOfficeOptions] = useState([]);
	const wrapperRef = useRef(null);
	const wrapperRef1 = useRef(null);
	const wrapperRef2 = useRef(null);
	const [checked, setChecked] = useState(false);
	const [studentId, setStudentId] = useState('');
	const [userId, setUserId] = useState('');

	useEffect(() => {
		if (!students.length) {
			dispatch(fetchAllStudents());
		}
		setOptions(students);
	}, [students, dispatch]);

	useEffect(() => {
		dispatch(fetchAllStudents());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, [dispatch]);

	useEffect(() => {
		if (!users.length) {
			dispatch(fetchAllUsers());
		}
		setUserOptions(users);
		setOfficeOptions(officesName);
	}, [users, dispatch]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'taskName':
				setTaskName(value);
				break;

			case 'type':
				setType(value);
				break;

			case 'dueDate':
				setDueDate(value);
				break;
			case 'taskStatus':
				settaskStatus(value);
				break;
			case 'taskDetails':
				setTaskDetails(value);
				break;

			case 'assignTo':
				setAssignTo(value);

				break;

			case 'studentAssign':
				setStudentAssign(value);

				break;

			case 'userGroup':
				setUserGroup(value);
				break;

			case 'offices':
				setOffices(value);
				break;

			default:
				break;
		}
	};

	const handleCheckBox = () => {
		setChecked(!checked);
	};

	const handleOnTaskSubmit = async (e) => {
		e.preventDefault();

		const userGroupOffice = offices + ' ' + userGroup;

		console.log('na', userGroupOffice);
		const newTask = {
			taskName,
			type,
			dueDate,
			taskStatus,
			studentAssign,
			assignTo,
			userGroupOffice,
			taskId: uuidv4(),
			studentId,
			taskDetails,
			userId,
		};

		console.log('hello', newTask);

		await dispatch(addTask(newTask));

		await dispatch(studentTask(newTask, studentId));
		if (studentAssign != '') {
			await dispatch(userStudentTask(newTask, userId));
			await dispatch(fetchAllUsers());
			await dispatch(fetchAllStudents());
		}

		if (userGroup && offices != '') {
			await dispatch(userOfficeStudentTask(newTask));
			await dispatch(fetchAllUsers());
			await dispatch(fetchAllStudents());
		}

		await dispatch(fetchAllStudents());
	};

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
										<small> Add New Task</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="addtask-from">
					<div class="container-fluid">
						<div class="new-task-bg">
							<form onSubmit={handleOnTaskSubmit}>
								<div class="col-md-12">
									{message && (
										<Alert
											variant={status === 'success' ? 'success' : 'danger'}
										>
											{message}
										</Alert>
									)}

									<div class="headingdiv">What is your task about?</div>
									<div class="form-bgclr">
										<div class="form-row">
											<div class="form-group col-md-12">
												<label>Task Name</label>
												<input
													type="text"
													class="form-control"
													placeholder=""
													name="taskName"
													value={taskName}
													onChange={handleOnChange}
												/>
											</div>
											<div class="form-group col-md-6">
												<label>Type</label>
												<select
													class="form-control"
													name="type"
													id="cars"
													onChange={handleOnChange}
													value={type}
												>
													<option>Call</option>
													<option>Client Meeting</option>
													<option>Event</option>
													<option>Follow up</option>
													<option>Sale</option>
													<option>Text Message</option>
												</select>
											</div>
											<div class="form-group col-md-6">
												<label>Due Date*</label>
												<input
													type="date"
													class="form-control"
													placeholder=""
													name="dueDate"
													value={dueDate}
													onChange={handleOnChange}
												/>
											</div>
											<div class="form-group col-md-12">
												<label>Task Details (comments)</label>
												<textarea
													class="form-control"
													rows="5"
													name="taskDetails"
													value={taskDetails}
													onChange={handleOnChange}
												></textarea>
											</div>
										</div>
									</div>
								</div>
								<div>
									<div class="col-md-12">
										<div class="headingdiv">Current status</div>
										<div class="form-bgclr">
											<div class="form-row">
												<div class="form-group col-md-12 col-12">
													<div class="form-group col-md-6">
														<label>Status</label>
														<select
															class="form-control"
															name="taskStatus"
															id="taskStatus"
															onChange={handleOnChange}
															value={taskStatus}
														>
															<option>Pending</option>
															<option>In progress</option>
															<option>Completed</option>
															<option>Cancelled</option>
														</select>
													</div>
													{/* <form>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="taskStatus"
                                                              value="Pending"
                                                              onChange={handleOnChange}
																														/>
																														
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="taskStatus"
                                                              value="In progress"
                                                              onChange={handleOnChange}
																														/>
																														
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="taskStatus"
                                                              value="Completed"
                                                              onChange={handleOnChange}
																														/>
																														
																													</label>
																													<label class="radio-inline">
																														<input
																															type="radio"
																															name="taskStatus"
                                                              value="Cancelled"
                                                              onChange={handleOnChange}
																														/>
																														
																													</label>
																												</form> */}
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div class="headingdiv">
										Is your task related to a student?
									</div>
									<div class="form-bgclr">
										<div class="form-row">
											<div class="form-group col-md-12">
												<label>Student</label>
												<div
													ref={wrapperRef1}
													className="flex-container flex-column pos-rel"
												>
													<input
														id="auto"
														onClick={() => setDisplay(!display)}
														placeholder="Type to search"
														onChange={handleOnChange}
														autoComplete="off"
														value={assignTo}
														name="assignTo"
														className="form-control"
													/>
													{display && (
														<div className="autoContainer">
															<div className="auto-area">
																<div class="ssg-header">
																	<div class="ssg-icon">
																		<i class="fas fa-user-graduate"></i>
																	</div>
																	<div class="ssg-name">My students</div>
																	<div class="ssg-info">{options.length}</div>
																</div>
																<div className="ssg-content">
																	{options
																		.filter(
																			({ firstName }) =>
																				firstName
																					.toLowerCase()
																					.indexOf(assignTo.toLowerCase()) > -1
																		)
																		.map((value, i) => {
																			return (
																				<div
																					onClick={() => updatePokeDex(value)}
																					className="option ssg-item"
																					key={i}
																					tabIndex="0"
																				>
																					<span>{value.firstName}</span>
																				</div>
																			);
																		})}
																</div>
															</div>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="col-md-12">
									<div class="headingdiv">Who is assigned to this task?</div>
									<div class="form-bgclr">
										<div class="form-row">
											<div class="col-md-12">
												<div class="form-group ">
													<label>This task will be assigned to...</label>
												</div>
											</div>
										</div>

										<div class="form-check custom-control custom-checkbox">
											<input
												type="checkbox"
												class="custom-control-input"
												id="defaultUnchecked"
												onClick={handleCheckBox}
											></input>
											<label
												class="custom-control-label"
												for="defaultUnchecked"
											>
												Assign this task for users in groups or offices
											</label>
										</div>
										{checked == true ? (
											<div class="form-row">
												<div class="form-group col-md-6">
													<label>User Groups</label>
													<div class="form-group col-md-6">
														<select
															class="form-control"
															id="cars"
															name="userGroup"
															value={userGroup}
															onChange={handleOnChange}
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
												</div>

												<div class="form-group col-md-6" ref={wrapperRef2}>
													<label>Offices</label>
													<input
														type="text"
														class="form-control"
														name="offices"
														value={offices}
														onChange={handleOnChange}
														onClick={() => setDisplayOffice(!displayOffice)}
														autoComplete="off"
													/>
													{displayOffice && (
														<div className="autoContainer">
															<div className="auto-area">
																<div class="ssg-header">
																	<div class="ssg-icon">
																		<i
																			class="fas fa-user"
																			aria-hidden="true"
																		></i>
																	</div>
																	<div class="ssg-name">Offices</div>
																</div>
																<div className="ssg-content">
																	{optionsUsers
																		.filter(
																			({ officeName }) =>
																				officeName
																					.toLowerCase()
																					.indexOf(offices.toLowerCase()) > -1
																		)
																		.map((value, i) => {
																			return (
																				<div
																					onClick={() => updateOffice(value)}
																					className="option ssg-item"
																					key={i}
																					tabIndex="0"
																				>
																					<span>{value.officeName}</span>
																				</div>
																			);
																		})}
																</div>
															</div>
														</div>
													)}
												</div>
											</div>
										) : (
											<div
												ref={wrapperRef}
												className="flex-container flex-column pos-rel"
											>
												<input
													id="auto"
													onClick={() => setDisplayUsers(!displayUsers)}
													placeholder="Type to search"
													onChange={handleOnChange}
													autoComplete="off"
													value={studentAssign}
													name="studentAssign"
													className="form-control"
												/>
												{displayUsers && (
													<div className="autoContainer">
														<div className="auto-area">
															<div class="ssg-header">
																<div class="ssg-icon">
																	<i class="fas fa-user" aria-hidden="true"></i>
																</div>
																<div class="ssg-name">My Users</div>
																<div class="ssg-info">
																	{optionsUsers.length}
																</div>
															</div>
															<div className="ssg-content">
																{optionsUsers
																	.filter(
																		({ firstName }) =>
																			firstName
																				.toLowerCase()
																				.indexOf(studentAssign.toLowerCase()) >
																			-1
																	)
																	.map((value, i) => {
																		return (
																			<div
																				onClick={() => updateUser(value)}
																				className="option ssg-item"
																				key={i}
																				tabIndex="0"
																			>
																				<span>{value.firstName}</span>
																			</div>
																		);
																	})}
															</div>
														</div>
													</div>
												)}
											</div>
										)}

										<div class="form-check custom-control custom-checkbox">
											<input
												type="checkbox"
												class="custom-control-input"
												id="defaultUnchecked1"
											/>
											<label
												class="custom-control-label"
												for="defaultUnchecked1"
											>
												This task is urgent (should be completed as soon as
												possible)!
											</label>
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
					</div>
				</section>
			</div>
		</div>
	);
};
