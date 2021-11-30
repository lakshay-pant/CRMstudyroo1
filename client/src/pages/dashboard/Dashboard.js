import React, { useEffect, useState } from 'react';
import './dashboard.style.css';
import { Spinner, Alert } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllStudents } from '../allStudents/allStudentAction';
import { fetchAlltask } from '../taskList/taskListgetAction';
import { fetchAllLeadTaskD } from '../leads/dGetLeadTaskAction';
import { editTask } from '../taskList/taskListAction';
import { deletetask } from '../taskList/taskListdeleteAction';

import { fetchAllUsers } from '../../components/getAllTheUsers/getUsersAction';
import { deleteStudentTask } from '../taskList/deleteStudentTaskAction';
import { deleteUserStudentTask } from '../taskList/deleteUserTaskAction';
import { editResetSuccessMSg } from '../taskList/taskListSlice';
import { editStudentTask } from '../taskList/editStudentTaskAction';
import { editUserStudentTask } from '../taskList/editUserTaskAction';
import Moment from 'moment';
import moment from 'moment';

const Dashboard = () => {
	const dispatch = useDispatch();

	const { students } = useSelector((state) => state.allStudent);

	const { user } = useSelector((state) => state.user);

	const { task } = useSelector((state) => state.getTask);

	const { leadTasks } = useSelector((state) => state.getLeadTaskData);

	const [isOpen, setIsOpen] = useState(false);
	const [ID, setID] = useState('');
	const [taskName, setTaskName] = useState();
	const [type, setType] = useState();
	const [dueDate, setDueDate] = useState('');
	const [taskDetails, setTaskDetails] = useState('');
	const [studentAssign, setStudentAssign] = useState('');
	const [assignTo, setAssignTo] = useState('');
	const [taskId, setTaskId] = useState('');
	const [studentId, setStudentId] = useState('');
	const [taskStatus, setTaskStatus] = useState('');
	const [userGroupOffice, setUserGroupOffice] = useState('');

	const { isLoadingEdit, statusEdit, messageEdit } = useSelector(
		(state) => state.editTask
	);

	const [userId, setUserId] = useState('');

	useEffect(() => {
		if (!students.length) {
			dispatch(fetchAllStudents());
		}
	}, []);

	useEffect(() => {
		dispatch(fetchAllStudents());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAlltask());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllLeadTaskD());
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, []);

	useEffect(() => {
		if (!leadTasks.length) {
			dispatch(fetchAllLeadTaskD());
		}
	}, []);

	useEffect(() => {
		if (!task.length) {
			dispatch(fetchAlltask());
		}
	}, []);

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

			case 'taskDetails':
				setTaskDetails(value);
				break;

			case 'assignTo':
				setAssignTo(value);
				break;

			case 'studentAssign':
				setStudentAssign(value);
				break;

			case 'userGroupOffice':
				userGroupOffice(value);
				break;

			case 'taskStatus':
				setTaskStatus(value);
				break;

			default:
				break;
		}
	};

	const taskCompleted = async (item) => {
		setTaskName(item.taskName);
		setType(item.type);
		setDueDate(item.dueDate);
		setStudentAssign(item.studentAssign);
		setAssignTo(item.assignTo);
		setUserGroupOffice(item.userGroupOffice);
		setTaskDetails(item.taskDetails);

		const newTask = {
			taskName,
			type,
			dueDate,
			studentAssign,
			userGroupOffice,

			taskStatus: 'Completed',
			taskDetails,
		};
		await dispatch(editTask(newTask, item._id));
		await dispatch(editStudentTask(newTask, item.studentId, item.taskId));
		await dispatch(editUserStudentTask(newTask, item.userId, item.taskId));
		await dispatch(fetchAlltask());
		await dispatch(fetchAllStudents());
		await dispatch(fetchAllUsers());

		await setTaskName('');
		await setType('');
		await setDueDate('');
		await setStudentAssign('');
		await setAssignTo('');

		await setUserGroupOffice('');
		await setTaskDetails('');
		await setTaskStatus('');
	};

	const taskInProgress = async (item) => {
		setTaskName(item.taskName);
		setType(item.type);
		setDueDate(item.dueDate);
		setStudentAssign(item.studentAssign);
		setAssignTo(item.assignTo);

		setUserGroupOffice(item.userGroupOffice);
		setTaskDetails(item.taskDetails);

		const newTask = {
			taskName,
			type,
			dueDate,
			studentAssign,
			userGroupOffice,

			taskStatus: 'In progress',
			taskDetails,
		};

		await dispatch(editTask(newTask, item._id));
		await dispatch(editStudentTask(newTask, item.studentId, item.taskId));
		await dispatch(editUserStudentTask(newTask, item.userId, item.taskId));
		await dispatch(fetchAlltask());
		await dispatch(fetchAllStudents());
		await dispatch(fetchAllUsers());

		await setTaskName('');
		await setType('');
		await setDueDate('');
		await setStudentAssign('');
		await setAssignTo('');

		await setUserGroupOffice('');
		await setTaskDetails('');
		await setTaskStatus('');
	};

	const handleOnTaskSubmit = async (e) => {
		e.preventDefault();

		const newTask = {
			taskName,
			type,
			dueDate,
			studentAssign,
			assignTo,
			userGroupOffice,
			taskStatus,
			taskDetails,
		};

		await dispatch(editTask(newTask, ID));
		await dispatch(editStudentTask(newTask, studentId, taskId));
		await dispatch(editUserStudentTask(newTask, userId, taskId));
		await dispatch(fetchAlltask());
		await dispatch(fetchAllStudents());
		await dispatch(fetchAllUsers());
	};

	const showModal = (item) => {
		setID(item._id);
		setTaskId(item.taskId);
		setStudentId(item.studentId);
		setTaskName(item.taskName);
		setType(item.type);
		setDueDate(item.dueDate);
		setStudentAssign(item.studentAssign);
		setAssignTo(item.assignTo);

		setIsOpen(true);
		setTaskDetails(item.taskDetails);
		setTaskStatus(item.taskStatus);
		setUserId(item.userId);
	};

	const hideModal = () => {
		dispatch(editResetSuccessMSg());
		setIsOpen(false);
		setID('');
		setTaskId('');
		setStudentId('');
		setTaskName('');
		setType('');
		setDueDate('');
		setStudentAssign('');
		setAssignTo('');

		setUserGroupOffice('');
		setTaskDetails('');
		setTaskStatus('');
		setUserId('');
	};

	useEffect(() => {
		// messageDelete && dispatch(deleteResetSuccessMSg());
		messageEdit && dispatch(editResetSuccessMSg());
	}, [dispatch]);

	var studentNumber = students.length;

	const studentTask = task
		? task.filter(function (task) {
				return task.taskStatus === 'Pending';
		  })
		: [];

	const addStudentFilter = students
		? students.filter(function (stud) {
				//var date1 = new Date(student.addedAt);
				//date1.setDate(date1.getDate() - 30);
				//var date2 = new Date(student.addedAt);
				//date2.setDate(date1.getDate() - 1);

				var prevMonth = moment().subtract(1, 'months');
				var nextDay = moment().add(1, 'days');

				var filteredStudents = moment(stud.addedAt).isBetween(
					prevMonth,
					nextDay
				);
				fetchAllStudents();
				return filteredStudents;
		  })
		: [];

	const addStudentTaskFilter = task
		? task.filter(function (ta) {
				//var date1 = new Date(student.addedAt);
				//date1.setDate(date1.getDate() - 30);
				//var date2 = new Date(student.addedAt);
				//date2.setDate(date1.getDate() - 1);

				var prevMonth = moment().subtract(1, 'months');
				var nextDay = moment().add(1, 'days');

				var filteredStudentTask = moment(ta.addedAt).isBetween(
					prevMonth,
					nextDay
				);
				fetchAlltask();
				console.log(filteredStudentTask);
				return filteredStudentTask;
		  })
		: [];

	const addLeadTaskFilter = leadTasks
		? leadTasks.filter(function (leadTask) {
				//var date1 = new Date(student.addedAt);
				//date1.setDate(date1.getDate() - 30);
				//var date2 = new Date(student.addedAt);
				//date2.setDate(date1.getDate() - 1);

				var prevMonth = moment().subtract(1, 'months');
				var nextDay = moment().add(1, 'days');

				var filteredLeadTask = moment(leadTask.addedAt).isBetween(
					prevMonth,
					nextDay
				);
				fetchAllLeadTaskD();
				console.log(filteredLeadTask);
				return filteredLeadTask;
		  })
		: [];

	const leadTask = leadTasks
		? leadTasks.filter(function (leadTask) {
				return leadTask.taskCompleted === false;
		  })
		: [];

	const deleteTaskRecord = async (item) => {
		await dispatch(deletetask(item._id));
		await dispatch(deleteStudentTask(item.studentId, item.taskId));
		await dispatch(deleteUserStudentTask(item.userId, item.taskId));
		await dispatch(fetchAllStudents());
		await dispatch(fetchAlltask());
		await dispatch(fetchAllUsers());
	};

	return (
		<div className="html ">
			{' '}
			<div id="page-top" className="hold-transition sidebar-mini layout-fixed">
				<div className="wrapper">
					{/*-- Content Wrapper. Contains page content */}
					<div className="content-wrapper ">
						{/*-- Content Header (Page header) */}
						{/*-- /.content-header */}

						{/*-- Main content */}
						<div className="maincontent-rightside">
							<section className="maincontent">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="wel-admin">
												<h2>Welcome, {user.firstName} </h2>
												<span>What would you like to do?</span>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- boxese section */}
							<section className="allboxes">
								<div className="container-fluid">
									<div className="boxese-ul">
										<ul className="list-unstyled">
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<Link to="/addstudent">
														{' '}
														<p className="mb-0">Add New Student</p>
													</Link>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-tasks"></i>
													</span>
													<Link to="/add-task">
														{' '}
														<p className="mb-0">Add New Task</p>
													</Link>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-usd"></i>
													</span>
													<p className="mb-0">See Agency Revenue</p>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-chart-pie"></i>
													</span>
													<p className="mb-0">See Agency Performance</p>
												</a>
											</li>
											<li>
												<a href="/#">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p className="mb-0">Student Portal</p>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</section>
							{/*-- boxese section */}

							{/*-- pending task section */}
							<section className="pendingtask">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-6">
											<div className="headingdiv">
												You have {studentTask.length} student tasks pending
											</div>
											{studentTask.length
												? studentTask.reverse().map((item) => (
														<div className="client-mett table-responsive">
															<table className="table table-hover">
																<tbody>
																	<tr>
																		<td>
																			{item.type}
																			<br />
																			<span>
																				Assigned To : {item.studentAssign}
																			</span>
																			{'   '}
																			<span>Created By : {item.userName}</span>
																		</td>
																		<td>
																			{item.dueDate
																				? Moment(item.dueDate).format('DD')
																				: 'No Date'}{' '}
																			{item.dueDate
																				? Moment(item.dueDate).format('MMMM')
																				: ''}{' '}
																			{item.dueDate
																				? Moment(item.dueDate).format('YYYY')
																				: ''}
																			<div class="todo-buttons">
																				{item.studentId ? (
																					<Link
																						to={
																							'/studentInfo/' + item.studentId
																						}
																					>
																						{' '}
																						<a class="task-btn-done">
																							<span> Go To Student </span>
																							<i
																								class="fa fa-eye"
																								aria-hidden="true"
																							></i>
																						</a>
																					</Link>
																				) : (
																					<Link to={'/dashboard'}>
																						{' '}
																						<a class="task-btn-done">
																							<span> Go To Student </span>
																							<i
																								class="fa fa-eye"
																								aria-hidden="true"
																							></i>
																						</a>
																					</Link>
																				)}

																				<a
																					class="task-btn-done"
																					onClick={() => taskCompleted(item)}
																				>
																					<span> Mark as Complete</span>
																					<i
																						class="fa fa-check"
																						aria-hidden="true"
																					></i>
																				</a>
																				<a
																					class="task-btn-done"
																					onClick={() => taskInProgress(item)}
																				>
																					<span>Mark as in Progress</span>
																					<i
																						class="fa fa-chevron-right"
																						aria-hidden="true"
																					></i>
																				</a>
																				<a
																					class="task-btn-done"
																					onClick={() => showModal(item)}
																				>
																					<span> Edit </span>
																					<i
																						class="fas fa-pen"
																						aria-hidden="true"
																					></i>
																				</a>
																				<a
																					class="task-btn-done"
																					onClick={() => deleteTaskRecord(item)}
																				>
																					<span> Delete </span>
																					<i
																						class="fa fa-times"
																						aria-hidden="true"
																					></i>
																				</a>
																			</div>
																			<div
																				class="modal fade filters-modal show"
																				aria-modal="true"
																			>
																				<Modal show={isOpen} onHide={hideModal}>
																					<div id="taskupdate">
																						<Modal.Body>
																							<div
																								class="modal-dialog modal-lg"
																								role="document"
																							>
																								<div class="modal-content">
																									<div class="modal-top">
																										<h5>Update Task</h5>
																										<button
																											onClick={hideModal}
																											type="button"
																											class="close"
																											data-dismiss="modal"
																											aria-label="Close"
																										>
																											<span aria-hidden="true">
																												&times;
																											</span>
																										</button>
																									</div>

																									<div class="student-filter-area">
																										<form
																											onSubmit={
																												handleOnTaskSubmit
																											}
																										>
																											<div class="row">
																												<div class="col-lg-8 col-12">
																													<div class="update-crm update-task">
																														<div class="crm-form">
																															<div class="headingdiv">
																																What is your
																																task about?
																															</div>

																															<div class="form-row">
																																<div class="form-group col-md-12">
																																	<label>
																																		Task Name
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="taskName"
																																		value={
																																			taskName
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-6">
																																	<label>
																																		Type
																																	</label>
																																	<select
																																		class="form-control"
																																		name="type"
																																		id="cars"
																																		onChange={
																																			handleOnChange
																																		}
																																		value={type}
																																	>
																																		<option>
																																			Call
																																		</option>
																																		<option>
																																			Client
																																			Meeting
																																		</option>
																																		<option>
																																			Event
																																		</option>
																																		<option>
																																			Follow up
																																		</option>
																																		<option>
																																			Sale
																																		</option>
																																		<option>
																																			Text
																																			Message
																																		</option>
																																	</select>
																																</div>
																																<div class="form-group col-md-6">
																																	<label>
																																		Due Date*
																																	</label>
																																	<input
																																		type="date"
																																		class="form-control"
																																		placeholder=""
																																		name="dueDate"
																																		value={
																																			dueDate
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-12">
																																	<label>
																																		Task Details
																																		(comments)
																																	</label>
																																	<textarea
																																		class="form-control"
																																		rows="5"
																																		name="taskDetails"
																																		value={
																																			taskDetails
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	></textarea>
																																</div>
																															</div>
																														</div>

																														<div class="crm-form">
																															<div class="headingdiv">
																																Current status
																															</div>
																															<div class="form-row">
																																<div class="form-group col-md-12 col-12">
																																	<div class="form-group col-md-6">
																																		<select
																																			class="form-control"
																																			name="taskStatus"
																																			id="taskStatus"
																																			value={
																																				taskStatus
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		>
																																			<option>
																																				Pending
																																			</option>
																																			<option>
																																				In
																																				progress
																																			</option>
																																			<option>
																																				Completed
																																			</option>
																																			<option>
																																				Cancelled
																																			</option>
																																		</select>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																											<div class="fotercontent">
																												<div class="footersingbtn">
																													<input
																														type="submit"
																														name="Save"
																														class="btn getin-btn"
																														value="Save"
																													/>
																												</div>
																											</div>
																											{messageEdit && (
																												<Alert
																													variant={
																														statusEdit ===
																														'success'
																															? 'success'
																															: 'danger'
																													}
																												>
																													{messageEdit}
																												</Alert>
																											)}
																										</form>
																									</div>
																								</div>
																							</div>
																						</Modal.Body>
																					</div>
																				</Modal>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
												  ))
												: 'No Student Task Found'}
										</div>

										<div className="col-md-6">
											<div className="headingdiv">
												You have {leadTask.length} lead tasks pending
											</div>
											{leadTask.length
												? leadTask.reverse().map((item) => (
														<div className="client-mett table-responsive">
															<table className="table table-hover">
																<tbody>
																	<tr>
																		<td>
																			{item.taskStatus}
																			<span>Assigned To : {item.assignee}</span>
																			{'   '}
																			<span>Created By : {item.userName}</span>
																		</td>
																		<td>
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format('DD')
																				: 'No Date'}{' '}
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format(
																						'MMMM'
																				  )
																				: ''}{' '}
																			{item.taskEndDate
																				? Moment(item.taskEndDate).format(
																						'YYYY'
																				  )
																				: ''}
																			<div class="todo-buttons">
																				<a class="task-btn-done">
																					<span> Go To Student </span>
																					<i
																						class="fa fa-user"
																						aria-hidden="true"
																					></i>
																				</a>
																				<a class="task-btn-done">
																					<span> Mark as Complete</span>
																					<i
																						class="fa fa-check"
																						aria-hidden="true"
																					></i>
																				</a>

																				<a class="task-btn-done">
																					<span> Edit </span>
																					<i
																						class="fas fa-pen"
																						aria-hidden="true"
																					></i>
																				</a>
																				<a class="task-btn-done">
																					<span> Delete </span>
																					<i
																						class="fa fa-times"
																						aria-hidden="true"
																					></i>
																				</a>
																			</div>
																		</td>
																	</tr>
																</tbody>
															</table>
														</div>
												  ))
												: 'No Student Task Found'}
										</div>
									</div>
								</div>
							</section>
							{/*-- pending task section  end*/}

							{/*-- activities section  */}
							<section className="activities">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="all-activity-button">
												<form className="activform ml-auto">
													<div className="form-row">
														<div className="form-group">
															<div className="activi-inputs">
																<label className="labelheade">View</label>
																<select
																	className="form-control"
																	id="exampleFormControlSelect1"
																>
																	<option>My Organization</option>
																	<option>2</option>
																	<option>3</option>
																	<option>4</option>
																	<option>5</option>
																</select>
															</div>
														</div>
														<div className="form-group">
															<div className="activi-inputs m-0">
																<label className="labelheade">Activities</label>
																<select
																	className="form-control"
																	id="exampleFormControlSelect1"
																>
																	<option>All</option>
																	<option>2</option>
																	<option>3</option>
																	<option>4</option>
																	<option>5</option>
																</select>
															</div>
														</div>
													</div>
												</form>
											</div>
											<div className="headingdiv">Activities</div>
										</div>
										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Students Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addStudentFilter.length}</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Sales Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>00</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Student Tasks Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addStudentTaskFilter.length}</span>
												</div>
											</div>
										</div>

										<div className="col-md-3">
											<div className="activity-boxmain">
												<div className="activi-content">
													<span>
														<i className="fa fa-user-graduate"></i>
													</span>
													<p>
														Lead Task Added<small>last 30 days</small>
													</p>
												</div>
												<div className="activi-value">
													<span>{addLeadTaskFilter.length}</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- activities section  end*/}

							{/*-- graph section */}
							<section className="graph-section">
								<div className="container-fluid">
									<div className="row">
										<div className="col-md-12">
											<div className="garph">
												<img
													src="images/graph.jpg"
													alt="Graph"
													className="img-fluid"
												/>
											</div>
										</div>
									</div>
								</div>
							</section>
							{/*-- graph section and here */}
						</div>
						{/*-- /.content */}
					</div>
					{/*-- /.content-wrapper */}

					{/*-- Control Sidebar */}
					<aside className="control-sidebar control-sidebar-dark">
						{/*-- Control sidebar content goes here */}
					</aside>
					{/*-- /.control-sidebar */}
				</div>
				{/*-- ./wrapper */}
			</div>
		</div>
	);
};

export default Dashboard;
