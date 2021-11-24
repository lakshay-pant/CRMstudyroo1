import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './studOverview.style.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import { fetchAllStudents } from '../../pages/allStudents/allStudentAction';
import { fetchSingleStudent } from './studentOverviewClickStudAction';
import {
	filterSearchUser,
	fetchAllUsers,
} from '../getAllTheUsers/getUsersAction';
import Moment from 'moment';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import { editStudent } from './studentOverviewAction';
import { Spinner, Alert } from 'react-bootstrap';
import { deleteStudent } from './studentOverviewDeleteAction';
import { editStudentResetMessage } from './studentOverviewSlice';
export const UncategorizedStudents = () => {
	const dispatch = useDispatch();
	const { students } = useSelector((state) => state.allStudent);
	const [studentUserName, setStudentUserName] = useState('');
	const [cliId, setCliId] = useState('');

	useEffect(() => {
		dispatch(fetchAllStudents());
	}, []);

	const { users } = useSelector((state) => state.getUser);

	const { isLoadingEdit, statusEdit, messageEdit } = useSelector(
		(state) => state.editStudent
	);

	const { isLoadingDelete, statusDelete, messageDelete } = useSelector(
		(state) => state.deleteStudent
	);

	console.log('users', users);

	useEffect(() => {
		if (!users.length) {
			dispatch(fetchAllUsers());
		}
	}, [users, dispatch]);

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [ID, setID] = useState('');
	const [userName, setUserName] = useState('');
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [birthday, setBirthday] = useState('');
	const [genders, setGenders] = useState('Male');
	const [nation, setNation] = useState('indian');
	const [onShorePhone, setOnShorePhone] = useState('');
	const [offShorePhone, setOffShorePhone] = useState('');
	const [email, setEmail] = useState('');
	const [salesPipeline, setSalesPipeline] = useState('OnShore');
	const [salesStatus, setSalesStatus] = useState('Inquiry Received');
	const [heatLevel, setHeatLevel] = useState('Very Hot');
	const [note, setNote] = useState('');
	const [visaExpiryDate, setVisaExpiryDate] = useState('');
	const [visaType, setVisaType] = useState('Any');
	const [visaComments, setVisaComments] = useState('');
	const [insuranceStartDate, setInsuranceStartDate] = useState('');
	const [insuranceExpiryDate, setInsuranceExpiryDate] = useState('');
	const [insuranceType, setInsuranceType] = useState(
		'Single(Just for the student)'
	);
	const [insuranceNumber, setInsuranceNumber] = useState('');
	const [insuranceComment, setInsuranceComment] = useState('');
	const [otherComments, setOtherComments] = useState('');
	const [referalSource, setReferalSource] = useState('Unkown');
	const [instituteName, setInstituteName] = useState('');
	const [gpa, setGpa] = useState('');
	const [yearLevel, setYearLevel] = useState('');
	const [schoolCurriculum, setSchoolCurriculum] = useState('');
	const [schoolCurriculumDetails, setSchoolCurriculumDetails] = useState('');
	const [passNumber, setPassNumber] = useState('');
	const [passNationality, setPassNationality] = useState('');
	const [passIssueDate, setPassIssueDate] = useState('');
	const [passExpiryDate, setPassExpiryDate] = useState('');
	const [grantDate, setGrantDate] = useState('');
	const [offShoreAdress, setOffShoreAdress] = useState('');
	const [offShoreLocation, setOffShoreLocation] = useState('');
	const [offShoreUnitNumber, setOffShoreUnitNumber] = useState('');
	const [offShoreStreetNumber, setOffShoreStreetNumber] = useState('');
	const [streetNa, setStreetNa] = useState('');
	const [passComments, setPassComments] = useState('');
	const [locationStatus, setLocationStatus] = useState('onShore');

	const [offShoreCity, setOffShoreCity] = useState('XYZ');
	const [offShoreCountry, setOffShoreCountry] = useState('India');
	const [offShoreZipCode, setOffShoreZipCode] = useState('');
	const [usi, setUsi] = useState('');
	const [educationLevel, setEducationLevel] = useState('');
	const [offShoreCurrentLocation, setOffShoreCurrentLocation] = useState('');
	const [onShoreAddress, setOnShoreAddress] = useState('');
	const [onShoreLocation, setOnShoreLocation] = useState('');
	const [onShoreCurrentLocation, setOnShoreCurrentLocation] = useState('');
	const [unitNumber, setUnitNumber] = useState('');
	const [streetNumber, setStreetNumber] = useState('');
	const [streetName, setStreetName] = useState('');
	const [city, setCity] = useState('XYZ');
	const [country, setCountry] = useState('India');
	const [zipCode, setZipCode] = useState('');
	const [visaExFilter, setVisaExFilter] = useState('');
	const [listFilter, setListFilter] = useState('');
	const [courseEnding, setCourseEnding] = useState('');
	const [statusFilter, setStatusFilter] = useState('');
	const [referalsourceFilter, setReferalsourceFilter] = useState('');
	const [heatLevelFilter, setHeatLevelFilter] = useState('');
	const [visaExpiringFilter, setVisaExpiringFilter] = useState('');
	const [offersFilter, setOffersFilter] = useState('');
	const [salesStatusFilter, setSalesStatusFilter] = useState('');
	const [nextFollowFilter, setNextFollowFilter] = useState('');
	const [sortByFilter, setSortByFilter] = useState('');
	const [filterStatus, setFilterStatus] = useState(false);
	const [student_Filter, setStudent_Filter] = useState([]);
	const [singleStudentId, setSingleStudentId] = useState('');

	useEffect(() => {
		if (!students.length) {
			dispatch(fetchAllStudents());
		}
	}, [students, dispatch]);

	useEffect(() => {
		if (filterStatus === false) {
			dispatch(fetchAllStudents());
		}
	}, [dispatch, filterStatus]);

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'firstName':
				setFirstName(value);
				break;

			case 'userName':
				setUserName(value);
				break;

			case 'middleName':
				setMiddleName(value);
				break;

			case 'lastName':
				setLastName(value);
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

			case 'onShorePhone':
				setOnShorePhone(value);
				break;

			case 'offShorePhone':
				setOffShorePhone(value);
				break;

			case 'email':
				setEmail(value);
				break;

			case 'salesPipeline':
				setSalesPipeline(value);
				break;

			case 'salesStatus':
				setSalesStatus(value);
				break;

			case 'heatLevel':
				setHeatLevel(value);
				break;

			case 'note':
				setNote(value);
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

			case 'insuranceComment':
				setInsuranceComment(value);
				break;

			case 'otherComments':
				setOtherComments(value);
				break;

			case 'referalSource':
				setReferalSource(value);
				break;

			case 'instituteName':
				setInstituteName(value);
				break;

			case 'gpa':
				setGpa(value);
				break;

			case 'yearLevel':
				setYearLevel(value);
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

			case 'passNationality':
				setPassNationality(value);
				break;

			case 'passIssueDate':
				setPassIssueDate(value);
				break;

			case 'passExpiryDate':
				setPassExpiryDate(value);
				break;

			case 'grantDate':
				setGrantDate(value);
				break;

			case 'offShoreAdress':
				setOffShoreAdress(value);
				break;

			case 'offShoreLocation':
				setOffShoreLocation(value);
				break;

			case 'offShoreUnitNumber':
				setOffShoreUnitNumber(value);
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

			case 'offShoreCountry':
				setOffShoreCountry(value);
				break;

			case 'offShoreZipCode':
				setOffShoreZipCode(value);
				break;

			case 'usi':
				setUsi(value);
				break;

			case 'educationLevel':
				setEducationLevel(value);
				break;

			case 'educationLevel':
				setEducationLevel(value);
				break;

			case 'offShoreCurrentLocation':
				setOffShoreCurrentLocation(value);
				break;

			case 'onShoreAddress':
				setOnShoreAddress(value);
				break;

			case 'onShoreLocation':
				setOnShoreLocation(value);
				break;

			case 'onShoreCurrentLocation':
				setOnShoreCurrentLocation(value);
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

			case 'country':
				setCountry(value);
				break;

			case 'zipCode':
				setZipCode(value);
				break;

			case 'passComments':
				setPassComments(value);
				break;

			case 'locationStatus':
				setLocationStatus(value);
				break;

			case 'listFilter':
				setListFilter(value);
				break;

			case 'courseEnding':
				setCourseEnding(value);
				break;

			case 'statusFilter':
				setStatusFilter(value);
				break;

			case 'referalsourceFilter':
				setReferalsourceFilter(value);
				break;

			case 'heatLevelFilter':
				setHeatLevelFilter(value);
				break;

			case 'visaExFilter':
				setVisaExFilter(value);
				break;

			case 'offersFilter':
				setOffersFilter(value);
				break;

			case 'salesStatusFilter':
				setSalesStatusFilter(value);
				break;

			case 'nextFollowFilter':
				setNextFollowFilter(value);
				break;

			case 'sortByFilter':
				setSortByFilter(value);
				break;

			case 'visaExpiringFilter':
				setVisaExpiringFilter(value);
				break;

			default:
				break;
		}
	};

	const handleOnStudentSubmit = async (e) => {
		e.preventDefault();
		console.log(nation);

		const newStudent = {
			firstName,
			middleName,
			lastName,
			email,
			genders,
			nation,
			salesPipeline,
			salesStatus,
			heatLevel,
			note,
			onShorePhone,
			offShorePhone,
			birthday,
			onShoreCurrentLocation,
			offShoreCurrentLocation,
			onShoreAddress,
			onShoreLocation,
			unitNumber,
			streetNumber,
			streetName,
			city,
			country,
			zipCode,
			offShoreAdress,
			offShoreLocation,
			offShoreUnitNumber,
			offShoreStreetNumber,
			streetNa,
			offShoreCity,
			offShoreCountry,
			offShoreZipCode,
			usi,
			educationLevel,
			instituteName,
			gpa,
			yearLevel,
			schoolCurriculum,
			schoolCurriculumDetails,
			passNumber,
			passNationality,
			passIssueDate,
			passExpiryDate,
			passComments,
			grantDate,
			visaExpiryDate,
			visaType,
			visaComments,
			insuranceStartDate,
			insuranceExpiryDate,
			insuranceType,
			insuranceNumber,
			insuranceComment,
			otherComments,
			locationStatus,
			referalSource,
		};
		console.log(ID);
		await dispatch(editStudent(newStudent, ID));
		await dispatch(fetchAllStudents());
		if (statusFilter == 'Onshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OnShore';
			});
			setStudent_Filter(student_Filter);
		}
		if (statusFilter == 'Offshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OffShore';
			});
			setStudent_Filter(student_Filter);
		}

		if (referalsourceFilter == 'unknown') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'unknown';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Youtube') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Youtube';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Instagram') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Instagram';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Facebook') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Facebook';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Google') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Google';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Very Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Very Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Warm') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Warm';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Cold') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Cold';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Inquiry Received') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Inquiry Received';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Counselling') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Counselling';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Application') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Application';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Waiting for Loo') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Loo';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Payment Pending') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Payment Pending';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for CoE') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for CoE';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Apply for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Apply for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Quotation Sent') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Quotation Sent';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa Requirement') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa Requirement';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Visa Granted') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Visa Granted';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Course in Progress') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Course in Progress';
			});
			setStudent_Filter(student_Filter);
		}
	};

	const showModal = () => {
		setIsOpen(true);
	};

	const showModal2 = (item) => {
		console.log(item._id);

		setID(item._id);
		setSalesPipeline(item.salesPipeline);
		setSalesStatus(item.salesStatus);
		setHeatLevel(item.heatLevel);
		setOtherComments(item.otherComments);
		setLocationStatus(item.locationStatus);
		setFirstName(item.firstName);
		setReferalSource(item.referalSource);
		setUserName(item.userName);
		setNote(item.note);
		setLastName(item.lastName);
		setBirthday(item.birthday);
		setGenders(item.genders);
		setNation(item.nation);
		setEmail(item.email);
		setOnShorePhone(item.onShorePhone);
		setOffShorePhone(item.offShorePhone);
		setVisaType(item.visaType);
		setVisaExpiryDate(item.visaExpiryDate);

		setIsOpen2(true);
	};

	const hideModal = () => {
		setIsOpen(false);
	};

	const hideModal2 = () => {
		dispatch(editStudentResetMessage());
		setIsOpen2(false);
	};

	const deleteStudentRecord = async () => {
		await dispatch(deleteStudent(ID));
		await dispatch(fetchAllStudents());

		if (statusFilter == 'Onshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OnShore';
			});
			setStudent_Filter(student_Filter);
		}
		if (statusFilter == 'Offshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OffShore';
			});
			setStudent_Filter(student_Filter);
		}

		if (referalsourceFilter == 'unknown') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'unknown';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Youtube') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Youtube';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Instagram') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Instagram';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Facebook') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Facebook';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Google') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Google';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Very Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Very Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Warm') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Warm';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Cold') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Cold';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Inquiry Received') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Inquiry Received';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Counselling') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Counselling';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Application') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Application';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Waiting for Loo') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Loo';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Payment Pending') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Payment Pending';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for CoE') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for CoE';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Apply for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Apply for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Quotation Sent') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Quotation Sent';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa Requirement') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa Requirement';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Visa Granted') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Visa Granted';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Course in Progress') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Course in Progress';
			});
			setStudent_Filter(student_Filter);
		}
	};

	const dateFilter = () => {
		var visaExpDate = dispatch(deleteStudent(ID));
	};

	const handleOnFilterSubmit = (e) => {
		e.preventDefault();
		console.log(
			'heyaaaa',
			listFilter,
			courseEnding,
			statusFilter,
			referalsourceFilter,
			heatLevelFilter,
			visaExpiringFilter,
			offersFilter,
			salesStatusFilter,
			nextFollowFilter,
			sortByFilter
		);

		setFilterStatus(true);
		console.log('sta', filterStatus);
		if (statusFilter == 'Onshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OnShore';
			});
			setStudent_Filter(student_Filter);
		}
		if (statusFilter == 'Offshore') {
			var student_Filter = students.filter(function (student) {
				return student.salesPipeline === 'OffShore';
			});
			setStudent_Filter(student_Filter);
		}

		if (referalsourceFilter == 'unknown') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'unknown';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Youtube') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Youtube';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Instagram') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Instagram';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Facebook') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Facebook';
			});
			setStudent_Filter(student_Filter);
		}
		if (referalsourceFilter == 'Google') {
			var student_Filter = students.filter(function (student) {
				return student.referalSource === 'Google';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Very Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Very Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Hot') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Hot';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Warm') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Warm';
			});
			setStudent_Filter(student_Filter);
		}
		if (heatLevelFilter == 'Cold') {
			var student_Filter = students.filter(function (student) {
				return student.heatLevel === 'Cold';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Inquiry Received') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Inquiry Received';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Counselling') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Counselling';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Application') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Application';
			});
			setStudent_Filter(student_Filter);
		}

		if (salesStatusFilter == 'Waiting for Loo') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Loo';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Payment Pending') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Payment Pending';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for CoE') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for CoE';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Apply for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Apply for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Quotation Sent') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Quotation Sent';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa Requirement') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa Requirement';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Waiting for Visa') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Waiting for Visa';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Visa Granted') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Visa Granted';
			});
			setStudent_Filter(student_Filter);
		}
		if (salesStatusFilter == 'Course in Progress') {
			var student_Filter = students.filter(function (student) {
				return student.salesStatus === 'Course in Progress';
			});
			setStudent_Filter(student_Filter);
		}
		console.log('hehohahahah', student_Filter);
	};

	const resetPage = () => {
		setFilterStatus(false);
	};

	return (
		<div className="content-wrapper">
			<div className="maincontent-rightside student-view add-student uncategorized">
				<section class="maincontent">
					<div class="container-fluid">
						<div class="row">
							<div className="col-md-6">
								<div className="add-student">
									<div className="add-text">
										<div className="add-round">
											<span>
												<i className="fa fa-tasks"></i>
											</span>
										</div>
										<small>All Students</small>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="import-from">
									<p>Import from spreadsheet</p>
									<div className="st-file-upload">
										<Link to="/addstudent">
											<label for="file-upload" className="custom-file-upload">
												<i className="fa fa-user-graduate"></i> Add New Student
												<span>+</span>
											</label>
										</Link>

										<input id="file-upload" type="file" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*--student-leads start --*/}
				<div class="student-leads">
					<div class="container-fluid">
						<div class="leads">
							<div class="headingdiv">
								<div class="row">
									<div class="col-lg-6 col-12">
										<div class="student-lead ">
											<p>I need help with students & leads</p>
										</div>
									</div>

									<div class="col-lg-6 col-12">
										<form class="activform ml-auto">
											<div class="form-row">
												<div class="form-group">
													<div class="activi-inputs">
														<div class="filter">
															<div class="view">
																<Link to="/student-overview">
																	<i class="fas fa-th"></i>
																	<label class="labelheade">
																		View as pipelines
																	</label>
																</Link>
															</div>
														</div>
														<select class="form-control filter-box">
															<option>Import</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
														</select>
														<div class="filter">
															<button onClick={showModal}>
																<i class="fas fa-filter"></i>
																<label class="labelheade">Filters</label>
															</button>
															<div
																class="modal fade filters-modal show"
																id="update"
																aria-modal="true"
															>
																<Modal show={isOpen} onHide={hideModal}>
																	<Modal.Body>
																		<div class="fl-head">
																			<h5>
																				<span>
																					<i class="fas fa-filter"></i>
																				</span>{' '}
																				Filters
																			</h5>
																			<button
																				onClick={hideModal}
																				className="close"
																			>
																				<span aria-hidden="true">&times;</span>
																			</button>
																		</div>
																		<form
																			class="fl-form"
																			onSubmit={handleOnFilterSubmit}
																		>
																			<div class="form-row">
																				<div class="form-group col-md-6">
																					<label>List</label>
																					<select
																						name="listFilter"
																						value={listFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>1</option>
																						<option>Saab</option>
																						<option>Mercedes</option>
																						<option>Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Visa expiring</label>
																					<select
																						name="visaExpiringFilter"
																						class="form-control"
																						value={visaExpiringFilter}
																						onChange={handleOnChange}
																					>
																						<option>Anytime</option>
																						<option>In 1 month</option>
																						<option>In 2 months</option>
																						<option>In 3 months</option>
																						<option>In 4 months</option>
																						<option>In 5 months</option>
																						<option>In 6 months</option>
																						<option>In 7 months</option>
																						<option>In 8 months</option>
																						<option>In 9 months</option>
																						<option>In 10 months</option>
																						<option>In 11 months</option>
																						<option>In 12 months</option>
																						<option>In 24 months</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Courses ending</label>
																					<select
																						name="courseEnding"
																						value={courseEnding}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>1</option>
																						<option>Saab</option>
																						<option>Mercedes</option>
																						<option>Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Offers</label>
																					<select
																						name="offersFilter"
																						value={offersFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>1</option>
																						<option>Saab</option>
																						<option>Mercedes</option>
																						<option>Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Status</label>
																					<select
																						name="statusFilter"
																						value={statusFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>Onshore</option>
																						<option>Offshore</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Sales Status</label>
																					<select
																						name="salesStatusFilter"
																						value={salesStatusFilter}
																						onChange={handleOnChange}
																						class="form-control"
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
																				<div class="form-group col-md-6">
																					<label>Referal source</label>
																					<select
																						name="referalsourceFilter"
																						value={referalsourceFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>unknown</option>
																						<option>Youtube</option>
																						<option>Instagram</option>
																						<option>Facebook</option>
																						<option>Google</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Next follow up date</label>
																					<select
																						name="nextFollowFilter"
																						value={nextFollowFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>1</option>
																						<option>Saab</option>
																						<option>Mercedes</option>
																						<option>Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Heat level</label>
																					<select
																						name="heatLevelFilter"
																						value={heatLevelFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>Very Hot</option>
																						<option>Hot</option>
																						<option>Warm</option>
																						<option>Cold</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Sort by</label>
																					<select
																						name="sortByFilter"
																						value={sortByFilter}
																						onChange={handleOnChange}
																						class="form-control"
																					>
																						<option>1</option>
																						<option>Saab</option>
																						<option>Mercedes</option>
																						<option>Audi</option>
																					</select>
																				</div>
																				<div class="fotercontent">
																					<Link to="/dashboard/all-student">
																						<div class="footersingbtn">
																							<input
																								type="submit"
																								name="Save"
																								class="btn getin-btn"
																								value="Reset"
																								onClick={resetPage}
																							/>
																						</div>
																					</Link>
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
																	</Modal.Body>

																	<Modal.Footer></Modal.Footer>
																</Modal>
															</div>
														</div>

														<div
															class="modal fade filters-modal"
															id="filters"
															tabindex="-1"
															role="dialog"
															aria-labelledby="exampleModalLabel"
															aria-hidden="true"
														>
															<div class="modal-dialog" role="document">
																<div class="modal-content">
																	<button
																		type="button"
																		class="close"
																		data-dismiss="modal"
																		aria-label="Close"
																	>
																		<span aria-hidden="true">&times;</span>
																	</button>

																	<div class="modal-body">
																		<div class="fl-head">
																			<h5>
																				<span>
																					<i class="fal fa-filter"></i>
																				</span>{' '}
																				Filters
																			</h5>
																		</div>
																		<div class="fl-form">
																			<div class="form-row">
																				<div class="form-group col-md-6">
																					<label>List</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Visa expiring</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Courses ending</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Offers</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Status</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Sale</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Referal source</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Next follow up date</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Heat level</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																				<div class="form-group col-md-6">
																					<label>Sort by</label>
																					<select name="" class="form-control">
																						<option value="volvo">1</option>
																						<option value="saab">Saab</option>
																						<option value="mercedes">
																							Mercedes
																						</option>
																						<option value="audi">Audi</option>
																					</select>
																				</div>
																			</div>

																			<div class="fotercontent">
																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="Save"
																						class="btn getin-btn"
																						value="Reset"
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
																	</div>
																</div>
															</div>
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
				{/*--student-leads end --*/}

				{/*-- commantable --*/}
				{filterStatus === false ? (
					<div class="commantablesection uncategorized-list">
						<div class="container-fluid">
							<div class="row">
								<div class="col-md-12">
									<div class="stuednttable table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th>NAME</th>
													<th>CREATED DATES</th>
													<th>INFO</th>
													<th>HEAT LEVEL</th>
													<th>VISA</th>
													<th>SALE STATUS</th>
													<th>ASSIGNED TO</th>
													<th>STATUS</th>
													<th>PHONE</th>
													<th>REFFERAL SOURCE</th>
												</tr>
											</thead>
											<tbody>
												{students
													.slice(0)
													.reverse()
													.map((item) => (
														<tr key={item.id}>
															<td>
																<Link to={'/studentInfo/' + item._id}>
																	{item.firstName}
																</Link>
															</td>
															<td>
																{Moment(item.addedAt).format('DD/MM/YYYY')}
															</td>
															<td>{item.email}</td>
															<td>{item.heatLevel}</td>
															<td>
																{item.visaType}
																<br />
																Exp:
																<br />
																{item.visaExpiryDate}
															</td>
															<td>{item.salesStatus}</td>
															<td>{item.userName}</td>
															<td>{item.locationStatus}</td>
															<td>
																Onshore:{item.onShorePhone}
																<br />
																Offshore{item.offShorePhone}
															</td>
															<td>{item.referalSource}</td>
															<td>
																<div class="action">
																	<a onClick={() => showModal2(item)}>
																		<i class="fas fa-pen"></i>
																	</a>
																</div>
																<div
																	class="modal fade filters-modal show"
																	aria-modal="true"
																>
																	<Modal show={isOpen2} onHide={hideModal2}>
																		<div id="studentFilter">
																			<div
																				class="modal-dialog modal-lg"
																				role="document"
																			>
																				<div class="modal-content">
																					<div class="modal-top">
																						<h5>Update Student</h5>
																						<button
																							type="button"
																							onClick={hideModal2}
																							class="close"
																							data-dismiss="modal"
																							aria-label="Close"
																						>
																							<span aria-hidden="true">
																								&times;
																							</span>
																						</button>
																					</div>
																					<Modal.Body>
																						<form
																							onSubmit={handleOnStudentSubmit}
																						>
																							{' '}
																							<div class="student-filter-area">
																								<div class="row">
																									<div class="col-lg-7 col-12">
																										<div class="update-crm">
																											<div class="headingdiv">
																												CRM
																											</div>
																											<div class="crm-form">
																												<div class="form-row">
																													<div class="form-group col-md-6 col-12">
																														<label>
																															Sales Pipeline
																															<p>*</p>
																														</label>
																														<select
																															class="form-control"
																															name="salesPipeline"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={
																																salesPipeline
																															}
																														>
																															<option>
																																OnShore
																															</option>
																															<option>
																																OffShore
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-6 col-12">
																														<label>
																															Sale Status
																															<p>*</p>
																														</label>
																														<select
																															class="form-control"
																															name="salesStatus"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={
																																salesStatus
																															}
																														>
																															<option>
																																Inquiry Received
																															</option>
																															<option>
																																Counselling
																															</option>
																															<option>
																																Quotation Sent
																															</option>
																															<option>
																																Application
																															</option>
																															<option>
																																Waiting for Loo
																															</option>
																															<option>
																																Payment Pending
																															</option>
																															<option>
																																Waiting for CoE
																															</option>
																															<option>
																																Apply for Visa
																															</option>
																															<option>
																																Waiting for Visa
																																Requirement
																															</option>
																															<option>
																																Waiting for Visa
																															</option>
																															<option>
																																Visa Granted
																															</option>
																															<option>
																																Course in
																																Progress
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-6 col-12">
																														<label>
																															Heat Level
																														</label>
																														<select
																															class="form-control"
																															name="heatLevel"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={heatLevel}
																														>
																															<option>
																																Very Hot
																															</option>
																															<option>
																																Hot
																															</option>
																															<option>
																																Warm
																															</option>
																															<option>
																																Cold
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-12 col-12">
																														<label>
																															Other comments
																															(remarks)
																														</label>
																														<textarea
																															rows="5"
																															class="form-control"
																															placeholder="insert text here"
																															value={
																																otherComments
																															}
																															name="otherComments"
																															onChange={
																																handleOnChange
																															}
																														></textarea>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="update-student">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne"
																															aria-expanded="true"
																															aria-controls="collapseOne"
																														>
																															<div class="headingdiv">
																																Personal{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			First Name
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="firstName"
																																			value={
																																				firstName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Middle
																																			Name
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="middleName"
																																			value={
																																				middleName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Last Name
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="lastName"
																																			value={
																																				lastName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Email
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="email"
																																			value={
																																				email
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Birthday
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="birthday"
																																			value={
																																				birthday
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Gender
																																		</label>
																																		<select
																																			class="form-control"
																																			name="genders"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				genders
																																			}
																																		>
																																			<option>
																																				Male
																																			</option>
																																			<option>
																																				Female
																																			</option>
																																			<option>
																																				Other
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Nationality
																																		</label>
																																		<select
																																			class="form-control"
																																			name="nation"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				nation
																																			}
																																		>
																																			<option>
																																				Poland
																																			</option>
																																			<option>
																																				Australia
																																			</option>
																																			<option>
																																				Norway
																																			</option>
																																			<option>
																																				Ghana
																																			</option>
																																		</select>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="update-student">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne4"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne4"
																															aria-expanded="true"
																															aria-controls="collapseOne4"
																														>
																															<div class="headingdiv">
																																Applicant
																																Current Location{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne4"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne4"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Onshore
																																			(In
																																			Australia)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="onShoreCurrentLocation"
																																			value={
																																				onShoreCurrentLocation
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Offshore
																																			(Overseas)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="offShoreCurrentLocation"
																																			value={
																																				offShoreCurrentLocation
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="passport">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne1"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																OnShore
																																Information{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne1"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne1"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-row">
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Phone
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShorePhone"
																																		value={
																																			onShorePhone
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Address
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShoreAddress"
																																		value={
																																			onShoreAddress
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Location
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShoreLocation"
																																		value={
																																			onShoreLocation
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Unit Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="unitNumber"
																																		value={
																																			unitNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street
																																		Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetNumber"
																																		value={
																																			streetNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street Name
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetName"
																																		value={
																																			streetName
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		City
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="city"
																																		value={city}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Country
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="country"
																																		value={
																																			country
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Zipcode
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="zipCode"
																																		value={
																																			zipCode
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="documents">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																OffShore
																																Information{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-row">
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Phone
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShorePhone"
																																		value={
																																			offShorePhone
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Address
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreAdress"
																																		value={
																																			offShoreAdress
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Location
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreLocation"
																																		value={
																																			offShoreLocation
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Unit Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreUnitNumber"
																																		value={
																																			offShoreUnitNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street
																																		Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreStreetNumber"
																																		value={
																																			offShoreStreetNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street Name
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetNa"
																																		value={
																																			streetNa
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		City
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreCity"
																																		onChange={
																																			handleOnChange
																																		}
																																		value={
																																			offShoreCity
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Country
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreCountry"
																																		onChange={
																																			handleOnChange
																																		}
																																		value={
																																			offShoreCountry
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Zipcode
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreZipCode"
																																		value={
																																			offShoreZipCode
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="others">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne1"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																Education
																																Details{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne1"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne1"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			USI
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="usi"
																																			value={
																																				usi
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Education
																																			Level
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="educationLevel"
																																			value={
																																				educationLevel
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Institute
																																			Name
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="instituteName"
																																			value={
																																				instituteName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			GPA
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="gpa"
																																			value={
																																				gpa
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Year level
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="yearLevel"
																																			value={
																																				yearLevel
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			School
																																			curriculum
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="schoolCurriculum"
																																			value={
																																				schoolCurriculum
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			School
																																			curriculum
																																			details
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="schoolCurriculumDetails"
																																			value={
																																				schoolCurriculumDetails
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="counsellor">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne2"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne2"
																														>
																															<div class="headingdiv">
																																Passports{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Number
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passNumber"
																																			value={
																																				passNumber
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Nationality
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passNationality"
																																			value={
																																				passNationality
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Issue Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="passIssueDate"
																																			value={
																																				passIssueDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="passExpiryDate"
																																			value={
																																				passExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passComments"
																																			value={
																																				passComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="counsellor">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne2"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne2"
																														>
																															<div class="headingdiv">
																																Visas{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Grant Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="grantDate"
																																			value={
																																				grantDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="visaExpiryDate"
																																			value={
																																				visaExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Type
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="visaType"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				visaType
																																			}
																																		>
																																			<option>
																																				Any
																																			</option>
																																			<option>
																																				Student
																																				visa
																																			</option>
																																			<option>
																																				Working
																																				holiday
																																			</option>
																																			<option>
																																				Work &
																																				holiday
																																			</option>
																																			<option>
																																				Citizenship
																																			</option>
																																			<option>
																																				other
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Other
																																			Comments(remarks)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="visaComments"
																																			value={
																																				visaComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="notes">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne3"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne3"
																															aria-expanded="true"
																															aria-controls="collapseOne3"
																														>
																															<div class="headingdiv">
																																Insurance{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne3"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne3"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Start Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceStartDate"
																																			value={
																																				insuranceStartDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceExpiryDate"
																																			value={
																																				insuranceExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Type
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="insuranceType"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				insuranceType
																																			}
																																		>
																																			<option>
																																				Single(Just
																																				for the
																																				student)
																																			</option>
																																			<option>
																																				Couple(Just
																																				for the
																																				student)
																																			</option>
																																			<option>
																																				Single
																																				parent(Student
																																				and
																																				their
																																				kid)
																																			</option>
																																			<option>
																																				Family(Student,partner
																																				and Kid)
																																			</option>
																																		</select>
																																	</div>
																																	<div class="form-group col-md-4">
																																		<label>
																																			Number
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceNumber"
																																			value={
																																				insuranceNumber
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4">
																																		<label>
																																			Other
																																			comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceComment"
																																			value={
																																				insuranceComment
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="contact">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne5"
																															aria-expanded="true"
																															aria-controls="collapseOne5"
																														>
																															<div class="headingdiv">
																																CRM{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne5"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne5"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<label>
																																			Sales
																																			Pipeline
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="salesPipeline"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				salesPipeline
																																			}
																																		>
																																			<option>
																																				onshore
																																			</option>
																																			<option>
																																				offShore
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Sales
																																			Status
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="salesStatus"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				salesStatus
																																			}
																																		>
																																			<option>
																																				Inquiry
																																				Recieved
																																			</option>
																																			<option>
																																				Counselling
																																			</option>
																																			<option>
																																				Quotation
																																				Sent
																																			</option>
																																			<option>
																																				Application
																																			</option>
																																			<option>
																																				Waiting
																																				for Loo
																																			</option>
																																			<option>
																																				Payment
																																				Pending
																																			</option>
																																			<option>
																																				Waiting
																																				for CoE
																																			</option>
																																			<option>
																																				Apply
																																				for Visa
																																			</option>
																																			<option>
																																				Waiting
																																				for Visa
																																				Requirement
																																			</option>
																																			<option>
																																				Waiting
																																				for Visa
																																			</option>
																																			<option>
																																				Visa
																																				Granted
																																			</option>
																																			<option>
																																				Course
																																				in
																																				Progress
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Lead Level
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="heatLevel"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				heatLevel
																																			}
																																		>
																																			<option>
																																				Very Hot
																																			</option>
																																			<option>
																																				Hot
																																			</option>
																																			<option>
																																				Warm
																																			</option>
																																			<option>
																																				Cold
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-12 col-12">
																																		<label>
																																			Other
																																			Comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="otherComments"
																																			value={
																																				otherComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="visa">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne6"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne6"
																															aria-expanded="true"
																															aria-controls="collapseOne6"
																														>
																															<div class="headingdiv">
																																Others{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne6"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne6"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<label>
																																			Status
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="locationStatus"
																																			value={
																																				locationStatus
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		>
																																			<option>
																																				onshore
																																			</option>
																																			<option>
																																				offShore
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Refferal
																																			Source
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="referalSource"
																																			value={
																																				referalSource
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		>
																																			<option>
																																				unknown
																																			</option>
																																			<option>
																																				Youtube
																																			</option>
																																			<option>
																																				Instagram
																																			</option>
																																			<option>
																																				Facebook
																																			</option>
																																			<option>
																																				Google
																																			</option>
																																		</select>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="start-date">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne6"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne8"
																															aria-expanded="true"
																															aria-controls="collapseOne7"
																														>
																															<div class="headingdiv">
																																Add a Note{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne8"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne7"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-bgclr">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="note"
																																			value={
																																				note
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																							<div class="fotercontent">
																								<div class="form-buttons-w">
																									<div className="row">
																										<div className="col-md-9">
																											<button
																												type="submit"
																												onClick={() =>
																													deleteStudentRecord()
																												}
																												class="btn btn-danger btn-secondary"
																											>
																												Delete
																											</button>
																										</div>
																										<div className="col-md-3">
																											<input
																												type="submit"
																												name="Save"
																												class="btn float-right btn-primary getin-btn"
																												value="Save"
																											/>
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
																										{messageDelete && (
																											<Alert
																												variant={
																													statusDelete ===
																													'success'
																														? 'danger'
																														: 'success'
																												}
																											>
																												{messageDelete}
																											</Alert>
																										)}
																									</div>
																								</div>
																							</div>
																						</form>
																					</Modal.Body>
																				</div>
																			</div>
																		</div>
																	</Modal>
																</div>
															</td>
														</tr>
													))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<div class="commantablesection uncategorized-list">
						<div class="container-fluid">
							<div class="row">
								<div class="col-md-12">
									<div class="stuednttable table-responsive">
										<table class="table">
											<thead>
												<tr>
													<th>NAME</th>
													<th>CREATED DATES</th>
													<th>INFO</th>
													<th>HEAT LEVEL</th>
													<th>VISA</th>
													<th>SALE STATUS</th>
													<th>ASSIGNED TO</th>
													<th>STATUS</th>
													<th>PHONE</th>
													<th>REFFERAL SOURCE</th>
												</tr>
											</thead>
											<tbody>
												{student_Filter
													.slice(0)
													.reverse()
													.map((item) => (
														<tr key={item.id}>
															<td>{item.firstName}</td>
															<td>
																{Moment(item.addedAt).format('DD/MM/YYYY')}
															</td>
															<td>{item.email}</td>
															<td>{item.heatLevel}</td>
															<td>
																{item.visaType}
																<br />
																Exp:
																<br />
																{item.visaExpiryDate}
															</td>
															<td>{item.salesStatus}</td>
															<td>{item.userName}</td>
															<td>{item.locationStatus}</td>
															<td>
																Onshore:{item.onShorePhone}
																<br />
																Offshore{item.offShorePhone}
															</td>
															<td>{item.referalSource}</td>
															<td>
																<div class="action">
																	<a onClick={() => showModal2(item)}>
																		<i class="fas fa-pen"></i>
																	</a>
																</div>
																<div
																	class="modal fade filters-modal show"
																	aria-modal="true"
																>
																	<Modal show={isOpen2} onHide={hideModal2}>
																		<div id="studentFilter">
																			<div
																				class="modal-dialog modal-lg"
																				role="document"
																			>
																				<div class="modal-content">
																					<div class="modal-top">
																						<h5>Update Student</h5>
																						<button
																							type="button"
																							onClick={hideModal2}
																							class="close"
																							data-dismiss="modal"
																							aria-label="Close"
																						>
																							<span aria-hidden="true">
																								&times;
																							</span>
																						</button>
																					</div>
																					<Modal.Body>
																						<form
																							onSubmit={handleOnStudentSubmit}
																						>
																							{' '}
																							<div class="student-filter-area">
																								<div class="row">
																									<div class="col-lg-7 col-12">
																										<div class="update-crm">
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

																											{messageDelete && (
																												<Alert
																													variant={
																														statusDelete ===
																														'success'
																															? 'danger'
																															: 'success'
																													}
																												>
																													{messageDelete}
																												</Alert>
																											)}
																											<div class="headingdiv">
																												CRM
																											</div>
																											<div class="crm-form">
																												<div class="form-row">
																													<div class="form-group col-md-6 col-12">
																														<label>
																															Sales Pipeline
																															<p>*</p>
																														</label>
																														<select
																															class="form-control"
																															name="salesPipeline"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={
																																salesPipeline
																															}
																														>
																															<option>
																																OnShore
																															</option>
																															<option>
																																OffShore
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-6 col-12">
																														<label>
																															Sale Status
																															<p>*</p>
																														</label>
																														<select
																															class="form-control"
																															name="salesStatus"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={
																																salesStatus
																															}
																														>
																															<option>
																																Inquiry Received
																															</option>
																															<option>
																																Counselling
																															</option>
																															<option>
																																Quotation Sent
																															</option>
																															<option>
																																Application
																															</option>
																															<option>
																																Waiting for Loo
																															</option>
																															<option>
																																Payment Pending
																															</option>
																															<option>
																																Waiting for CoE
																															</option>
																															<option>
																																Apply for Visa
																															</option>
																															<option>
																																Waiting for Visa
																																Requirement
																															</option>
																															<option>
																																Waiting for Visa
																															</option>
																															<option>
																																Visa Granted
																															</option>
																															<option>
																																Course in
																																Progress
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-6 col-12">
																														<label>
																															Heat Level
																														</label>
																														<select
																															class="form-control"
																															name="heatLevel"
																															id="cars"
																															onChange={
																																handleOnChange
																															}
																															value={heatLevel}
																														>
																															<option>
																																Very Hot
																															</option>
																															<option>
																																Hot
																															</option>
																															<option>
																																Warm
																															</option>
																															<option>
																																Cold
																															</option>
																														</select>
																													</div>

																													<div class="form-group col-md-12 col-12">
																														<label>
																															Other comments
																															(remarks)
																														</label>
																														<textarea
																															rows="5"
																															class="form-control"
																															placeholder="insert text here"
																															value={
																																otherComments
																															}
																															name="otherComments"
																															onChange={
																																handleOnChange
																															}
																														></textarea>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="update-student">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne"
																															aria-expanded="true"
																															aria-controls="collapseOne"
																														>
																															<div class="headingdiv">
																																Personal{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			First Name
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="firstName"
																																			value={
																																				firstName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Middle
																																			Name
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="middleName"
																																			value={
																																				middleName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Last Name
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="lastName"
																																			value={
																																				lastName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Email
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="email"
																																			value={
																																				email
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Birthday
																																			<p>*</p>
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="birthday"
																																			value={
																																				birthday
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Gender
																																		</label>
																																		<select
																																			class="form-control"
																																			name="genders"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				genders
																																			}
																																		>
																																			<option>
																																				Male
																																			</option>
																																			<option>
																																				Female
																																			</option>
																																			<option>
																																				Other
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Nationality
																																		</label>
																																		<select
																																			class="form-control"
																																			name="nation"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				nation
																																			}
																																		>
																																			<option>
																																				Poland
																																			</option>
																																			<option>
																																				Australia
																																			</option>
																																			<option>
																																				Norway
																																			</option>
																																			<option>
																																				Ghana
																																			</option>
																																		</select>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="update-student">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne4"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne4"
																															aria-expanded="true"
																															aria-controls="collapseOne4"
																														>
																															<div class="headingdiv">
																																Applicant
																																Current Location{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne4"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne4"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Onshore
																																			(In
																																			Australia)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="onShoreCurrentLocation"
																																			value={
																																				onShoreCurrentLocation
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Offshore
																																			(Overseas)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="offShoreCurrentLocation"
																																			value={
																																				offShoreCurrentLocation
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="passport">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne1"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																OnShore
																																Information{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne1"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne1"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-row">
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Phone
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShorePhone"
																																		value={
																																			onShorePhone
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Address
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShoreAddress"
																																		value={
																																			onShoreAddress
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Location
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="onShoreLocation"
																																		value={
																																			onShoreLocation
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Unit Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="unitNumber"
																																		value={
																																			unitNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street
																																		Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetNumber"
																																		value={
																																			streetNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street Name
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetName"
																																		value={
																																			streetName
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		City
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="city"
																																		value={city}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Country
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="country"
																																		value={
																																			country
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Zipcode
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="zipCode"
																																		value={
																																			zipCode
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="documents">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																OffShore
																																Information{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-row">
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Phone
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShorePhone"
																																		value={
																																			offShorePhone
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Address
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreAdress"
																																		value={
																																			offShoreAdress
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Location
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreLocation"
																																		value={
																																			offShoreLocation
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Unit Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreUnitNumber"
																																		value={
																																			offShoreUnitNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street
																																		Number
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreStreetNumber"
																																		value={
																																			offShoreStreetNumber
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Street Name
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="streetNa"
																																		value={
																																			streetNa
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		City
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreCity"
																																		onChange={
																																			handleOnChange
																																		}
																																		value={
																																			offShoreCity
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Country
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreCountry"
																																		onChange={
																																			handleOnChange
																																		}
																																		value={
																																			offShoreCountry
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-4 col-12">
																																	<label>
																																		Zipcode
																																	</label>
																																	<input
																																		type="text"
																																		class="form-control"
																																		placeholder=""
																																		name="offShoreZipCode"
																																		value={
																																			offShoreZipCode
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="others">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne1"
																															aria-expanded="true"
																															aria-controls="collapseOne1"
																														>
																															<div class="headingdiv">
																																Education
																																Details{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne1"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne1"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			USI
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="usi"
																																			value={
																																				usi
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Education
																																			Level
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="educationLevel"
																																			value={
																																				educationLevel
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Institute
																																			Name
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="instituteName"
																																			value={
																																				instituteName
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			GPA
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="gpa"
																																			value={
																																				gpa
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Year level
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="yearLevel"
																																			value={
																																				yearLevel
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			School
																																			curriculum
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="schoolCurriculum"
																																			value={
																																				schoolCurriculum
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			School
																																			curriculum
																																			details
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="schoolCurriculumDetails"
																																			value={
																																				schoolCurriculumDetails
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="counsellor">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne2"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne2"
																														>
																															<div class="headingdiv">
																																Passports{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Number
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passNumber"
																																			value={
																																				passNumber
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Nationality
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passNationality"
																																			value={
																																				passNationality
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Issue Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="passIssueDate"
																																			value={
																																				passIssueDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="passExpiryDate"
																																			value={
																																				passExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="passComments"
																																			value={
																																				passComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="counsellor">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne2"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne2"
																															aria-expanded="true"
																															aria-controls="collapseOne2"
																														>
																															<div class="headingdiv">
																																Visas{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne2"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne2"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Grant Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="grantDate"
																																			value={
																																				grantDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="visaExpiryDate"
																																			value={
																																				visaExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Type
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="visaType"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				visaType
																																			}
																																		>
																																			<option>
																																				Any
																																			</option>
																																			<option>
																																				Student
																																				visa
																																			</option>
																																			<option>
																																				Working
																																				holiday
																																			</option>
																																			<option>
																																				Work &
																																				holiday
																																			</option>
																																			<option>
																																				Citizenship
																																			</option>
																																			<option>
																																				other
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Other
																																			Comments(remarks)
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="visaComments"
																																			value={
																																				visaComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="notes">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne3"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne3"
																															aria-expanded="true"
																															aria-controls="collapseOne3"
																														>
																															<div class="headingdiv">
																																Insurance{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne3"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne3"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Start Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceStartDate"
																																			value={
																																				insuranceStartDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4 col-12">
																																		<label>
																																			Expiry
																																			Date
																																		</label>
																																		<input
																																			type="date"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceExpiryDate"
																																			value={
																																				insuranceExpiryDate
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Type
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="insuranceType"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				insuranceType
																																			}
																																		>
																																			<option>
																																				Single(Just
																																				for the
																																				student)
																																			</option>
																																			<option>
																																				Couple(Just
																																				for the
																																				student)
																																			</option>
																																			<option>
																																				Single
																																				parent(Student
																																				and
																																				their
																																				kid)
																																			</option>
																																			<option>
																																				Family(Student,partner
																																				and Kid)
																																			</option>
																																		</select>
																																	</div>
																																	<div class="form-group col-md-4">
																																		<label>
																																			Number
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceNumber"
																																			value={
																																				insuranceNumber
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																	<div class="form-group col-md-4">
																																		<label>
																																			Other
																																			comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="insuranceComment"
																																			value={
																																				insuranceComment
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="contact">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne1"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne5"
																															aria-expanded="true"
																															aria-controls="collapseOne5"
																														>
																															<div class="headingdiv">
																																CRM{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne5"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne5"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<label>
																																			Sales
																																			Pipeline
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="salesPipeline"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				salesPipeline
																																			}
																																		>
																																			<option>
																																				onshore
																																			</option>
																																			<option>
																																				offShore
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Sales
																																			Status
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="salesStatus"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				salesStatus
																																			}
																																		>
																																			<option>
																																				Inquiry
																																				Recieved
																																			</option>
																																			<option>
																																				Counselling
																																			</option>
																																			<option>
																																				Quotation
																																				Sent
																																			</option>
																																			<option>
																																				Application
																																			</option>
																																			<option>
																																				Waiting
																																				for Loo
																																			</option>
																																			<option>
																																				Payment
																																				Pending
																																			</option>
																																			<option>
																																				Waiting
																																				for CoE
																																			</option>
																																			<option>
																																				Apply
																																				for Visa
																																			</option>
																																			<option>
																																				Waiting
																																				for Visa
																																				Requirement
																																			</option>
																																			<option>
																																				Waiting
																																				for Visa
																																			</option>
																																			<option>
																																				Visa
																																				Granted
																																			</option>
																																			<option>
																																				Course
																																				in
																																				Progress
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Lead Level
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="heatLevel"
																																			onChange={
																																				handleOnChange
																																			}
																																			value={
																																				heatLevel
																																			}
																																		>
																																			<option>
																																				Very Hot
																																			</option>
																																			<option>
																																				Hot
																																			</option>
																																			<option>
																																				Warm
																																			</option>
																																			<option>
																																				Cold
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-12 col-12">
																																		<label>
																																			Other
																																			Comments
																																		</label>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="otherComments"
																																			value={
																																				otherComments
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="visa">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne6"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne6"
																															aria-expanded="true"
																															aria-controls="collapseOne6"
																														>
																															<div class="headingdiv">
																																Others{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne6"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne6"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="crm-form">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<label>
																																			Status
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="locationStatus"
																																			value={
																																				locationStatus
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		>
																																			<option>
																																				onshore
																																			</option>
																																			<option>
																																				offShore
																																			</option>
																																		</select>
																																	</div>

																																	<div class="form-group col-md-4">
																																		<label>
																																			Refferal
																																			Source
																																		</label>
																																		<select
																																			class="form-control"
																																			id="cars"
																																			name="referalSource"
																																			value={
																																				referalSource
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		>
																																			<option>
																																				unknown
																																			</option>
																																			<option>
																																				Youtube
																																			</option>
																																			<option>
																																				Instagram
																																			</option>
																																			<option>
																																				Facebook
																																			</option>
																																			<option>
																																				Google
																																			</option>
																																		</select>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>
																										</div>

																										<div class="start-date">
																											<div
																												class="accordion md-accordion"
																												id="accordionEx"
																												role="tablist"
																												aria-multiselectable="true"
																											>
																												<div class="card">
																													<div
																														class="card-header"
																														role="tab"
																														id="headingOne6"
																													>
																														<a
																															data-toggle="collapse"
																															data-parent="#accordionEx"
																															href="#collapseOne8"
																															aria-expanded="true"
																															aria-controls="collapseOne7"
																														>
																															<div class="headingdiv">
																																Add a Note{' '}
																																<i class="fas fa-angle-down rotate-icon"></i>
																															</div>
																														</a>
																													</div>
																													<div
																														id="collapseOne8"
																														class="collapse show"
																														role="tabpanel"
																														aria-labelledby="headingOne7"
																														data-parent="#accordionEx"
																													>
																														<div class="card-body">
																															<div class="form-bgclr">
																																<div class="form-row">
																																	<div class="form-group col-md-4">
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder=""
																																			name="note"
																																			value={
																																				note
																																			}
																																			onChange={
																																				handleOnChange
																																			}
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
																							<div class="fotercontent">
																								<div class="form-buttons-w">
																									<div className="row">
																										<div className="col-md-9">
																											<button
																												type="submit"
																												onClick={() =>
																													deleteStudentRecord()
																												}
																												class="btn btn-danger btn-secondary"
																											>
																												Delete
																											</button>
																										</div>
																										<div className="col-md-3">
																											<input
																												type="submit"
																												name="Save"
																												class="btn float-right btn-primary getin-btn"
																												value="Save"
																											/>
																										</div>
																									</div>
																								</div>
																							</div>
																						</form>
																					</Modal.Body>
																				</div>
																			</div>
																		</div>
																	</Modal>
																</div>
															</td>
														</tr>
													))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/*-- commantable end here --*/}
			</div>
		</div>
	);
};
