import React from 'react';
// import "./addAdminUser.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCourses } from './getProvidersAction';
import { Link, useHistory, Route, useLocation } from 'react-router-dom';

export const Providerslist = () => {
	const { course, isLoadingShowcourse, error, searchCourseList } = useSelector(
		(state) => state.courseList
	);

	const dispatch = useDispatch();

	useEffect(() => {
		if (!course.length) {
			dispatch(fetchAllCourses());
		}
	}, [course, dispatch]);

	useEffect(() => {
		dispatch(fetchAllCourses());
	}, []);

	return (
		<div className="provdrs_table">
			<table>
				<thead>
					<tr>
						<th>LOGO</th>
						<th></th>
						<th>STATUS</th>
						<th>UPDATE</th>
						<th>ACTIONS</th>
					</tr>
				</thead>
				<tbody>
					{course
						.slice(0)
						.reverse()
						.map((item) => (
							<tr>
								<td>
									<div className="provdr_lgo">
										<img src="images/skills_australia.jpg"></img>
									</div>
								</td>
								<td>{item.publicName}</td>
								<td>
									<span className="provdr_status">{item.status}</span>
								</td>
								<td>4 months ago</td>
								<td>
									<Link to={'/editCourses/' + item._id}>
										<a>
											Edit &nbsp;<i className="fas fa-pen"></i>
										</a>
									</Link>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
};
