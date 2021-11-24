import React from 'react';
import * as s from './App.styles';
import SideBar from './sidebar/SideBar';
import * as Palette from './colors';
import './defaultLayout.style.css';
import { Dropdown } from 'bootstrap';
import { useParams } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { userLogout } from '../api/userApi';
import { Link, useHistory, Route, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStudents } from '../pages/allStudents/allStudentAction';

import { string } from 'prop-types';
library.add(faEyeSlash, faEye);

export const DefaultLayout = ({ children }) => {
	const history = useHistory();
	const backgroundImage = 'images/mountain.jpg';
	const location = useLocation();
	const dispatch = useDispatch();
	const wrapperRef1 = useRef(null);
	const [display, setDisplay] = useState(false);
	const [assignTo, setAssignTo] = useState('');
	const [options, setOptions] = useState([]);
	const { students } = useSelector((state) => state.allStudent);

	useEffect(() => {
		if (!students.length) {
			dispatch(fetchAllStudents());
		}
		setOptions(students);
	}, [students, dispatch]);

	const handleClickOutside1 = (event) => {
		const { current: wrap } = wrapperRef1;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside1);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside1);
		};
	});

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'assignTo':
				setAssignTo(value);

				break;

			default:
				break;
		}
	};

	const sidebarHeader = {
		fullName: 'Yo Yo Travel',
		shortName: 'YO',
	};

	const { _id } = useParams();
	const menuItems = [
		{
			name: 'Dashboard',
			to: '/dashboard',
			icon: '/images/Dashboard.png',
			subMenuItems: [],
		},
		{
			name: 'Students',
			to: '/dashboard',
			icon: '/images/student.png',
			subMenuItems: [{ name: 'All Students', to: '/all-student' }],
		},
		{
			name: 'Leads',
			to: '/leads',
			icon: '/images/courses.png',
			subMenuItems: [],
		},
		{
			name: 'Tasks',
			to: '/task-list',
			icon: '/images/task.png',
			subMenuItems: [],
		},
		{
			name: 'Courses',
			to: '/dashboard',
			icon: '/images/courses.png',
			subMenuItems: [],
		},
		{
			name: 'Insurance',
			to: '/dashboard',
			icon: '/images/insurance.png',
			subMenuItems: [
				{ name: 'Quote and Buy', to: '' },
				{ name: 'Students', to: '' },
				{ name: 'Agent Voices', to: '' },
				{ name: 'Commission and Invoices', to: '' },
				{ name: 'Credit and Card Payments', to: '' },
			],
		},
		{
			name: 'Enroll & Book',
			to: '',
			icon: '/images/Enroll.png',
			subMenuItems: [],
		},
		{
			name: 'Accounting',
			to: '',
			icon: '/images/Accounting.png',
			subMenuItems: [
				{ name: 'Payments', to: '' },
				{ name: 'Invoices', to: '' },
				{ name: 'Refunds', to: '' },
				{ name: 'Sub-Agents', to: '' },
				{ name: 'Intl. Transfer', to: '' },
				{ name: 'Credit Card Payouts', to: '' },
			],
		},
		{
			name: 'Marketing',
			to: '',
			icon: '/images/Marketing.png',
			subMenuItems: [
				{ name: 'Payments', to: '' },
				{ name: 'Forms', to: '' },
				{ name: 'Templates', to: '' },
				{ name: 'Automation', to: '' },
				{ name: 'Website', to: '' },
				{ name: 'Goals', to: '' },
				{ name: 'Segments', to: '' },
			],
		},
		{ name: 'Reports', to: '', icon: '/images/reports.png', subMenuItems: [] },
		{
			name: 'Analytics',
			to: '',
			icon: '/images/analytics.png',
			subMenuItems: [],
		},
	];

	const fonts = {
		header: 'Roboto Slab',
		menu: 'Roboto Slab',
	};
	const logMeOut = () => {
		sessionStorage.removeItem('accessJWT');
		localStorage.removeItem('crmSite');
		userLogout();
		history.push('/');
	};

	const goToPreviousPath = () => {
		history.goBack();
	};
	return (
		<div>
			<div>
				<s.App>
					<SideBar
						backgroundImage={backgroundImage}
						sidebarHeader={sidebarHeader}
						menuItems={menuItems}
						fonts={fonts}
						colorPalette={Palette.brown}
					/>
					<main>
						<nav className="main-header navbar navbar-expand navbar-white navbar-light">
							{(() => {
								switch (location.pathname) {
									case '/addstudent':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									case '/add-task':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									case '/dashboard/all-student':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);
									case '/leads':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									case '/task-list':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									case '/profile-page':
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									case '/studentInfo/' + _id:
										return (
											<div class="footersingbtn">
												<input
													type="submit"
													name="submit"
													class="btn getin-btn"
													value="<   Go Back"
													onClick={goToPreviousPath}
												/>
											</div>
										);

									default:
										return null;
								}
							})()}

							{(() => {
								switch (location.pathname) {
									case '/dashboard/all-student':
										return (
											<form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
												<div
													className="input-group"
													ref={wrapperRef1}
													className="flex-container flex-column pos-rel"
												>
													<input
														type="text"
														className="form-control small"
														placeholder="Search for..."
														aria-label="Search"
														aria-describedby="basic-addon2"
														onClick={() => setDisplay(!display)}
														onChange={handleOnChange}
														value={assignTo}
														name="assignTo"
														autoComplete="off"
													/>
													<div className="input-group-append">
														<button className="btn btn-primary" type="button">
															<i className="fa fa-search fa-sm"></i>
														</button>
													</div>

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
																				<Link to={'/studentInfo/' + value._id}>
																					<div
																						className="option ssg-item"
																						key={i}
																						tabIndex="0"
																					>
																						<span>{value.firstName}</span>
																					</div>
																				</Link>
																			);
																		})}
																</div>
															</div>
														</div>
													)}
												</div>
											</form>
										);

									default:
										return null;
								}
							})()}

							{/*-- SEARCH FORM -*/}

							{/*-- Right navbar links -*/}
							<ul className="navbar-nav topiconsbar">
								{/*-- Notifications Dropdown Menu -*/}
								<li className="nav-item dropdown">
									<a className="nav-link" data-toggle="dropdown" href="/#">
										<i className="fa fa-bell"></i>
										<span className="badge badge-warning navbar-badge">3</span>
									</a>
									<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
										<span className="dropdown-item dropdown-header">
											3 Notifications
										</span>
										<div className="dropdown-divider"></div>
										<a href="/#" className="dropdown-item">
											<i className="fa fa-envelope mr-2"></i> 4 new messages
											<span className="float-right text-muted text-sm">
												3 mins
											</span>
										</a>

										<a href="/#" className="dropdown-item dropdown-footer">
											See All Notifications
										</a>
									</div>
								</li>
								<li className="nav-item dropdown">
									<a className="nav-link" data-toggle="dropdown" href="/#">
										<i className="fa fa-cog"></i>
									</a>
									<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
										<div className="dropdown-divider"></div>
										<Link to="/profile-page">
											<a className="dropdown-item">
												<i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
												Profile
											</a>
										</Link>

										<a className="dropdown-item" href="/#">
											<i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
											Settings
										</a>

										<a className="dropdown-item" href="/#">
											<i className="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
											Activity Log
										</a>
										<a
											className="dropdown-item"
											href="/#"
											data-toggle="modal"
											data-target="#logoutModal"
											onClick={logMeOut}
										>
											<i className="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
											Logout
										</a>
									</div>
								</li>
							</ul>
						</nav>

						{children}

						{/*-- more features -*/}
						<section className="morefeatures-section">
							<div className="container-fluid">
								<div className="headingdiv">More features to help you</div>
								<div className="row">
									<div className="col-md-3">
										<a href="/#">
											<div className="morefeature-box">
												<span>
													<i className="fa fa-quote-right"></i>
												</span>
												<div className="qutemsg">
													<small>Quotes</small>
													<p>
														Send courses, insurance, accommodation, etc, to the
														student.
													</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3">
										<a href="/#">
											<div className="morefeature-box">
												<span>
													<i className="fal fa-tasks"></i>
												</span>
												<div className="qutemsg">
													<small>Tasks</small>
													<p>
														Reminders, tasks and your to-do list so you stay
														organized.
													</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3">
										<a href="/#">
											{' '}
											<div className="morefeature-box">
												<span>
													<i className="fas fa-rss-square"></i>
												</span>
												<div className="qutemsg">
													<small>News Feed</small>
													<p>Price, college and course updates in one place.</p>
												</div>
											</div>
										</a>
									</div>
									<div className="col-md-3">
										<a href="/#">
											<div className="morefeature-box">
												<span>
													<i className="fas fa-envelope-open-text"></i>
												</span>
												<div className="qutemsg">
													<small>Templates</small>
													<p>Quickly send emails and quotes with one click.</p>
												</div>
											</div>
										</a>
									</div>
								</div>
							</div>
						</section>
					</main>
				</s.App>
			</div>
		</div>
	);
};
