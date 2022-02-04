import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './providers.css';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Modal from 'react-bootstrap/Modal';
import { fetchSingleProvider } from './singleProviderAction';

export const Editcourses = () => {
	const { provider } = useSelector((state) => state.getSingleProvider);
	const { _id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!provider.length) {
			dispatch(fetchSingleProvider(_id));
		}
	}, [_id]);

	const [publicName, setPublicName] = useState('');

	const [nickName, setNickName] = useState('');

	useEffect(() => {
		setPublicName(provider.publicName);
		setNickName(provider.nickName);
	}, [provider.publicName, provider.nickName]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'publicName':
				setPublicName(value);
				break;

			case 'nickName':
				setNickName(value);
				break;

			default:
				break;
		}
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
										<small>{provider.publicName}</small>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="import-from">
									<div className="st-file-upload">
										<a href="#" className="custom-file-upload">
											Add New <span>+</span>
										</a>
										<input id="file-upload" type="file" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="edit_prvdrs_tab_sec">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="edit_prvdrs_tab">
									<Tabs className="react-tabs first">
										<TabList>
											<Tab>MARKETING</Tab>
											<Tab>PRODUCTS</Tab>
											<Tab>FEES & PROMOTIONS</Tab>
											<Tab>LOCATIONS</Tab>
											<Tab>PREFERENCES</Tab>
											<Tab>BUSINESS RULES</Tab>
											<Tab>TRAINING</Tab>
										</TabList>

										<TabPanel>
											<div className="mrktng_tab_otr">
												<div className="edt_prvdrs_cmn_nbrs">
													<ul>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Number of courses
																<strong>9</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Number of services
																<strong>0</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Number of locations
																<strong>1</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Number of intakes
																<strong>0</strong>
															</div>
														</li>
													</ul>
												</div>
												<section className="stts_mrktng_sec">
													<div className="container-fluid">
														<div className="row">
															<div className="col-lg-3">
																<div className="stts_sdbr">
																	<div className="stts_nmstts">
																		<div
																			className="accordion md-accordion"
																			id="accordionEx"
																			role="tablist"
																			aria-multiselectable="true"
																		>
																			<div className="card">
																				<div
																					className="card-header"
																					role="tab"
																					id="personal"
																				>
																					<a
																						data-toggle="collapse"
																						data-parent="#accordionEx"
																						href="#personal1"
																						aria-expanded="true"
																						aria-controls="personal1"
																					>
																						<div className="headingdiv">
																							Name & status{' '}
																							<i className="fas fa-angle-down rotate-icon"></i>
																						</div>
																					</a>
																				</div>
																				<div
																					id="personal1"
																					className="collapse"
																					role="tabpanel"
																					aria-labelledby="personal"
																					data-parent="#accordionEx"
																				>
																					<div className="card-body">
																						<div className="stts_form">
																							<div className="row">
																								<div className="form-group col-lg-12">
																									<label>Public name *</label>
																									<input
																										className="form-control"
																										type="text"
																										name="publicName"
																										value={publicName}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div className="form-group col-lg-12">
																									<label>Nickname *</label>
																									<input
																										className="form-control"
																										type="text"
																										name="nickName"
																										value={nickName}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div className="form-group col-lg-12">
																									<label>Status *</label>
																									<select className="form-control">
																										<option>
																											Invisible to agents
																										</option>
																										<option>
																											Invisible to agents 1
																										</option>
																									</select>
																								</div>
																								<div className="form-group col-lg-12">
																									<label>Code *</label>
																									<input
																										className="form-control"
																										type="text"
																									/>
																								</div>
																								<div className="stts_sbmt_save col-lg-12">
																									<button className="cmn_btn">
																										Save
																									</button>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>

																	<div className="dlt_prvdr_sngl">
																		<div className="dlt_prvdr_ttl">
																			Danger zone
																		</div>
																		<p>
																			Delete this provider and all related data.
																		</p>
																		<a className="cmn_btn" href="#">
																			Delete provider
																		</a>
																	</div>
																</div>
															</div>
															<div className="col-lg-9">
																<div className="mrktng_info_con">
																	<div className="prvdrs_edt_cmn_hdng">
																		<strong>Marketing information</strong>
																		It may be shown to the student and to the
																		agents.
																	</div>
																	<div className="mrktng_info_frm">
																		<form>
																			<div className="row">
																				<div className="form-group col-lg-6">
																					<input
																						type="file"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-6">
																					<input
																						type="file"
																						className="form-control"
																					></input>
																				</div>

																				<div className="col-lg-12">
																					<div className="pvdr_edt_dvdr">
																						<span>Slogan</span>
																					</div>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Slogan</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Language</label>
																					<select className="form-control"></select>
																				</div>

																				<div className="col-lg-12">
																					<div className="pvdr_edt_dvdr">
																						<span>About us</span>
																					</div>
																				</div>
																				<div className="form-group col-lg-8">
																					<label>Content</label>
																					<textarea className="form-control"></textarea>
																				</div>
																				<div className="form-group col-lg-4">
																					<label>Language</label>
																					<select className="form-control"></select>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Website URL </label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Facebook Page URL</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Youtube Channel URL</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-6">
																					<label>Instagram User URL</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-4">
																					<label>Skype ID</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-4">
																					<label>Average age</label>
																					<input
																						type="number"
																						className="form-control"
																					></input>
																				</div>
																				<div className="form-group col-lg-4">
																					<label>Since</label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>
																				<div class="stts_sbmt_save col-lg-12">
																					<button class="cmn_btn">Save</button>
																				</div>
																			</div>
																		</form>
																	</div>
																</div>
																<div className="mrktng_info_con">
																	<div className="prvdrs_edt_cmn_hdng">
																		<strong>Images</strong>
																		Add pictures of your facilities and photos
																		the student may find interesting.
																	</div>
																	<div className="mrktng_info_frm">
																		<form>
																			<div className="row">
																				<div className="form-group col-lg-4">
																					<label>Image type</label>
																					<select className="form-control">
																						<option>
																							-- Nothing Selected --
																						</option>
																						<option>Class room</option>
																						<option>Common area</option>
																						<option>Internal activity</option>
																						<option>External activity</option>
																						<option>Accommodation</option>
																						<option>Other</option>
																					</select>
																				</div>

																				<div className="form-group col-lg-8">
																					<label>Comments </label>
																					<input
																						type="text"
																						className="form-control"
																					></input>
																				</div>

																				<div className="form-group col-lg-12">
																					<input
																						type="file"
																						className="form-control"
																					></input>
																				</div>
																			</div>
																		</form>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</section>
											</div>
										</TabPanel>
										<TabPanel>
											<div className="mrktng_tab_otr">
												<div className="edt_prvdrs_cmn_nbrs">
													<ul>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Price groups
																<strong>1</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Courses
																<strong>9</strong>
															</div>
														</li>
													</ul>
												</div>
											</div>
											<section className="prdcts_tab_section">
												<div className="container-fluid">
													<div className="row">
														<div className="col-lg-4">
															<div className="prdcts_tb_sdbr">
																<ul>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																	<li>
																		<a
																			href="#"
																			className="pvdr_prdct_updts_sngl"
																		>
																			<span className="pvdr_prdct_dot"></span>
																			<div className="pvdr_prdct_ttl">
																				SIT60316 Advanced Diploma in Hospitality
																				Management
																			</div>
																			<span className="pvdr_prdct_sub_txt">
																				<strong>1</strong> price groups | last
																				updated <strong>5 months ago</strong>
																			</span>
																		</a>
																	</li>
																</ul>
															</div>
														</div>
														<div className="col-lg-8">
															<div className="prdcts_tb_rt_con">
																<Tabs className="react-tabs first">
																	<TabList>
																		<Tab>DETAILS</Tab>
																		<Tab>FEES</Tab>
																		<Tab>ACCOUNTING & BOOKINGS</Tab>
																	</TabList>

																	<TabPanel>
																		<div className="pdrct_dtls_acrdn">
																			<div
																				className="accordion md-accordion"
																				id="accordionEx"
																				role="tablist"
																				aria-multiselectable="true"
																			>
																				<div className="card">
																					<div
																						className="card-header"
																						role="tab"
																					>
																						<a
																							data-toggle="collapse"
																							data-parent="#accordionEx"
																							href="#product_detail"
																							aria-expanded="true"
																							aria-controls="personal1"
																						>
																							<div className="headingdiv">
																								Product details{' '}
																								<i className="fas fa-angle-down rotate-icon"></i>
																							</div>
																						</a>
																					</div>
																					<div
																						id="product_detail"
																						className="collapse"
																						role="tabpanel"
																						aria-labelledby="personal"
																						data-parent="#accordionEx"
																					>
																						<div className="card-body">
																							<div className="stts_form">
																								<div className="row">
																									<div className="form-group col-lg-8">
																										<label>Public name *</label>
																										<input
																											className="form-control"
																											type="text"
																											value="Global College Australasia"
																										/>
																									</div>
																									<div className="form-group col-lg-4">
																										<label>Type *</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>Course</option>
																											<option>Insurance</option>
																											<option>
																												Accomodation
																											</option>
																											<option>
																												Government fee
																											</option>
																											<option>Service</option>
																											<option>
																												Air Ticket
																											</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-4">
																										<label>Locations </label>
																										<select className="form-control">
																											<option>None</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-4">
																										<label>Status *</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>
																												Visible to agents
																											</option>
																											<option>
																												Invisible to agents
																											</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-4">
																										<label>Code</label>
																										<input
																											className="form-control"
																											value="BSB51918"
																											type="text"
																										/>
																									</div>
																									<div className="stts_sbmt_save col-lg-12">
																										<button className="cmn_btn cmn_btn_dngr">
																											Delete
																										</button>
																										<button className="cmn_btn">
																											Save
																										</button>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div className="card">
																					<div
																						className="card-header"
																						role="tab"
																					>
																						<a
																							data-toggle="collapse"
																							data-parent="#accordionEx"
																							href="#personal1"
																							aria-expanded="true"
																							aria-controls="personal1"
																						>
																							<div className="headingdiv">
																								Course details{' '}
																								<i className="fas fa-angle-down rotate-icon"></i>
																							</div>
																						</a>
																					</div>
																					<div
																						id="personal1"
																						className="collapse"
																						role="tabpanel"
																						aria-labelledby="personal"
																						data-parent="#accordionEx"
																					>
																						<div className="card-body">
																							<div className="stts_form">
																								<div className="row">
																									<div className="form-group col-lg-4">
																										<label>
																											Duration in weeks{' '}
																										</label>
																										<input
																											className="form-control"
																											value="50"
																											type="text"
																										/>
																									</div>
																									<div className="stts_sbmt_save col-lg-12">
																										<button className="cmn_btn">
																											Save
																										</button>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</TabPanel>
																	<TabPanel>
																		<div className="prdct_fs_tb">
																			<div class="edt_prvdrs_cmn_nbrs">
																				<ul>
																					<li>
																						<div class="edt_prvdrs_li_sngl">
																							Locations<strong>1</strong>
																						</div>
																					</li>
																					<li>
																						<div class="edt_prvdrs_li_sngl actns_adfre">
																							Actions
																							<a href="#" className="cmn_btn">
																								<i class="fa fa-plus"></i>&nbsp;
																								Add fee
																							</a>
																						</div>
																					</li>
																				</ul>
																			</div>
																			<div className="edt_prvdr_fs">
																				<div
																					className="accordion md-accordion"
																					id="accordionEx121212"
																				>
																					<div className="card">
																						<div className="card-header">
																							<a
																								data-toggle="collapse"
																								data-parent="#accordionEx121212"
																								href="#product_detaila"
																							>
																								<div className="headingdiv">
																									Price for 2021{' '}
																									<i className="fas fa-angle-down rotate-icon"></i>
																								</div>
																							</a>
																						</div>
																						<div
																							id="product_detaila"
																							className="collapse"
																						>
																							<div className="card-body">
																								<div className="prdct_fee_ul">
																									<ul>
																										<li>
																											<i class="fas fa-check"></i>{' '}
																											All location added
																										</li>
																										<li>
																											<i class="fas fa-check"></i>{' '}
																											All added location has
																											tuition fee
																										</li>
																									</ul>
																								</div>
																								<div className="est_prth_cmps">
																									<strong>
																										East Perth Campus
																									</strong>
																									<ul>
																										<li>
																											<a
																												href="#"
																												className="est_prth_li_con"
																											>
																												Tuition fee
																												<strong>
																													A$5,150.00
																												</strong>
																											</a>
																										</li>
																										<li>
																											<a
																												href="#"
																												className="est_prth_li_con"
																											>
																												Material fee
																												<strong>
																													A$450.00
																												</strong>
																											</a>
																										</li>
																										<li>
																											<a
																												href="#"
																												className="est_prth_li_con"
																											>
																												Administration fee
																												<strong>
																													A$230.00
																												</strong>
																											</a>
																										</li>
																									</ul>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</TabPanel>
																	<TabPanel>
																		<div className="pdrct_dtls_acrdn">
																			<div
																				className="accordion md-accordion"
																				id="acntng_acrdn_prnt"
																			>
																				<div className="card">
																					<div className="card-header">
																						<a
																							data-toggle="collapse"
																							data-parent="#acntng_acrdn_prnt"
																							href="#accounting_acrdn"
																						>
																							<div className="headingdiv">
																								Accounting details{' '}
																								<i className="fas fa-angle-down rotate-icon"></i>
																							</div>
																						</a>
																					</div>
																					<div
																						id="accounting_acrdn"
																						className="collapse"
																						data-parent="#acntng_acrdn_prnt"
																					>
																						<div className="card-body">
																							<div className="stts_form">
																								<div className="row">
																									<div className="form-group col-lg-4">
																										<label>
																											Payments interval{' '}
																										</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>
																												One payment
																											</option>
																											<option>
																												Every 2 weeks
																											</option>
																											<option>
																												Every 3 weeks
																											</option>
																											<option>
																												Every 4 weeks
																											</option>
																											<option>
																												Every 6 weeks
																											</option>
																											<option>
																												Every 10 weeks
																											</option>
																											<option>
																												Every 11 weeks
																											</option>
																											<option>
																												Every 15 weeks
																											</option>
																											<option>
																												Every 16 weeks
																											</option>
																											<option>
																												Every 18 weeks
																											</option>
																											<option>
																												Every 20 weeks
																											</option>
																											<option>
																												Every 24 weeks
																											</option>
																											<option>
																												Every 1 months
																											</option>
																											<option>
																												Every 2 months
																											</option>
																											<option>
																												Every 3 months
																											</option>
																											<option>
																												Every 6 months
																											</option>
																											<option>
																												Every 12 months
																											</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-4">
																										<label>Deposit ($)</label>
																										<input
																											className="form-control"
																											value=""
																											type="text"
																										/>
																									</div>
																									<div className="stts_sbmt_save col-lg-12">
																										<button className="cmn_btn">
																											Save
																										</button>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>

																				<div className="card">
																					<div className="card-header">
																						<a
																							data-toggle="collapse"
																							data-parent="#acntng_acrdn_prnt"
																							href="#bkng_dtl_acrdn"
																						>
																							<div className="headingdiv">
																								Booking details{' '}
																								<i className="fas fa-angle-down rotate-icon"></i>
																							</div>
																						</a>
																					</div>
																					<div
																						id="bkng_dtl_acrdn"
																						className="collapse"
																						data-parent="#acntng_acrdn_prnt"
																					>
																						<div className="card-body">
																							<div className="stts_form">
																								<div className="row">
																									<div className="form-group col-lg-6">
																										<label>
																											Default comm. %{' '}
																										</label>
																										<input
																											className="form-control"
																											type="text"
																											value=""
																										/>
																									</div>
																									<div className="form-group col-lg-6">
																										<label>
																											Booking method *
																										</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>Email</option>
																											<option>
																												Email without document
																											</option>
																											<option>
																												EducationLink
																											</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-6">
																										<label>
																											Payment Method{' '}
																										</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>
																												End of the month invoice
																											</option>
																											<option>
																												Immediate invoice
																											</option>
																											<option>
																												EducationLink Pay
																											</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-6">
																										<label>
																											Commission claim method
																										</label>
																										<select className="form-control">
																											<option>
																												-- Nothing selected --
																											</option>
																											<option>Gross</option>
																											<option>Net</option>
																										</select>
																									</div>
																									<div className="form-group col-lg-12">
																										<label>
																											Booking URL (for use in
																											the online booking)
																										</label>
																										<input
																											className="form-control"
																											value=""
																											type="text"
																										/>
																									</div>
																									<div className="stts_sbmt_save col-lg-12">
																										<button className="cmn_btn">
																											Save
																										</button>
																									</div>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</TabPanel>
																</Tabs>
															</div>
														</div>
													</div>
												</div>
											</section>
										</TabPanel>
										<TabPanel>
											<div className="mrktng_tab_otr">
												<div className="edt_prvdrs_cmn_nbrs">
													<ul>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Groups
																<strong>1</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Fees
																<strong>19</strong>
															</div>
														</li>
														<li>
															<div className="edt_prvdrs_li_sngl">
																Products with no fees
																<strong>9</strong>
															</div>
														</li>
													</ul>
												</div>
												<section className="stts_mrktng_sec">
													<div className="container-fluid">
														<div className="row">
															<div className="col-lg-12">
																<div className="mrktng_info_con">
																	<div className="prvdrs_edt_cmn_hdng">
																		<strong>Fees applied to all groups</strong>
																		These prices were marked as valid for all
																		price groups.
																	</div>
																	<div className="fees_apld_table table-responsive">
																		<table>
																			<thead>
																				<tr>
																					<th>TYPE</th>
																					<th>AMOUNT</th>
																					<th>LOCATIONS</th>
																					<th>PRODUCTS</th>
																					<th>GROUPS</th>
																					<th>INFO</th>
																					<th>UPDATE</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>

																<div className="mrktng_info_con">
																	<div className="prvdrs_edt_cmn_hdng">
																		<strong>Price for 2021</strong>
																		This price group is valid from 31 Dec 2020
																		until 31 Dec 2021 (in 4 days).
																	</div>
																	<div className="fees_prc_actns">
																		<a href="#" className="cmn_btn">
																			<i
																				class="fa fa-pencil"
																				aria-hidden="true"
																			></i>{' '}
																			Edit
																		</a>
																		<a href="#" className="cmn_btn">
																			<i class="fas fa-pencil"></i> Remove
																		</a>
																	</div>
																	<div className="fees_apld_table table-responsive">
																		<table>
																			<thead>
																				<tr>
																					<th>TYPE</th>
																					<th>AMOUNT</th>
																					<th>LOCATIONS</th>
																					<th>PRODUCTS</th>
																					<th>GROUPS</th>
																					<th>INFO</th>
																					<th>UPDATE</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																					<td>1</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</section>
											</div>
										</TabPanel>
									</Tabs>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
