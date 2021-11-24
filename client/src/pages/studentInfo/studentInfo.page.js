import React, { useState, useEffect, useRef, useMemo } from 'react';
import './studentInfo.style.css';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'moment';
import { useParams } from 'react-router-dom';
import { fetchSingleStudent } from '../../components/student-overview/studentOverviewClickStudAction';
import { userLeadTask } from '../leads/putTaskInUserAction';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import countryList from 'react-select-country-list';
import Select from 'react-select';
import { editStudentInfo } from './editStudentInfoAction';
import { editCrmStudentInfo } from './editCrmStudentInfoAction';
import { fetchAllStudents } from '../allStudents/allStudentAction';
export const StudentInfo = () => {
	const { student } = useSelector((state) => state.getSingleStudent);
	const { students } = useSelector((state) => state.allStudent);
	const { _id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!student.length) {
			dispatch(fetchSingleStudent(_id));
		}
	}, [_id]);

	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');

	const [salesStatus, setSalesStatus] = useState('');
	const [onShorePhone, setOnShorePhone] = useState('');
	const [offShorePhone, setOffShorePhone] = useState('');
	const [birthday, setBirthday] = useState('');
	const [genders, setGenders] = useState('');
	const [nation, setNation] = useState('');
	const [email, setEmail] = useState('');
	const [inquiryRe, setInquiryRe] = useState('');
	const [counselling, setCounselling] = useState('');
	const [quotationSent, setQuotationSent] = useState('');
	const [application, setApplication] = useState('');
	const [waitingForLoo, setWaitingForLoo] = useState('');
	const [paymentPending, setPaymentPending] = useState('');
	const [waitingForCoe, setWaitingForCoe] = useState('');
	const [applyForVisa, setApplyForVisa] = useState('');
	const [waitingForVisaRequirement, setWaitingForVisaRequirement] =
		useState('');
	const [waitingForVisa, setWaitingForVisa] = useState('');
	const [visaGranted, setVisaGranted] = useState('');
	const [courseInProgress, setCourseInProgress] = useState('');
	const [referalSource, setReferalSource] = useState('');
	const [heatLevel, setHeatLevel] = useState('');
	const [lastContacted, setLastContacted] = useState('');
	const [lastVisited, setLastVisited] = useState('');
	const [note, setNote] = useState('');
	const [taxId, setTaxId] = useState('');
	const [locationStatus, setLocationStatus] = useState('');
	const [onShoreAddress, setOnShoreAddress] = useState('');
	const [offShoreUnitNumber, setOffShoreUnitNumber] = useState('');
	const [unitNumber, setUnitNumber] = useState('');
	const [streetNumber, setStreetNumber] = useState('');
	const [streetName, setStreetName] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');
	const [offShoreAddress, setOffShoreAddress] = useState('');
	const [offShoreStreetNumber, setOffShoreStreetNumber] = useState('');
	const [streetNa, setStreetNa] = useState('');
	const [offShoreCity, setOffShoreCity] = useState('');
	const [offShoreZipCode, setOffShoreZipCode] = useState('');
	const [usi, setUsi] = useState('');
	const [gpa, setGpa] = useState('');
	const [yearLevel, setYearLevel] = useState('');
	const [educationLevel, setEducationLevel] = useState('');
	const [instituteName, setInstituteName] = useState('');
	const [schoolCurriculum, setSchoolCurriculum] = useState('');
	const [schoolCurriculumDetails, setSchoolCurriculumDetails] = useState('');
	const [passNumber, setPassNumber] = useState('');
	const [passIssueDate, setPassIssueDate] = useState('');
	const [passExpiryDate, setPassExpiryDate] = useState('');
	const [passComments, setPassComments] = useState('');
	const [grantDate, setGrantDate] = useState('');
	const [visaExpiryDate, setVisaExpiryDate] = useState('');
	const [visaType, setVisaType] = useState('');
	const [visaComments, setVisaComments] = useState('');
	const [insuranceExpiryDate, setInsuranceExpiryDate] = useState('');
	const [insuranceStartDate, setInsuranceStartDate] = useState('');
	const [insuranceType, setInsuranceType] = useState('');
	const [insuranceNumber, setInsuranceNumber] = useState('');
	const [departureFrom, setDepartureFrom] = useState('');
	const [departureTo, setDepartureTo] = useState('');
	const [departureBooking, setDepartureBooking] = useState('');
	const [departureArrTime, setDepartureArrTime] = useState('');
	const [departureDate, setDepartureDate] = useState('');
	const [departureFlightNo, setDepartureFlightNo] = useState('');
	const [departureAirline, setDepartureAirline] = useState('');
	const [departureAirport, setDepartureAirport] = useState('');
	const [arrivalDate, setArrivalDate] = useState('');
	const [arrivalFlightNo, setArrivalFlightNo] = useState('');
	const [arrivalAirline, setArrivalAirline] = useState('');
	const [arrivalAirport, setArrivalAirport] = useState('');

	const changeHandler = (value) => {
		setNation(value);
	};

	const handleOnShorePhone = (value) => {
		setOnShorePhone(value);
	};

	const handleOffShorePhone = (value) => {
		setOffShorePhone(value);
	};

	const crmSubmit = async (e) => {
		e.preventDefault();
		const editStudent = {
			salesStatus,
			referalSource,
			locationStatus,
			heatLevel,
			taxId,
			lastContacted,
			lastVisited,
			note,
		};

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const visaSubmit = async (e) => {
		e.preventDefault();
		const editStudent = {
			grantDate,
			visaExpiryDate,
			visaType,
			visaComments,
		};

		console.log(editStudent);

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const insuranceSubmit = async (e) => {
		e.preventDefault();
		const editStudent = {
			insuranceType,
			insuranceExpiryDate,
			insuranceStartDate,
			insuranceNumber,
		};

		console.log(editStudent);

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const arrivalDeparture = async (e) => {
		e.preventDefault();
		const editStudent = {
			departureFrom,
			departureTo,
			departureBooking,
			departureArrTime,
			departureDate,
			departureFlightNo,
			departureAirline,
			departureAirport,
			arrivalDate,
			arrivalFlightNo,
			arrivalAirline,
			arrivalAirport,
		};

		console.log(editStudent);

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const educationDetails = async (e) => {
		e.preventDefault();
		const editStudent = {
			usi,
			gpa,
			yearLevel,
			educationLevel,
			instituteName,
			schoolCurriculum,
			schoolCurriculumDetails,
		};

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const passportSubmit = async (e) => {
		e.preventDefault();
		const editStudent = {
			passNumber,
			passIssueDate,
			passExpiryDate,
			passComments,
		};

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const personalInfo = async (e) => {
		e.preventDefault();
		const editStudent = {
			firstName,
			middleName,
			lastName,
			birthday,
			genders,
			email,
			onShorePhone,
			onShoreAddress,
			unitNumber,
			streetNumber,
			streetName,
			city,
			zipCode,
			offShorePhone,
			offShoreAddress,
			offShoreUnitNumber,
			offShoreStreetNumber,
			streetNa,
			offShoreCity,
			offShoreZipCode,
		};

		await dispatch(editCrmStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const editStudentSummary = async (e) => {
		e.preventDefault();
		const editStudent = {
			salesStatus,
			birthday,
			genders,
			nation,
			email,
			onShorePhone,
			offShorePhone,
		};

		await dispatch(editStudentInfo(editStudent, _id));

		await dispatch(fetchSingleStudent(_id));
	};

	const countryOptions = useMemo(() => countryList().getData(), []);

	useEffect(() => {
		if (student.salesStatus === 'Inquiry Received') {
			setInquiryRe(' step-active');
			setCounselling('');

			setQuotationSent('');
			setApplication('');
			setWaitingForLoo('');
			setPaymentPending('');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Counselling') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent('');
			setApplication('');
			setWaitingForLoo('');
			setPaymentPending('');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Quotation Sent') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication('');
			setWaitingForLoo('');
			setPaymentPending('');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Application') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo('');
			setPaymentPending('');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Waiting for Loo') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending('');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Payment Pending') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe('');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Waiting for CoE') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa('');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Apply for Visa') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa(' step-active');
			setWaitingForVisaRequirement('');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Waiting for Visa Requirement') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa(' step-active');
			setWaitingForVisaRequirement(' step-active');
			setWaitingForVisa('');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Waiting for Visa') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa(' step-active');
			setWaitingForVisaRequirement(' step-active');
			setWaitingForVisa(' step-active');
			setVisaGranted('');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Visa Granted') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa(' step-active');
			setWaitingForVisaRequirement(' step-active');
			setWaitingForVisa(' step-active');
			setVisaGranted(' step-active');
			setCourseInProgress('');
		}
		if (student.salesStatus === 'Course in Progress') {
			setCounselling(' step-active');
			setInquiryRe(' step-active');
			setQuotationSent(' step-active');
			setApplication(' step-active');
			setWaitingForLoo(' step-active');
			setPaymentPending(' step-active');
			setWaitingForCoe(' step-active');
			setApplyForVisa(' step-active');
			setWaitingForVisaRequirement(' step-active');
			setWaitingForVisa(' step-active');
			setVisaGranted(' step-active');
			setCourseInProgress(' step-active');
		}
	}, [student.salesStatus, editStudentInfo]);

	useEffect(() => {
		setSalesStatus(student.salesStatus);
		setOnShorePhone(student.onShorePhone);
		setBirthday(student.birthday);
		setGenders(student.genders);
		setNation(student.nation);
		setEmail(student.email);
		setOffShorePhone(student.offShorePhone);
		setReferalSource(student.referalSource);
		setNote(student.note);
		setLastContacted(student.lastContacted);
		setLastVisited(student.lastVisited);
		setTaxId(student.taxId);
		setFirstName(student.firstName);
		setLastName(student.lastName);
		setMiddleName(student.middleName);
		setOnShoreAddress(student.onShoreAddress);
		setOffShoreUnitNumber(student.offShoreUnitNumber);
		setUnitNumber(student.unitNumber);
		setStreetNumber(student.streetNumber);
		setStreetName(student.streetName);
		setCity(student.city);
		setZipCode(student.zipCode);
		setOffShoreAddress(student.offShoreAddress);
		setOffShoreStreetNumber(student.offShoreStreetNumber);
		setStreetNa(student.streetNa);
		setOffShoreCity(student.offShoreCity);
		setOffShoreZipCode(student.offShoreZipCode);
		setUsi(student.usi);
		setGpa(student.gpa);
		setYearLevel(student.yearLevel);
		setEducationLevel(student.educationLevel);
		setInstituteName(student.instituteName);
		setSchoolCurriculum(student.schoolCurriculum);
		setSchoolCurriculumDetails(student.schoolCurriculumDetails);
		setPassNumber(student.passNumber);
		setPassIssueDate(student.passIssueDate);
		setPassExpiryDate(student.passExpiryDate);
		setPassComments(student.passComments);
		setGrantDate(student.grantDate);
		setVisaExpiryDate(student.visaExpiryDate);
		setVisaType(student.visaType);
		setVisaComments(student.visaComments);
		setInsuranceStartDate(student.insuranceStartDate);
		setInsuranceExpiryDate(student.insuranceExpiryDate);
		setInsuranceType(student.insuranceType);
		setInsuranceNumber(student.insuranceNumber);
		setDepartureFrom(student.departureFrom);
		setDepartureTo(student.departureTo);
		setDepartureBooking(student.departureBooking);
		setDepartureArrTime(student.departureArrTime);
		setDepartureDate(student.departureDate);
		setDepartureFlightNo(student.departureFlightNo);
		setDepartureAirline(student.departureAirline);
		setDepartureAirport(student.departureAirport);
		setArrivalDate(student.arrivalDate);
		setArrivalFlightNo(student.arrivalFlightNo);
		setArrivalAirline(student.arrivalAirline);
		setArrivalAirport(student.arrivalAirport);
	}, [
		student.salesStatus,
		student.onShorePhone,
		student.birthday,
		student.genders,
		student.nation,
		student.email,
		student.offShorePhone,
		student.note,
		student.lastContacted,
		student.lastVisited,
		student.taxId,
		student.firstName,
		student.lastName,
		student.middleName,
		student.onShoreAddress,
		student.offShoreUnitNumber,
		student.unitNumber,
		student.streetNumber,
		student.streetName,
		student.city,
		student.zipCode,
		student.offShoreAddress,
		student.offShoreStreetNumber,
		student.streetNa,
		student.offShoreCity,
		student.offShoreZipCode,
		student.usi,
		student.gpa,
		student.yearLevel,
		student.schoolCurriculumDetails,
		student.educationLevel,
		student.instituteName,
		student.schoolCurriculum,
		student.passNumber,
		student.passIssueDate,
		student.passExpiryDate,
		student.passComments,
		student.grantDate,
		student.visaExpiryDate,
		student.visaType,
		student.visaComments,
		student.insuranceStartDate,
		student.insuranceExpiryDate,
		student.insuranceType,
		student.insuranceNumber,
		student.departureFrom,
		student.departureTo,
		student.departureBooking,
		student.departureArrTime,
		student.departureDate,
		student.departureFlightNo,
		student.departureAirline,
		student.departureAirport,
		student.arrivalDate,
		student.arrivalFlightNo,
		student.arrivalAirline,
		student.arrivalAirport,
	]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'salesStatus':
				setSalesStatus(value);
				break;

			case 'birthday':
				setBirthday(value);
				break;

			case 'genders':
				setGenders(value);
				break;

			case 'nation':
				setNation(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'genders':
				setGenders(value);
				break;

			case 'nation':
				setNation(value);
				break;

			case 'onShorePhone':
				setOnShorePhone(value);
				break;

			case 'offShorePhone':
				setOffShorePhone(value);
				break;

			case 'referalSource':
				setReferalSource(value);
				break;

			case 'heatLevel':
				setHeatLevel(value);
				break;

			case 'lastContacted':
				setLastContacted(value);
				break;

			case 'lastVisited':
				setLastVisited(value);
				break;

			case 'note':
				setNote(value);
				break;

			case 'taxId':
				setTaxId(value);
				break;

			case 'taxId':
				setTaxId(value);
				break;

			case 'locationStatus':
				setLocationStatus(value);
				break;

			case 'firstName':
				setFirstName(value);
				break;

			case 'lastName':
				setLastName(value);
				break;

			case 'lastName':
				setLastName(value);
				break;

			case 'middleName':
				setMiddleName(value);
				break;

			case 'onShoreAddress':
				setOnShoreAddress(value);
				break;

			case 'offShoreUnitNumber':
				setOffShoreUnitNumber(value);
				break;

			case 'unitNumber':
				setUnitNumber(value);
				break;

			case 'streetNumber':
				setStreetNumber(value);
				break;

			case 'streetName':
				setStreetName(value);
				break;

			case 'city':
				setCity(value);
				break;

			case 'zipCode':
				setZipCode(value);
				break;

			case 'offShoreAddress':
				setOffShoreAddress(value);
				break;

			case 'offShoreStreetNumber':
				setOffShoreStreetNumber(value);
				break;

			case 'streetNa':
				setStreetNa(value);
				break;

			case 'offShoreCity':
				setOffShoreCity(value);
				break;

			case 'offShoreCity':
				setOffShoreCity(value);
				break;

			case 'offShoreZipCode':
				setOffShoreZipCode(value);
				break;

			case 'usi':
				setUsi(value);
				break;

			case 'gpa':
				setGpa(value);
				break;

			case 'yearLevel':
				setYearLevel(value);
				break;

			case 'educationLevel':
				setEducationLevel(value);
				break;

			case 'instituteName':
				setInstituteName(value);
				break;

			case 'schoolCurriculum':
				setSchoolCurriculum(value);
				break;

			case 'schoolCurriculumDetails':
				setSchoolCurriculumDetails(value);
				break;

			case 'passNumber':
				setPassNumber(value);
				break;

			case 'passIssueDate':
				setPassIssueDate(value);
				break;

			case 'passExpiryDate':
				setPassExpiryDate(value);
				break;

			case 'passComments':
				setPassComments(value);
				break;

			case 'grantDate':
				setGrantDate(value);
				break;

			case 'visaExpiryDate':
				setVisaExpiryDate(value);
				break;

			case 'visaType':
				setVisaType(value);
				break;

			case 'visaComments':
				setVisaComments(value);
				break;

			case 'insuranceStartDate':
				setInsuranceStartDate(value);
				break;

			case 'insuranceExpiryDate':
				setInsuranceExpiryDate(value);
				break;

			case 'insuranceType':
				setInsuranceType(value);
				break;

			case 'insuranceNumber':
				setInsuranceNumber(value);
				break;

			case 'departureFrom':
				setDepartureFrom(value);
				break;

			case 'departureTo':
				setDepartureTo(value);
				break;

			case 'departureBooking':
				setDepartureBooking(value);
				break;

			case 'departureArrTime':
				setDepartureArrTime(value);
				break;

			case 'departureDate':
				setDepartureDate(value);
				break;

			case 'departureFlightNo':
				setDepartureFlightNo(value);
				break;

			case 'departureAirline':
				setDepartureAirline(value);
				break;

			case 'departureAirport':
				setDepartureAirport(value);
				break;

			case 'arrivalDate':
				setArrivalDate(value);
				break;

			case 'arrivalFlightNo':
				setArrivalFlightNo(value);
				break;

			case 'arrivalAirline':
				setArrivalAirline(value);
				break;

			case 'arrivalAirport':
				setArrivalAirport(value);
				break;

			default:
				break;
		}
	};

	return (
		<div class="content-wrapper ">
			<div class="maincontent-rightside all-student">
				<section class="student-all-detail">
					<div class="container-fluid">
						<div class="row">
							<div class="col-12">
								<div class="user-detail">
									<div class="row">
										<div class="col-12">
											<h2>{student.firstName}</h2>
											<div class="flag-icon"></div>
											<div class="user-span">
												<span class="u-email">
													<a href="#">{student.email}</a>
												</span>
												<span class="u-phone">
													<a href="#">
														{student.locationStatus == 'Onshore'
															? student.onShorePhone
															: student.offShorePhone}
													</a>
												</span>
												<span class="u-shore">{student.locationStatus}</span>
											</div>
										</div>
									</div>
								</div>

								<div class="user-section">
									<ul
										id="myTabs"
										class="nav nav-pills nav-justified"
										role="tablist"
										data-tabs="tabs"
									>
										<li class="active">
											<a href="#Summary" data-toggle="tab">
												Summary
											</a>
										</li>
										<li>
											<a href="#Information" data-toggle="tab">
												Information
											</a>
										</li>
										<li>
											<a href="#Documents" data-toggle="tab">
												Documents
											</a>
										</li>
									</ul>
									<div class="tab-content">
										<div
											role="tabpanel"
											class="tab-pane fade in active"
											id="Summary"
										>
											<div class="summary-block">
												<div class="students-stepper">
													<div class="steps-header">
														<span class="heading">Pipeline</span>
														<span class="sub-head">Inquiry received</span>
													</div>

													<div class="stepper-step-block">
														<div class={'stepper-step' + inquiryRe}>
															<div class="stepper-circle ">
																<span>1</span>
															</div>
															<div class="stepper-title">
																<span>Inquiry received</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + counselling}>
															<div class="stepper-circle">
																<span>2</span>
															</div>
															<div class="stepper-title">
																<span>Counselling</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + quotationSent}>
															<div class="stepper-circle">
																<span>3</span>
															</div>
															<div class="stepper-title">
																<span>Quotation sent</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + application}>
															<div class="stepper-circle">
																<span>4</span>
															</div>
															<div class="stepper-title">
																<span>Application</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + waitingForLoo}>
															<div class="stepper-circle">
																<span>5</span>
															</div>
															<div class="stepper-title">
																<span>Waiting for Loo</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + paymentPending}>
															<div class="stepper-circle">
																<span>6</span>
															</div>
															<div class="stepper-title">
																<span>Payment pending</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + waitingForCoe}>
															<div class="stepper-circle">
																<span>7</span>
															</div>
															<div class="stepper-title">
																<span>Waiting for COE</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + applyForVisa}>
															<div class="stepper-circle">
																<span>8</span>
															</div>
															<div class="stepper-title">
																<span>Apply for visa</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div
															class={'stepper-step' + waitingForVisaRequirement}
														>
															<div class="stepper-circle">
																<span>9</span>
															</div>
															<div class="stepper-title">
																<span>Waiting for visa requirement</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + waitingForVisa}>
															<div class="stepper-circle">
																<span>10</span>
															</div>
															<div class="stepper-title">
																<span>Waiting for visa</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + visaGranted}>
															<div class="stepper-circle">
																<span>11</span>
															</div>
															<div class="stepper-title ">
																<span>Visa granted</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
														<div class={'stepper-step' + courseInProgress}>
															<div class="stepper-circle">
																<span>12</span>
															</div>
															<div class="stepper-title">
																<span>Course in progress</span>
															</div>
															<div class="bar-left"></div>
															<div class="bar-right"></div>
														</div>
													</div>
												</div>

												<div class="students-stepper visa">
													<div class="balance">
														<div class="visa">Visa expires on</div>
														<div class="balance-text">
															<span class="text-dark">
																{student.visaExpiryDate
																	? Moment(student.visaExpiryDate).format('DD')
																	: '-'}{' '}
																{student.visaExpiryDate
																	? Moment(student.visaExpiryDate).format(
																			'MMMM'
																	  )
																	: ''}{' '}
																{student.visaExpiryDate
																	? Moment(student.visaExpiryDate).format(
																			'YYYY'
																	  )
																	: ''}
															</span>
														</div>
														<div class="visa-nu">500</div>
														<div class="balance-link">
															<a href="#" class="btn btn-link p-0">
																<span class="">Update visa</span>
															</a>
														</div>
													</div>

													<div class="balance">
														<div class="visa">Next flight</div>
														<div class="balance-text">
															<span class="text-dark">Sep 1, 2021</span>
														</div>
														<div class="visa-nu">on Sep 9, 2020to Perth</div>
														<div class="balance-link">
															<a href="#" class="btn btn-link p-0">
																<span class="">Add Flight</span>
															</a>
														</div>
													</div>

													<div class="balance">
														<div class="visa">Heat level</div>
														<div class="balance-text">
															<span class="text-dark">{student.heatLevel}</span>
														</div>
														<div class="visa-nu">-</div>
														<div class="balance-link">
															<a href="#" class="btn btn-link p-0">
																<span class="">Update heat level</span>
															</a>
														</div>
													</div>

													<div class="balance">
														<div class="visa">Next task</div>
														<div class="balance-text">
															<span class="text-dark">-</span>
														</div>
														<div class="visa-nu">Last contacted a year ago</div>
														<div class="balance-link">
															<a href="#" class="btn btn-link p-0">
																<span class="">Add Task</span>
															</a>
														</div>
													</div>

													<div class="balance">
														<div class="visa">Current course</div>
														<div class="balance-text">
															<span class="text-dark">
																Global College Australasia
															</span>
														</div>
														<div class="visa-nu">27/09/2021 - 28/03/2022</div>
														<div class="balance-link">
															<a href="#" class="btn btn-link p-0">
																<span class="">View Sales</span>
															</a>
														</div>
													</div>
												</div>

												<div class="data-block">
													<div class="row">
														<div class="col-lg-4 col-12">
															<div class="students-stepper">
																<div class="accordion" id="accordionUser">
																	<div class="card">
																		<div class="card-head" id="headingOne">
																			<h2
																				class="mb-0"
																				data-toggle="collapse"
																				data-target="#collapseOne"
																				aria-expanded="true"
																				aria-controls="collapseOne"
																			>
																				About {student.firstName}{' '}
																				{student.lastName}
																			</h2>
																		</div>

																		<div
																			id="collapseOne"
																			class="collapse show"
																			aria-labelledby="headingOne"
																			data-parent="#accordionUser"
																		>
																			<div class="card-body">
																				<div class="row">
																					<div class="form-group col-12">
																						<label for="name">
																							Sale status <span>*</span>
																						</label>
																						<select
																							class="form-control"
																							name="salesStatus"
																							value={salesStatus}
																							onChange={handleOnChange}
																						>
																							<option>Inquiry Received</option>
																							<option>Counselling</option>
																							<option>Quotation Sent</option>
																							<option>Application</option>
																							<option>Waiting for Loo</option>
																							<option>Payment Pending</option>
																							<option>Waiting for CoE</option>
																							<option>Apply for Visa</option>
																							<option>
																								Waiting for Visa Requirement
																							</option>
																							<option>Waiting for Visa</option>
																							<option>Visa Granted</option>
																							<option>
																								Course in Progress
																							</option>
																						</select>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Birthday <span>*</span>
																						</label>
																						<input
																							type="date"
																							class="form-control"
																							name="birthday"
																							value={birthday}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Gender <span>*</span>
																						</label>
																						<select
																							class="form-control"
																							name="genders"
																							value={genders}
																							onChange={handleOnChange}
																						>
																							<option>Male</option>
																							<option>Female</option>
																							<option>Other</option>
																						</select>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Nationality<span>*</span>
																						</label>
																						<Select
																							options={countryOptions}
																							value={nation}
																							onChange={changeHandler}
																						/>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Email <span>*</span>
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder="your email"
																							name="email"
																							value={email}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Onshore phone <span>*</span>
																						</label>
																						<PhoneInput
																							placeholder="Enter phone number"
																							value={onShorePhone}
																							onChange={handleOnShorePhone}
																						/>
																					</div>

																					<div class="form-group col-12">
																						<label for="name">
																							Offshore phone <span>*</span>
																						</label>
																						<PhoneInput
																							placeholder="Enter phone number"
																							value={offShorePhone}
																							onChange={handleOffShorePhone}
																						/>
																					</div>

																					<div class="footersingbtn">
																						<input
																							type="submit"
																							name="submit"
																							class="btn getin-btn"
																							value="Save"
																							onClick={editStudentSummary}
																						/>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-lg-8 col-12">
															<div class="students-stepper">
																<div class="stu-notes">
																	<h4 class="stu-head">Updates</h4>
																	<div class="row">
																		<div class="form-group col-12">
																			<label for="name">
																				Create a new note <span>*</span>
																			</label>
																			<textarea
																				class="form-control"
																				rows="4"
																			></textarea>
																		</div>
																	</div>

																	<div class="activity-list">
																		<p class="date">Aug 9, 2021</p>
																		<div class="act-records">
																			<div class="record">
																				<div class="ta-timestamp">
																					<span class="m-r-5">14:46PM</span>
																				</div>
																				<div class="ta-activity">
																					<strong>
																						Artur Szulakowski&nbsp;
																					</strong>
																					<span>updated:&nbsp;</span>
																					<span>
																						STUDENT_PIPELINE_STATUS_UPDATED
																					</span>
																				</div>
																			</div>

																			<div class="record">
																				<div class="ta-timestamp">
																					<span class="m-r-5">14:36PM</span>
																				</div>
																				<div class="ta-activity">
																					<strong>
																						Artur Szulakowski&nbsp;
																					</strong>
																					<span>updated:&nbsp;</span>
																					<span>
																						STUDENT_PIPELINE_STATUS_UPDATED
																					</span>
																				</div>
																			</div>

																			<div class="record">
																				<div class="ta-timestamp">
																					<span class="m-r-5">14:30PM</span>
																				</div>
																				<div class="ta-activity">
																					<strong>
																						Artur Szulakowski&nbsp;
																					</strong>
																					<span>updated:&nbsp;</span>
																					<span>
																						STUDENT_PIPELINE_STATUS_UPDATED
																					</span>
																				</div>
																			</div>

																			<div class="record">
																				<div class="ta-timestamp">
																					<span class="m-r-5">14:25PM</span>
																				</div>
																				<div class="ta-activity">
																					<strong>
																						Artur Szulakowski&nbsp;
																					</strong>
																					<span>updated:&nbsp;</span>
																					<span>
																						STUDENT_PIPELINE_STATUS_UPDATED
																					</span>
																				</div>
																			</div>
																		</div>
																	</div>

																	<div class="record">
																		<div class="ta-timestamp">
																			<span class="m-r-5">14:25PM</span>
																		</div>
																		<div class="ta-activity">
																			<strong>Artur Szulakowski&nbsp;</strong>
																			<span>updated:&nbsp;</span>
																			<span>
																				STUDENT_PIPELINE_STATUS_UPDATED
																			</span>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>

										<div role="tabpanel" class="tab-pane fade" id="Information">
											<div class="data-block">
												<div class="row">
													<div class="col-lg-4 col-12">
														<div class="students-stepper">
															<div class="accordion" id="accordionleft">
																<div class="card">
																	<div class="card-head" id="headingOne">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseOne"
																			aria-expanded="true"
																			aria-controls="collapseOne"
																		>
																			CRM
																		</h2>
																	</div>

																	<div
																		id="collapseOne"
																		class="collapse show"
																		aria-labelledby="headingOne"
																		data-parent="#accordionleft"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-12">
																					<label for="name">
																						Sale status <span>*</span>
																					</label>
																					<select
																						class="form-control"
																						name="salesStatus"
																						value={salesStatus}
																						onChange={handleOnChange}
																					>
																						<option>Inquiry Received</option>
																						<option>Counselling</option>
																						<option>Quotation Sent</option>
																						<option>Application</option>
																						<option>Waiting for Loo</option>
																						<option>Payment Pending</option>
																						<option>Waiting for CoE</option>
																						<option>Apply for Visa</option>
																						<option>
																							Waiting for Visa Requirement
																						</option>
																						<option>Waiting for Visa</option>
																						<option>Visa Granted</option>
																						<option>Course in Progress</option>
																					</select>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">
																						Referral Details
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="Zbigniew Malkowski"
																					/>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">
																						Referral Source <span>*</span>
																					</label>
																					<select
																						class="form-control"
																						name="referalSource"
																						value={referalSource}
																						onChange={handleOnChange}
																					>
																						<option>unknown</option>
																						<option>Youtube</option>
																						<option>Instagram</option>
																						<option>Facebook</option>
																						<option>Google</option>
																					</select>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">
																						Status<span>*</span>
																					</label>
																					<select
																						class="form-control"
																						name="locationStatus"
																						value={locationStatus}
																						onChange={handleOnChange}
																					>
																						<option>Onshore</option>
																						<option>OffShore</option>
																						<option>Other</option>
																					</select>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">
																						Heat Level<span>*</span>
																					</label>
																					<select
																						class="form-control"
																						name="heatLevel"
																						value={heatLevel}
																						onChange={handleOnChange}
																					>
																						<option>Very Hot</option>
																						<option>Hot</option>
																						<option>Warm</option>
																						<option>Cold</option>
																					</select>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">Tax ID</label>
																					<input
																						type="text"
																						class="form-control"
																						name="taxId"
																						value={taxId}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">
																						Next Follow Up
																					</label>
																					<input
																						type="text"
																						class="form-control"
																					/>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">Last Visited</label>
																					<input
																						type="date"
																						class="form-control"
																						name="lastVisited"
																						value={lastVisited}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-md-6 col-12">
																					<label for="name">
																						Last Contacted
																					</label>
																					<input
																						type="date"
																						class="form-control"
																						name="lastContacted"
																						value={lastContacted}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">Comments</label>
																					<textarea
																						class="form-control"
																						placeholder="Insert Text Here"
																						name="note"
																						value={note}
																						onChange={handleOnChange}
																					></textarea>
																				</div>

																				<hr />
																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn"
																						value="Save"
																						onClick={crmSubmit}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>

													<div class="col-lg-8 col-12">
														<div class="students-stepper">
															<div class="accordion" id="accordionright">
																<div class="card">
																	<div class="card-head" id="headingTwo">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseTwo"
																			aria-expanded="true"
																			aria-controls="collapseTwo"
																		>
																			Personal Information
																		</h2>
																	</div>

																	<div
																		id="collapseTwo"
																		class="collapse show"
																		aria-labelledby="headingTwo"
																		data-parent="#accordionright"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						First Name <span>*</span>
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="Adam"
																						name="firstName"
																						value={firstName}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">Middle Name</label>
																					<input
																						type="text"
																						class="form-control"
																						name="middleName"
																						value={middleName}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						Last Name <span>*</span>
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="Malkowski"
																						name="lastName"
																						value={lastName}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						Name in their native language
																					</label>
																					<input
																						type="text"
																						class="form-control"
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">Birthday</label>
																					<input
																						type="date"
																						class="form-control"
																						name="birthday"
																						value={birthday}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">Gender</label>
																					<select
																						class="form-control"
																						name="genders"
																						value={genders}
																						onChange={handleOnChange}
																					>
																						<option>Male</option>
																						<option>Female</option>
																						<option>Other</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">Nationality</label>
																					<select class="form-control">
																						<option>Nothing Selected</option>
																						<option>Poland</option>
																						<option>Peru</option>
																						<option>Norway</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						Email Address
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="adams258@o2.pl"
																						name="email"
																						value={email}
																						onChange={handleOnChange}
																					/>
																				</div>
																			</div>

																			<hr />

																			<div class="onshore">
																				<h6>Onshore Information</h6>

																				<div class="row">
																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Country</label>
																						<select class="form-control">
																							<option>Nothing Selected</option>
																							<option>Poland</option>
																							<option>Peru</option>
																							<option>Canada</option>
																							<option>Denmark</option>
																							<option>Iran</option>
																							<option>Iraq</option>
																						</select>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">
																							Phone Number
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder="XXXXXXXXX"
																							name="onShorePhone"
																							value={onShorePhone}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Address</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="onShoreAddress"
																							value={onShoreAddress}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-2 col-12">
																						<label for="name">Unit</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="unitNumber"
																							value={unitNumber}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-2 col-12">
																						<label for="name" class="street">
																							Street number
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="streetNumber"
																							value={streetNumber}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">
																							Street Name
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="streetName"
																							value={streetName}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">City</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="city"
																							value={city}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Zipcode</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="zipCode"
																							value={zipCode}
																							onChange={handleOnChange}
																						/>
																					</div>
																				</div>
																			</div>

																			<div class="onshore">
																				<h6>Offshore Information</h6>

																				<div class="row">
																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Country</label>
																						<select class="form-control">
																							<option>Nothing Selected</option>
																							<option>Poland</option>
																							<option>Peru</option>
																							<option>Canada</option>
																							<option>Denmark</option>
																							<option>Iran</option>
																							<option>Iraq</option>
																						</select>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">
																							Phone Number
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder="XXXXXXXXX"
																							name="offShorePhone"
																							value={offShorePhone}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Address</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="offShoreAddress"
																							value={offShoreAddress}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-2 col-12">
																						<label for="name">Unit</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="offShoreUnitNumber"
																							value={offShoreUnitNumber}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-2 col-12">
																						<label for="name" class="street">
																							Street number
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="offShoreStreetNumber"
																							value={offShoreStreetNumber}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">
																							Street Name
																						</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="streetNa"
																							value={streetNa}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">City</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="offShoreCity"
																							value={offShoreCity}
																							onChange={handleOnChange}
																						/>
																					</div>

																					<div class="form-group col-lg-4 col-12">
																						<label for="name">Zipcode</label>
																						<input
																							type="text"
																							class="form-control"
																							placeholder=""
																							name="offShoreZipCode"
																							value={offShoreZipCode}
																							onChange={handleOnChange}
																						/>
																					</div>
																				</div>
																			</div>

																			<hr />
																			<div class="footersingbtn">
																				<input
																					type="submit"
																					name="submit"
																					class="btn getin-btn"
																					value="Save"
																					onClick={personalInfo}
																				/>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionTwo">
																<div class="card">
																	<div class="card-head" id="headingThree">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseThree"
																			aria-expanded="true"
																			aria-controls="collapseThree"
																		>
																			Education Details
																		</h2>
																	</div>

																	<div
																		id="collapseThree"
																		class="collapse show"
																		aria-labelledby="headingThree"
																		data-parent="#accordionTwo"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-5 col-12">
																					<label for="name">
																						USI (Unique Student Number){' '}
																						<span>*</span>
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="usi"
																						value={usi}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-2 col-12">
																					<label for="name">GPA</label>
																					<input
																						type="text"
																						class="form-control"
																						name="gpa"
																						value={gpa}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-2 col-12">
																					<label for="name">Year Level</label>
																					<input
																						type="text"
																						class="form-control"
																						name="yearLevel"
																						value={yearLevel}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Education Level
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="educationLevel"
																						value={educationLevel}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Institution Name
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="instituteName"
																						value={instituteName}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						School curriculum
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="schoolCurriculum"
																						value={schoolCurriculum}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-5 col-12">
																					<label for="name">
																						School curriculum details
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="schoolCurriculumDetails"
																						value={schoolCurriculumDetails}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn"
																						value="Save"
																						onClick={educationDetails}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionThree">
																<div class="card">
																	<div class="card-head" id="headingFour">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseFour"
																			aria-expanded="true"
																			aria-controls="collapseFour"
																		>
																			Passport
																		</h2>
																	</div>

																	<div
																		id="collapseFour"
																		class="collapse show"
																		aria-labelledby="headingFour"
																		data-parent="#accordionThree"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Number <span>*</span>
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="passNumber"
																						value={passNumber}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Nationality</label>
																					<select class="form-control">
																						<option>Nothing Selected</option>
																						<option>Poland</option>
																						<option>Peru</option>
																						<option>Canada</option>
																						<option>Denmark</option>
																						<option>Iran</option>
																						<option>Iraq</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Issue Date</label>
																					<input
																						type="date"
																						class="form-control"
																						name="passIssueDate"
																						value={passIssueDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Expiry Date</label>
																					<input
																						type="date"
																						class="form-control"
																						name="passExpiryDate"
																						value={passExpiryDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">Comment</label>
																					<input
																						type="text"
																						class="form-control"
																						name="passComments"
																						value={passComments}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn"
																						value="Save"
																						onClick={passportSubmit}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionFour">
																<div class="card">
																	<div class="card-head" id="headingFive">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseFive"
																			aria-expanded="true"
																			aria-controls="collapseFive"
																		>
																			Visa
																		</h2>
																	</div>

																	<div
																		id="collapseFive"
																		class="collapse show"
																		aria-labelledby="headingFive"
																		data-parent="#accordionFour"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Issue Date</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="grantDate"
																						value={grantDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Expiry Date <span>*</span>
																					</label>
																					<select
																						class="form-control"
																						name="visaExpiryDate"
																						value={visaExpiryDate}
																						onChange={handleOnChange}
																					>
																						<option>Nothing Selected</option>
																						<option>Poland</option>
																						<option>Peru</option>
																						<option>Canada</option>
																						<option>Denmark</option>
																						<option>Iran</option>
																						<option>Iraq</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Type</label>
																					<input
																						type="text"
																						class="form-control"
																						name="visaType"
																						value={visaType}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">Comment</label>
																					<input
																						type="text"
																						class="form-control"
																						name="visaComments"
																						value={visaComments}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn"
																						value="Save"
																						onClick={visaSubmit}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionFive">
																<div class="card">
																	<div class="card-head" id="headingSix">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseSix"
																			aria-expanded="true"
																			aria-controls="collapseFive"
																		>
																			Insurance
																		</h2>
																	</div>

																	<div
																		id="collapseSix"
																		class="collapse show"
																		aria-labelledby="headingSix"
																		data-parent="#accordionFive"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Start Date</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="insuranceStartDate"
																						value={insuranceStartDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">End Date</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="insuranceExpiryDate"
																						value={insuranceExpiryDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Type</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="insuranceType"
																						value={insuranceType}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Number</label>
																					<input
																						type="text"
																						class="form-control"
																						name="insuranceNumber"
																						value={insuranceNumber}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name"></label>
																					<input
																						type="text"
																						class="form-control"
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn"
																						value="Save"
																						onClick={insuranceSubmit}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionSix">
																<div class="card">
																	<div class="card-head" id="headingSeven">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseSeven"
																			aria-expanded="true"
																			aria-controls="collapseSeven"
																		>
																			Arrivals and Departures
																		</h2>
																	</div>

																	<div
																		id="collapseSeven"
																		class="collapse show"
																		aria-labelledby="headingSeven"
																		data-parent="#accordionSix"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">From</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																						value={departureFrom}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">To</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder="Perth"
																						name="departureTo"
																						value={departureTo}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Booking Ref.</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="SALE8"
																						name="departureBooking"
																						value={departureBooking}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Arr. Time</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureArrTime"
																						value={departureArrTime}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Departure Date
																					</label>
																					<input
																						type="date"
																						class="form-control"
																						name="departureDate"
																						value={departureDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Dep. Flight No.
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFlightNo"
																						value={departureFlightNo}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Dep. Airline</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureAirline"
																						value={departureAirline}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Dep. Airport</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureAirport"
																						value={departureAirport}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Arrival Date</label>
																					<input
																						type="date"
																						class="form-control"
																						name="arrivalDate"
																						value={arrivalDate}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Arr. Flight No.
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="arrivalFlightNo"
																						value={arrivalFlightNo}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Arr. Airline</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="arrivalAirline"
																						value={arrivalAirline}
																						onChange={handleOnChange}
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Arr. Airport</label>
																					<input
																						type="text"
																						class="form-control"
																						name="arrivalAirport"
																						value={arrivalAirport}
																						onChange={handleOnChange}
																					/>
																				</div>
																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn save"
																						value="Save"
																						onClick={arrivalDeparture}
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="students-stepper">
															<div class="accordion" id="accordionEight">
																<div class="card">
																	<div class="card-head" id="headingEight">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseEight"
																			aria-expanded="true"
																			aria-controls="collapseEight"
																		>
																			Dependants and Family
																		</h2>
																	</div>

																	<div
																		id="collapseEight"
																		class="collapse show"
																		aria-labelledby="headingSeven"
																		data-parent="#accordionEight"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Full Name</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Relationship</label>
																					<select
																						class="form-control"
																						name="genders"
																					>
																						<option>Parents</option>
																						<option>Siblings</option>
																						<option>Partner</option>
																						<option>Daughter/Son</option>
																						<option>Custodian</option>
																						<option>Other</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Email</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="SALE8"
																						name="departureBooking"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Phone Number</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureArrTime"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Occupation</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureDate"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Occupation Details
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFlightNo"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Birthday Date
																					</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="departureAirline"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Gender</label>
																					<select
																						class="form-control"
																						name="genders"
																					>
																						<option>Male</option>
																						<option>Female</option>
																						<option>Other</option>
																					</select>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Passport Number
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="arrivalDate"
																					/>
																				</div>

																				<div class="form-group col-12">
																					<label for="name">Comment</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn save"
																						value="Save"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionNine">
																<div class="card">
																	<div class="card-head" id="headingNine">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseNine"
																			aria-expanded="true"
																			aria-controls="collapseNine"
																		>
																			Immigration
																		</h2>
																	</div>

																	<div
																		id="collapseNine"
																		class="collapse show"
																		aria-labelledby="headingNine"
																		data-parent="#accordionNine"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Start Date</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Username</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Password</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="SALE8"
																						name="departureBooking"
																					/>
																				</div>

																				<div class="form-group col-lg-6 col-12">
																					<label for="name">Comments</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureArrTime"
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn save"
																						value="Save"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionTen">
																<div class="card">
																	<div class="card-head" id="headingTen">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseTen"
																			aria-expanded="true"
																			aria-controls="collapseTen"
																		>
																			Bank Account
																		</h2>
																	</div>

																	<div
																		id="collapseTen"
																		class="collapse show"
																		aria-labelledby="headingTen"
																		data-parent="#accordionTen"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-4 col-12">
																					<label for="name">Account Name</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						Account No. 1
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFrom"
																					/>
																				</div>

																				<div class="form-group col-lg-4 col-12">
																					<label for="name">
																						Routing number (BSB, ...)
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder="SALE8"
																						name="departureBooking"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">Bank Address</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureArrTime"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">
																						Account No. 2
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="departureDate"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">IBAN</label>
																					<input
																						type="text"
																						class="form-control"
																						placeholder=""
																						name="departureFlightNo"
																					/>
																				</div>

																				<div class="form-group col-lg-3 col-12">
																					<label for="name">SWIFT</label>
																					<input
																						type="date"
																						class="form-control"
																						placeholder=""
																						name="departureAirline"
																					/>
																				</div>

																				<div class="form-group col-lg-12 col-12">
																					<label for="name">
																						Account Purpose
																					</label>
																					<input
																						type="text"
																						class="form-control"
																						name="arrivalDate"
																					/>
																				</div>

																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn save"
																						value="Save"
																					/>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div class="students-stepper">
															<div class="accordion" id="accordionEleven">
																<div class="card">
																	<div class="card-head" id="headingEleven">
																		<h2
																			class="mb-0"
																			data-toggle="collapse"
																			data-target="#collapseEleven	"
																			aria-expanded="true"
																			aria-controls="collapseEleven"
																		>
																			GDPR Settings
																		</h2>
																	</div>

																	<div
																		id="collapseEleven"
																		class="collapse show"
																		aria-labelledby="headingEleven"
																		data-parent="#accordionEleven"
																	>
																		<div class="card-body">
																			<div class="row">
																				<div class="form-group col-lg-6 col-12">
																					<label for="name">Legal Basis</label>
																					<select
																						class="form-control"
																						name="genders"
																					>
																						<option>
																							--Nothing selected--
																						</option>
																						<option>
																							legitimate-interest-lead
																						</option>
																						<option>
																							legitimate-interest-customer
																						</option>
																						<option>
																							performance-contract
																						</option>
																						<option>
																							freely-given-consent-to-contact
																						</option>
																						<option>not-applicable</option>
																					</select>
																				</div>
																				<div class="form-group col-lg-6 col-12">
																					<label for="name">
																						Communication Preferences
																					</label>
																					<select
																						class="form-control"
																						name="genders"
																					>
																						<option>
																							--Nothing selected--
																						</option>
																						<option>Marketing</option>
																						<option>
																							Performance-contract
																						</option>
																						<option>Events</option>
																						<option>Blog</option>
																						<option>not-applicable</option>
																						<option>nothing</option>
																					</select>
																				</div>
																				<hr />

																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="submit"
																						class="btn getin-btn save"
																						value="Save"
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
											</div>
										</div>

										<div role="tabpanel" class="tab-pane fade" id="Documents">
											<div class="data-block">
												<div class="row">
													<div class="col-12">
														<div class="students-stepper">
															<form>
																<div class="row">
																	<div class="col-lg-4 col-6 form-group">
																		<label for="name">Document Type</label>
																		<select
																			id="field-type"
																			class="form-control"
																		>
																			<optgroup label="Education">
																				<option value="academic-transcript">
																					Academic transcript
																				</option>
																				<option value="acceptance-letter">
																					Acceptance letter
																				</option>
																				<option value="application-form">
																					Application form
																				</option>
																				<option value="english-proficiency">
																					English proficiency
																				</option>
																				<option value="loo">
																					Letter of offer
																				</option>
																				<option value="diploma">
																					Previous diploma
																				</option>
																				<option value="statement-purpose">
																					Statement of purpose
																				</option>
																			</optgroup>

																			<optgroup label="Bank">
																				<option value="bank-statement">
																					Bank statement
																				</option>
																				<option value="cash-passport">
																					Cash passport
																				</option>
																			</optgroup>

																			<optgroup label="Government">
																				<option value="form-956">
																					STUDENTS.DOCUMENT_TYPE.AUSTRALIAN_FORM
																				</option>
																				<option value="bridging-visa">
																					Bridging visa
																				</option>
																				<option value="coe">CoE</option>
																				<option value="driver-license">
																					Driver's license
																				</option>
																				<option value="gte">
																					Genuine temporary entrant letter
																				</option>
																				<option value="passports">
																					Passport
																				</option>
																				<option value="visa-grant">
																					Visa grant
																				</option>
																				<option value="visa-questionnaire">
																					Visa Questionnaire
																				</option>
																			</optgroup>

																			<optgroup label="Accounting">
																				<option value="cancellation-form">
																					Cancellation/Suspension Form
																				</option>
																				<option value="provider-payment-receipt">
																					Ed. provider payment receipt
																				</option>
																				<option value="invoice">Invoice</option>
																				<option value="payment-plan">
																					Payment/Installment plan
																				</option>
																				<option value="proof-of-payment">
																					Proof of payment
																				</option>
																				<option value="refund-form">
																					Refund Form
																				</option>
																			</optgroup>

																			<optgroup label="Company">
																				<option value="agency-contract">
																					Company contract
																				</option>
																			</optgroup>

																			<optgroup label="Insurance">
																				<option value="insurance-certificate">
																					Insurance certificate
																				</option>
																			</optgroup>

																			<optgroup label="Professional">
																				<option value="curriculum">
																					Curriculum
																				</option>
																			</optgroup>

																			<optgroup label="Others">
																				<option value="student-uploaded">
																					Document uploaded by student
																				</option>
																				<option value="document-translation">
																					Document translation
																				</option>
																				<option value="air-ticket">
																					Air ticket
																				</option>
																				<option value="other">Other</option>
																			</optgroup>
																		</select>
																	</div>
																	<div class="col-lg-4 col-6 form-group">
																		<label for="name">Student Portal</label>
																		<select
																			class="form-control"
																			name="salesStatus"
																		>
																			<option>Inquiry Received</option>
																			<option>Counselling</option>
																			<option>Quotation Sent</option>
																			<option>Application</option>
																			<option>Waiting for Loo</option>
																			<option>Payment Pending</option>
																			<option>Waiting for CoE</option>
																			<option>Apply for Visa</option>
																		</select>
																	</div>
																	<div class="col-12 form-group content-checkbox">
																		<input type="checkbox" id="show" />
																		<label for="show">
																			Limit the access to this document
																		</label>
																		<span id="content">
																			<fieldset>
																				<div class="form-group valid col-sm-4 field-checkboxes">
																					<label for="field-offices">
																						<span>Offices</span>
																					</label>
																					<div class="field-wrap">
																						<div class="checkboxes wrapper form-control">
																							<div class="combobox">All</div>
																						</div>
																					</div>
																				</div>
																				<div class="form-group valid col-sm-4 field-checkboxes">
																					<label for="field-userGroups">
																						<span>User groups</span>
																					</label>
																					<div class="field-wrap">
																						<div class="checkboxes wrapper form-control">
																							<div class="combobox">None</div>
																						</div>
																					</div>
																				</div>
																				<div class="form-group valid col-sm-4 field-select">
																					<label for="field-accountingOnly">
																						<span>Accounting team only?</span>
																					</label>
																					<div class="field-wrap">
																						<select
																							id="field-accountingOnly"
																							class="form-control"
																						>
																							<option value="">
																								&lt;Nothing selected&gt;
																							</option>
																							<option value="true">
																								Only accounting team can see
																							</option>
																							<option value="false">
																								Others can see
																							</option>
																						</select>
																					</div>
																				</div>
																			</fieldset>
																		</span>
																		<div class="upload-area">
																			<div class="file-input">
																				<input
																					type="file"
																					id="file"
																					class="file"
																				/>

																				<label for="file">
																					<img
																						src="/images/mail.jpg"
																						class="img-fluid"
																					/>
																					Upload Profile Picture
																					<p class="file-name"></p>
																				</label>
																			</div>
																		</div>
																	</div>
																</div>
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};
