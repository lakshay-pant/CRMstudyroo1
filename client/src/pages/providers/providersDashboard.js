import React from 'react';
import './providers.css';
import { Providerslist } from '../../components/providerList/providersList';
import 'react-tabs/style/react-tabs.css';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addCourse } from './addProviderAction';
import { fetchAllCourses } from '../../components/providerList/getProvidersAction';
import { useDispatch, useSelector } from 'react-redux';

export const Providersdash = () => {
	const dispatch = useDispatch();
	const [isOpen8, setIsOpen8] = useState(false);
	const [publicName, setPublicName] = useState('');
	const [type, setType] = useState('');
	const [nickName, setNickName] = useState('');
	const [status, setStatus] = useState('');

	const showModal8 = (item) => {
		setIsOpen8(true);
	};

	const hideModal8 = () => {
		setIsOpen8(false);
	};

	useEffect(() => {
		dispatch(fetchAllCourses());
	}, []);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'publicName':
				setPublicName(value);
				break;

			case 'type':
				setType(value);
				break;

			case 'nickName':
				setNickName(value);
				break;
			case 'status':
				setStatus(value);
				break;

			default:
				break;
		}
	};

	const handleOnCourseSubmit = async (e) => {
		e.preventDefault();

		const newTask = {
			publicName,
			status,
			type,
			nickName,
		};

		console.log('ssss', newTask);

		await dispatch(addCourse(newTask));
		await dispatch(fetchAllCourses);
	};

	return (
		<>
			<div className="providers_wrpr">
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
									<a href="#" className="import_anchor">
										Import from spreadsheet
									</a>

									<div className="st-file-upload">
										<a
											href="#"
											className="custom-file-upload"
											onClick={showModal8}
										>
											Add New Student
											<span>+</span>
										</a>
										<input id="file-upload" type="file" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="provdrs_hdr_chckbx">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<ul>
									<li>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="providers_type"
												value=""
												id="all"
											/>
											<label className="form-check-label" htmlFor="all">
												All
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="providers_type"
												value=""
												id="school"
											/>
											<label className="form-check-label" htmlFor="school">
												School
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="providers_type"
												value=""
												id="accommodation"
											/>
											<label
												className="form-check-label"
												htmlFor="accommodation"
											>
												Accommodation
											</label>
										</div>
									</li>
									<li>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="providers_type"
												value=""
												id="government"
											/>
											<label className="form-check-label" htmlFor="government">
												Government
											</label>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className="provdr_recrd_sec">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="provdrs_rcrds">
									<label>Records:</label>
									<select className="form-control">
										<option>25</option>
										<option>24</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="prvdr_lst_sec">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<Providerslist />
							</div>
						</div>
					</div>
				</section>
			</div>

			<div>
				{/* add new organisation popup start */}
				<div
					className="modal fade filters-modal show "
					id="leadsFilter"
					aria-modal="true"
				>
					<Modal show={isOpen8} onHide={hideModal8} className="modal_otr">
						<Modal.Body className="add_office_pop">
							<div className="modal_hdr">
								<div className="modal_title">Add new provider</div>
								<a href="#" onClick={hideModal8}>
									<i className="fa fa-times-circle"></i>
								</a>
							</div>
							<div className="modal_content">
								<form onSubmit={handleOnCourseSubmit}>
									<div className="add_office_frm_sngl">
										<div className="add_ofc_frm_slf_con">
											<div className="row">
												<div className="col-lg-6 form-group">
													<label>Public name </label>
													<input
														type="text"
														class="form-control"
														placeholder=""
														name="publicName"
														value={publicName}
														onChange={handleOnChange}
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label>Status</label>
													<select
														className="form-control"
														name="status"
														value={status}
														onChange={handleOnChange}
													>
														<option>-Nothing selected</option>
														<option>Visible to agents</option>
														<option>Invisible to agents</option>
													</select>
												</div>
												<div className="col-lg-6 form-group">
													<label>One word alias </label>
													<input
														type="text"
														className="form-control"
														name="nickName"
														value={nickName}
														onChange={handleOnChange}
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label>Type</label>
													<select
														className="form-control"
														name="type"
														value={type}
														onChange={handleOnChange}
													>
														<option>-Nothing selected</option>

														<option>Ed. provider</option>
														<option>Insurer</option>
														<option>Accommodation</option>
														<option>Government</option>
														<option>Airline company</option>
														<option>Service provider</option>
														<option>Associtation</option>
													</select>
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
		</>
	);
};
