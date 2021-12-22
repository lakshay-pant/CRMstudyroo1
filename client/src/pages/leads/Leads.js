import Modal from 'react-bootstrap/Modal';
import './LeadsStyle.css';

import React, { useState, useEffect, useRef } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import ModalBody from 'react-bootstrap/ModalBody';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addLead } from './addLeadAction';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import { fetchAllLeads } from './showLeadAction';
import { fetchSingleLead } from './getSingleLeadAction';
import { leadTask } from './leadTaskAction';
import { deleteLead } from './deleteLeadAction';
import { deleteUserLeadTask } from './deleteUserLeadTaskAction';
import { addLeadResetSuccessMSg } from './addLeadSlice';
import { deleteTask } from './deleteTaskAction';
import { deleteLeadTask } from './deleteLeadTaskAction';
import { editLeadTask } from './updateLeadTaskAction';
import { editLead } from './editLeadAction';
import { addStudent } from '../../components/add-student-form/addStudentAction';
import { userLeadTask } from './putTaskInUserAction';
import { addLeadTaskD } from './daddLeadTaskAction';
import { fetchAllLeadTaskD } from './dGetLeadTaskAction';
import { editLeadTaskD } from './dEditLeadTaskAction';
import { deleteLeadTaskD } from './dDeleteLeadTaskAction';
import { deleteLeadTaskDust } from './deleteLeadDustTaskAction';
import { editLeadResetMessage } from './editLeadSlice';
import {
	filterSearchUser,
	fetchAllUsers,
} from '../../components/getAllTheUsers/getUsersAction';

import { editUserLeadTask } from './editUserTaskAction';

import Moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Leads = () => {
	const { isLoadingLead, statusLead, messageLead } = useSelector(
		(state) => state.addLead
	);

	const { isLoadingEditLeadTask, statusEditLeadTask, messageEditLeadTask } =
		useSelector((state) => state.updateLeadTask);

	const myRef = useRef(null);
	const executeScroll = () => scrollToRef(myRef);

	const { leads, isLoadingShowlead, error } = useSelector(
		(state) => state.leadList
	);

	const {
		isLoadingDeleteLeadTask,
		statusDeleteLeadTask,
		messageDeleteLeadTask,
	} = useSelector((state) => state.deleteLeadTask);

	const { users } = useSelector((state) => state.getUser);

	const { lead, isLoadingShowSingleLead, errorSingleLead } = useSelector(
		(state) => state.singleLead
	);

	const { isLoadingLeadEdit, statusLeadEdit, messageLeadEdit } = useSelector(
		(state) => state.editLead
	);

	const { isLoading, status, message } = useSelector(
		(state) => state.addStudent
	);

	const { isLoadingLeadTask, statusLeadTask, messageLeadTask } = useSelector(
		(state) => state.leadTask
	);

	const completedTasks =
		lead &&
		lead.leadTasks.filter(function (lead) {
			return lead.taskCompleted === true;
		});

	const incompletedTasks =
		lead &&
		lead.leadTasks.filter(function (lead) {
			return lead.taskCompleted === false;
		});

	const [isOpen, setIsOpen] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	const [isOpen6, setIsOpen6] = useState(false);
	const [leadFirstName, setLeadFirstName] = useState('');
	const [leadLastName, setLeadLastName] = useState('');
	const [leadMiddleName, setLeadMiddleName] = useState('');
	const [leadOnShoreLocation, setLeadOnShoreLocation] = useState('');
	const [leadOffShoreLocation, setLeadOffShoreLocation] = useState('');
	const [leadLocationStatus, setLeadLocationStatus] = useState('');
	const [leadLevel, setLeadLevel] = useState('');
	const [leadRefferalSource, setLeadRefferalSource] = useState('');
	const [leadOnShorePhone, setLeadOnShorePhone] = useState('');
	const [leadOffShorePhone, setLeadOffShorePhone] = useState('');
	const [leadEmail, setLeadEmail] = useState('');
	const [leadNationality, setLeadNationality] = useState('');
	const [leadGender, setLeadGender] = useState('');
	const [leadBirthday, setLeadBirthday] = useState('');
	const [leadUserName, setLeadUserName] = useState('');
	const [addedAt, setAddedAt] = useState('');
	const [taskStatus, setTaskStatus] = useState('');
	const [taskStartDate, setTaskStartDate] = useState('');
	const [taskEndDate, setTaskEndDate] = useState('');
	const [taskNote, setTaskNote] = useState('');
	const [assignee, setAssignee] = useState('');
	const [taskCompleted, setTaskCompleted] = useState(false);
	const [statusNote, setStatusNote] = useState('');
	const [leadId, setLeadId] = useState('');
	const [taskEndTime, setTaskEndTime] = useState('');
	const [taskStartTime, setTaskStartTime] = useState('');
	const [leadTaskId, setLeadTaskId] = useState('');
	const [firstName, setFirstName] = useState('lucky');
	const [middleName, setMiddleName] = useState('chand');
	const [lastName, setLastName] = useState('pant');
	const [birthday, setBirthday] = useState();
	const [genders, setGenders] = useState('Male');
	const [nation, setNation] = useState('indian');
	const [onShorePhone, setOnShorePhone] = useState('999999');
	const [offShorePhone, setOffShorePhone] = useState('999999');
	const [email, setEmail] = useState('pant@gmail.com');
	const [salesPipeline, setSalesPipeline] = useState('OnShore');
	const [salesStatus, setSalesStatus] = useState('Inquiry Recieved');
	const [heatLevel, setHeatLevel] = useState('Very Hot');
	const [note, setNote] = useState('sss');
	const [visaExpiryDate, setVisaExpiryDate] = useState('ssss');
	const [visaType, setVisaType] = useState('Any');
	const [visaComments, setVisaComments] = useState('sss');
	const [insuranceStartDate, setInsuranceStartDate] = useState('ss');
	const [insuranceExpiryDate, setInsuranceExpiryDate] = useState('ss');
	const [insuranceType, setInsuranceType] = useState(
		'Single(Just for the student)'
	);
	const [insuranceNumber, setInsuranceNumber] = useState('sdsdsdsd');
	const [insuranceComment, setInsuranceComment] = useState('sdsd');
	const [otherComments, setOtherComments] = useState('sds');
	const [referalSource, setReferalSource] = useState('Unkown');
	const [instituteName, setInstituteName] = useState('sdsd');
	const [gpa, setGpa] = useState('ss');
	const [yearLevel, setYearLevel] = useState('sss');
	const [schoolCurriculum, setSchoolCurriculum] = useState('sss');
	const [schoolCurriculumDetails, setSchoolCurriculumDetails] = useState('sss');
	const [passNumber, setPassNumber] = useState('sss');
	const [passNationality, setPassNationality] = useState('sss');
	const [passIssueDate, setPassIssueDate] = useState('ccc');
	const [passExpiryDate, setPassExpiryDate] = useState('sss');
	const [grantDate, setGrantDate] = useState('ccc');
	const [offShoreAdress, setOffShoreAdress] = useState('ss');
	const [offShoreLocation, setOffShoreLocation] = useState('aa');
	const [offShoreUnitNumber, setOffShoreUnitNumber] = useState('gg');
	const [offShoreStreetNumber, setOffShoreStreetNumber] = useState('ww');
	const [streetNa, setStreetNa] = useState('gfgg');
	const [passComments, setPassComments] = useState('jjj');
	const [locationStatus, setLocationStatus] = useState('onShore');

	const [offShoreCity, setOffShoreCity] = useState('XYZ');
	const [offShoreCountry, setOffShoreCountry] = useState('India');
	const [offShoreZipCode, setOffShoreZipCode] = useState('ggg');
	const [usi, setUsi] = useState('ggg');
	const [educationLevel, setEducationLevel] = useState('gg');
	const [offShoreCurrentLocation, setOffShoreCurrentLocation] = useState('gg');
	const [onShoreAddress, setOnShoreAddress] = useState('gg');
	const [onShoreLocation, setOnShoreLocation] = useState('gg');
	const [onShoreCurrentLocation, setOnShoreCurrentLocation] = useState('gg');
	const [unitNumber, setUnitNumber] = useState('gggg');
	const [streetNumber, setStreetNumber] = useState('gggg');
	const [streetName, setStreetName] = useState('gg');
	const [city, setCity] = useState('XYZ');
	const [country, setCountry] = useState('India');
	const [zipCode, setZipCode] = useState('gggg');
	const [userId, setUserId] = useState('');
	const [leadTaskUserId, setLeadTaskUserId] = useState('');
	const [leadUserId, setLeadUserId] = useState('');
	const [optionsUsers, setUserOptions] = useState([]);
	const [displayUsers, setDisplayUsers] = useState(false);
	const wrapperRef = useRef(null);

	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		switch (name) {
			case 'leadFirstName':
				setLeadFirstName(value);
				break;

			case 'leadMiddleName':
				setLeadMiddleName(value);
				break;

			case 'leadLastName':
				setLeadLastName(value);
				break;

			case 'leadOnShoreLocation':
				setLeadOnShoreLocation(value);
				break;

			case 'leadOffShoreLocation':
				setLeadOffShoreLocation(value);

				break;

			case 'leadLocationStatus':
				setLeadLocationStatus(value);

				break;

			case 'leadLevel':
				setLeadLevel(value);
				break;

			case 'leadRefferalSource':
				setLeadRefferalSource(value);
				break;

			case 'leadOnShorePhone':
				setLeadOnShorePhone(value);
				break;

			case 'leadOffShorePhone':
				setLeadOffShorePhone(value);
				break;

			case 'leadEmail':
				setLeadEmail(value);
				break;

			case 'leadNationality':
				setLeadNationality(value);
				break;

			case 'leadGender':
				setLeadGender(value);
				break;

			case 'leadBirthday':
				setLeadBirthday(value);
				break;

			case 'statusNote':
				setStatusNote(value);
				break;

			case 'taskStartDate':
				setTaskStartDate(value);
				break;

			case 'taskEndDate':
				setTaskEndDate(value);
				break;

			case 'taskNote':
				setTaskNote(value);
				break;

			case 'assignee':
				setAssignee(value);
				break;

			case 'taskStartTime':
				setTaskStartTime(value);
				break;

			case 'taskEndTime':
				setTaskEndTime(value);
				break;

			case 'firstName':
				setFirstName(value);
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

			default:
				break;
		}
	};

	const deleteLeadRecord = async () => {
		await dispatch(deleteLead(leadId));

		await dispatch(deleteLeadTaskDust(leadUserId));
		await showAddedLeads();
		await dispatch(fetchAllLeadTaskD());

		await dispatch(fetchAllUsers());
		hideModal();
	};

	const deleteTaskRecord = async () => {
		console.log('USER NE', userId);
		console.log('USER NE');
		await dispatch(deleteLeadTask(leadId, leadTaskId));
		await dispatch(deleteUserLeadTask(userId, leadTaskUserId));
		await dispatch(deleteLeadTaskD(leadTaskUserId));
		await dispatch(fetchAllLeadTaskD());
		await showAddedLeads();
		await dispatch(fetchAllUsers());
	};

	const showAddedLeads = () => {
		dispatch(fetchAllLeads());
	};

	const handleOnLeadTaskSubmit = async (e) => {
		e.preventDefault();

		const newLeadTask = {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,
			assignee,
			taskCompleted,
			taskStartTime,
			taskEndTime,
			leadTaskUserId: uuidv4(),
			userId,
			leadUserId,
		};

		await dispatch(leadTask(newLeadTask, leadId));

		await dispatch(userLeadTask(newLeadTask, userId));

		await dispatch(addLeadTaskD(newLeadTask));
		await dispatch(fetchAllLeadTaskD());

		await dispatch(fetchAllUsers());

		await dispatch(fetchSingleLead(leadId));
		await showAddedLeads();

		if (taskCompleted === true) {
			setTaskCompleted(false);
		}
	};

	const editCompletedLeadTask = async (e) => {
		e.preventDefault();

		const newLeadTask = {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,

			taskCompleted,
			taskStartTime,
			taskEndTime,
		};
		console.log('user ki id ka saki naka', userId);
		console.log('user ki id ka ssssaki naka', leadTaskUserId);
		await dispatch(editLeadTask(newLeadTask, leadId, leadTaskId));
		await dispatch(editUserLeadTask(newLeadTask, userId, leadTaskUserId));
		await dispatch(editLeadTaskD(newLeadTask, leadTaskUserId));
		await dispatch(fetchAllLeadTaskD());
		await dispatch(fetchAllUsers());
		await dispatch(fetchSingleLead(leadId));
		await showAddedLeads();
		if (taskCompleted === true) {
			setTaskCompleted(false);
		}
		hideModal5();
	};

	const editIncompletedLeadTask = async (e) => {
		e.preventDefault();

		const newLeadTask = {
			statusNote,
			taskStatus,
			taskStartDate,
			taskEndDate,
			taskNote,

			taskCompleted,
			taskStartTime,
			taskEndTime,
		};

		console.log('nana pyaar', userId);
		console.log('nana pyaar 2', leadTaskUserId);
		await dispatch(editLeadTask(newLeadTask, leadId, leadTaskId));
		await dispatch(editUserLeadTask(newLeadTask, userId, leadTaskUserId));
		await dispatch(editLeadTaskD(newLeadTask, leadTaskUserId));
		await dispatch(fetchAllLeadTaskD());
		await dispatch(fetchAllUsers());
		await dispatch(fetchSingleLead(leadId));
		await showAddedLeads();
		if (taskCompleted === true) {
			setTaskCompleted(false);
		}
		hideModal3();
	};

	const handleOnStudentSubmit = async (e) => {
		e.preventDefault();

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
		dispatch(addStudent(newStudent));

		console.log(
			firstName,
			lastName,
			email,
			birthday,
			middleName,
			genders,
			nation,
			onShorePhone,
			offShorePhone,
			note,
			salesPipeline,
			salesStatus,
			heatLevel,
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
			referalSource
		);
	};

	const handleOnLeadSubmit = async (e) => {
		e.preventDefault();

		const newLead = {
			leadFirstName,
			leadMiddleName,
			leadLastName,
			leadBirthday,
			leadGender,
			leadNationality,
			leadEmail,
			leadOnShorePhone,
			leadOffShorePhone,
			leadLevel,
			leadOnShoreLocation,
			leadOffShoreLocation,
			leadRefferalSource,
			leadLocationStatus,
		};

		console.log('new lead st', newLead);

		await dispatch(addLead(newLead));
		await showAddedLeads();
	};

	const editFullLead = async (e) => {
		e.preventDefault();

		const newLead = {
			leadFirstName,
			leadMiddleName,
			leadLastName,
			leadBirthday,
			leadGender,
			leadNationality,
			leadEmail,
			leadOnShorePhone,
			leadOffShorePhone,
			leadLevel,
			leadOnShoreLocation,
			leadOffShoreLocation,
			leadRefferalSource,
			leadLocationStatus,
		};

		await dispatch(editLead(newLead, leadId));
		await showAddedLeads();
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [editFullLead]);

	const showModal = (item) => {
		setIsOpen(true);
		dispatch(fetchSingleLead(item._id));
		setLeadUserId(item._id);

		setUserId(item.leadTasks.userId);
		setLeadTaskUserId(item.leadTasks.leadTaskUserId);
		setLeadFirstName(item.leadFirstName);
		setLeadMiddleName(item.leadMiddleName);
		setLeadLastName(item.leadLastName);
		setLeadEmail(item.leadEmail);
		setLeadGender(item.leadGender);
		setLeadOnShoreLocation(item.leadOnShoreLocation);
		setLeadOffShoreLocation(item.leadOffShoreLocation);
		setLeadNationality(item.leadNationality);
		setLeadOffShorePhone(item.leadOffShorePhone);
		setLeadOnShorePhone(item.leadOnShorePhone);
		setLeadLevel(item.leadLevel);
		setLeadLocationStatus(item.leadLocationStatus);
		setLeadBirthday(item.leadBirthday);
		setLeadRefferalSource(item.leadRefferalSource);
		setAddedAt(item.addedAt);
		setLeadUserName(item.leadUserName);
		setLeadId(item._id);
	};

	const showModal2 = () => {
		setIsOpen2(true);
	};

	const hideModal = () => {
		setLeadFirstName('');
		setLeadMiddleName('');
		setLeadLastName('');
		setLeadEmail('');
		setLeadGender('');
		setLeadOnShoreLocation('');
		setLeadOffShoreLocation('');
		setLeadNationality('');
		setLeadOffShorePhone('');
		setLeadOnShorePhone('');
		setLeadLevel('');
		setLeadLocationStatus('');
		setLeadBirthday('');
		setLeadRefferalSource('');
		setAddedAt('');
		setLeadUserName('');
		setIsOpen(false);
	};
	const hideModal2 = () => {
		dispatch(addLeadResetSuccessMSg());
		setLeadFirstName('');
		setLeadMiddleName('');
		setLeadLastName('');
		setLeadEmail('');
		setLeadGender('');
		setLeadOnShoreLocation('');
		setLeadOffShoreLocation('');
		setLeadNationality('');
		setLeadOffShorePhone('');
		setLeadOnShorePhone('');
		setLeadLevel('');
		setLeadLocationStatus('');
		setLeadBirthday('');
		setLeadRefferalSource('');
		setAddedAt('');
		setLeadUserName('');
		setIsOpen2(false);
	};

	const showModal3 = (item) => {
		setIsOpen3(true);

		setLeadTaskId(item._id);
		setTaskStatus(item.taskStatus);
		setStatusNote(item.statusNote);
		setTaskStartDate(item.taskStartDate);
		setTaskStartTime(item.taskStartTime);
		setTaskEndDate(item.taskEndDate);
		setTaskEndTime(item.taskEndTime);
		setTaskNote(item.taskNote);
		setTaskCompleted(item.taskCompleted);

		setUserId(item.userId);
		setLeadTaskUserId(item.leadTaskUserId);
	};

	const hideModal3 = () => {
		setIsOpen3(false);
	};

	const showModal4 = () => {
		setIsOpen4(true);
	};

	const hideModal4 = () => {
		setIsOpen4(false);
	};

	const showModal5 = (item) => {
		setIsOpen5(true);
		setLeadTaskId(item._id);
		setTaskStatus(item.taskStatus);
		setStatusNote(item.statusNote);
		setTaskStartDate(item.taskStartDate);
		setTaskStartTime(item.taskStartTime);
		setTaskEndDate(item.taskEndDate);
		setTaskEndTime(item.taskEndTime);
		setTaskNote(item.taskNote);
		setTaskCompleted(item.taskCompleted);

		setUserId(item.userId);
		setLeadTaskUserId(item.leadTaskUserId);
	};

	const hideModal5 = () => {
		setIsOpen5(false);
	};

	const showModal6 = (item) => {
		setIsOpen6(true);

		setLeadFirstName(item.leadFirstName);
		setLeadMiddleName(item.leadMiddleName);
		setLeadLastName(item.leadLastName);
		setLeadEmail(item.leadEmail);
		setLeadGender(item.leadGender);
		setLeadOnShoreLocation(item.leadOnShoreLocation);
		setLeadOffShoreLocation(item.leadOffShoreLocation);
		setLeadNationality(item.leadNationality);
		setLeadOffShorePhone(item.leadOffShorePhone);
		setLeadOnShorePhone(item.leadOnShorePhone);
		setLeadLevel(item.leadLevel);
		setLeadLocationStatus(item.leadLocationStatus);
		setLeadBirthday(item.leadBirthday);
		setLeadRefferalSource(item.leadRefferalSource);
		setAddedAt(item.addedAt);
		setLeadUserName(item.leadUserName);
		setLeadId(item._id);
	};

	const hideModal6 = () => {
		dispatch(editLeadResetMessage());
		setIsOpen6(false);

		setLeadFirstName('');
		setLeadMiddleName('');
		setLeadLastName('');
		setLeadEmail('');
		setLeadGender('');
		setLeadOnShoreLocation('');
		setLeadOffShoreLocation('');
		setLeadNationality('');
		setLeadOffShorePhone('');
		setLeadOnShorePhone('');
		setLeadLevel('');
		setLeadLocationStatus('');
		setLeadBirthday('');
		setLeadRefferalSource('');
		setAddedAt('');
		setLeadUserName('');
		setLeadId('');
	};

	useEffect(() => {
		if (!users.length) {
			dispatch(fetchAllUsers());
		}
		setUserOptions(users);
	}, [users, dispatch]);

	useEffect(() => {
		if (!leads.length) {
			dispatch(fetchAllLeads());
		}
	}, [dispatch]);

	useEffect(() => {
		showAddedLeads();
	}, []);

	useEffect(() => {
		fetchAllLeadTaskD();
	}, []);

	useEffect(() => {
		dispatch(fetchSingleLead(leadId));
	}, []);

	useEffect(() => {
		messageLead && dispatch(addLeadResetSuccessMSg());
	}, [dispatch]);

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
	const updateUser = (user) => {
		setDisplayUsers(false);
		setAssignee(user.firstName);
		setUserId(user._id);
	};

	return (
		<div className="content-wrapper">
			<div className="maincontent-rightside student-view add-student uncategorized">
				{/*--main-content start--*/}
				<section className="maincontent">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12 col-12">
								<div className="add-student">
									<div className="add-text">
										<div className="add-round">
											<span>
												<i className="fa fa-tasks"></i>
											</span>
										</div>
										<small>Leads</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* --main-content end--*/}

				{/*--student-leads start--*/}
				<div class="student-leads leads-page">
					<div class="container-fluid">
						<div class="leads">
							<div class="row">
								<div class="col-md-6 col-12">
									<div class="student-lead">
										<button class="cmn_btn filter-box" onClick={showModal2}>
											Add Lead
										</button>
									</div>

									{/*modal-body--*/}
									<div
										class="modal fade filters-modal show"
										id="task"
										aria-modal="true"
									>
										<Modal show={isOpen2} onHide={hideModal2}>
											<Modal.Body>
												<div
													class="modal-dialog modal-lg add-leads"
													role="document"
												>
													{messageLead && (
														<Alert
															variant={
																statusLead === 'success' ? 'success' : 'danger'
															}
														>
															{messageLead}
														</Alert>
													)}

													<div class="modal-content ">
														<div class="modal-top leads-top">
															<h5>Add Lead</h5>
															<button
																type="button"
																class="close"
																data-dismiss="modal"
																aria-label="Close"
																onClick={hideModal2}
															>
																&times;
															</button>
														</div>

														<div class="modal-body">
															<form onSubmit={handleOnLeadSubmit}>
																{' '}
																<div class="student-filter-area">
																	<div class="row">
																		<div class="col-lg-12 col-12">
																			<div class="update-crm add-leads">
																				<div class="row">
																					<div class="col-md-6 col-12">
																						<div class="form-row">
																							<div class="form-group col-md-12 col-12">
																								<label>First Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="leadFirstName"
																									value={leadFirstName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Middle Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="leadMiddleName"
																									value={leadMiddleName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Last Name</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="leadLastName"
																									value={leadLastName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Location Status</label>
																								<select
																									class="form-control"
																									name="leadLocationStatus"
																									value={leadLocationStatus}
																									id="cars"
																									onChange={handleOnChange}
																								>
																									<option>OnShore</option>
																									<option>OffShore</option>
																								</select>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>OnShore(Location)</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="leadOnShoreLocation"
																									value={leadOnShoreLocation}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>
																									OffShore(Location)
																								</label>

																								<input
																									type="text"
																									class="form-control input-field"
																									placeholder=""
																									name="leadOffShoreLocation"
																									value={leadOffShoreLocation}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Lead Level</label>
																								<select
																									class="form-control"
																									id="cars"
																									name="leadLevel"
																									value={leadLevel}
																									onChange={handleOnChange}
																								>
																									<option>Very Hot</option>
																									<option>Hot</option>
																									<option>Cold</option>
																									<option>Warm</option>
																								</select>
																							</div>

																							<div class="form-group col-md-12 col-12">
																								<label>Referral source </label>
																								<select
																									class="form-control"
																									name="leadRefferalSource"
																									value={leadRefferalSource}
																									onChange={handleOnChange}
																								>
																									<option>unknown</option>
																									<option>Youtube</option>
																									<option>Instagram</option>
																									<option>Facebook</option>
																									<option>Google</option>
																								</select>
																							</div>
																						</div>
																					</div>

																					<div class="col-md-6 col-12 person-area">
																						<div class="person">
																							<div class="heading">
																								<i class="fa fa-user"></i>
																								<span>Person</span>
																							</div>
																							<div class="row">
																								<div class="form-group col-md-6 col-6 left">
																									<label>OffShorePhone</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="leadOffShorePhone"
																										value={leadOffShorePhone}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>OnShorePhone</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="leadOnShorePhone"
																										value={leadOnShorePhone}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="col-md-6 col-6 form-group left">
																									<label>Gender</label>
																									<select
																										class="form-control"
																										id="cars"
																										name="leadGender"
																										value={leadGender}
																										onChange={handleOnChange}
																									>
																										<option>Male</option>
																										<option>Female</option>
																										<option>Others</option>
																									</select>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>Email</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="leadEmail"
																										value={leadEmail}
																										onChange={handleOnChange}
																									/>
																								</div>
																								<div class="form-group col-md-6 col-6 left">
																									<label>Nationality</label>
																									<input
																										type="text"
																										class="form-control"
																										placeholder=""
																										name="leadNationality"
																										value={leadNationality}
																										onChange={handleOnChange}
																									/>
																								</div>

																								<div class="form-group col-md-6 col-6 left">
																									<label>Birthdate</label>
																									<input
																										type="date"
																										class="form-control"
																										placeholder=""
																										name="leadBirthday"
																										value={leadBirthday}
																										onChange={handleOnChange}
																									/>
																								</div>
																								{isLoadingLead && (
																									<Spinner
																										variant="primary"
																										animation="border"
																									/>
																								)}
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
																	{/*<!-- Modal -->*/}
																</div>
															</form>
														</div>
													</div>
												</div>
											</Modal.Body>
										</Modal>
									</div>
								</div>
								<div class="col-md-6 col-12">
									<form class="activform ml-auto">
										<div class="form-row">
											<div class="form-group">
												<div class="activi-inputs">
													<select class="form-control filter-box">
														<option>Amount Of Leads</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>

													<select class="form-control filter-box">
														<option>Lead Source</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>

													<select class="form-control filter-box">
														<option>Lead Priority</option>
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
							</div>
						</div>
					</div>
				</div>
				{/*--student-leads start--*/}

				{/*-- commantable --*/}
				<div class="commantablesection uncategorized-list lead-page-list">
					<div class="container-fluid">
						<div class="row">
							<div class="col-md-12">
								<div class="stuednttable table-responsive">
									<table class="table">
										<thead>
											<tr>
												<th>NAME</th>
												<th>Gender</th>
												<th>Nationality</th>
												<th>Location Status</th>
												<th>PHONE</th>
												<th>Email</th>
												<th>Birthday</th>
												<th>Priority</th>
												<th>Created Date</th>
												<th>Created Time</th>
												<th>Assignee</th>
												<th>Refferal Source</th>
											</tr>
										</thead>
										<tbody>
											{leads
												.slice(0)
												.reverse()
												.map((item) => (
													<tr key={item.id}>
														{' '}
														<td onClick={() => showModal(item)}>
															{item.leadFirstName}
														</td>
														<td>{item.leadGender}</td>
														<td>{item.leadNationality}</td>
														<td>{item.leadLocationStatus}</td>
														<td>
															onShoreNO:-{item.leadOnShorePhone}
															<br />
															offShoreNo:-{item.leadOffShorePhone}
														</td>
														<td>{item.leadEmail}</td>
														<td>{item.leadBirthday}</td>
														<td>{item.leadLevel}</td>
														<td>{Moment(item.addedAt).format('DD/MM/YYYY')}</td>
														<td>{Moment(item.addedAt).format('HH:mm:ss')}</td>
														<td>{item.leadUserName}</td>
														<td>JEE</td>
														<td>
															<div class="action">
																<a onClick={() => showModal6(item)}>
																	<i class="fas fa-pen"></i>
																</a>
															</div>
														</td>
													</tr>
												))}
										</tbody>
									</table>

									<div
										class="modal fade filters-modal show "
										id="leadsFilter"
										aria-modal="true"
									>
										<Modal show={isOpen} onHide={hideModal}>
											<Modal.Body class="myleadsfilter">
												<div
													class="accordion md-accordion"
													id="accordionEx"
													role="tablist"
													aria-multiselectable="true"
												>
													<div class="card">
														<div role="tab" id="leadspopup">
															<a
																data-toggle="collapse"
																data-parent="#accordionEx"
																href="#leadspopup1"
																aria-expanded="true"
																aria-controls="leadspopup1"
															>
																<div class="arrow">
																	<i class="fas fa-angle-up"></i>
																	<i class="fas fa-angle-down"></i>
																</div>
															</a>
														</div>

														<div
															id="leadspopup1"
															class="collapse show"
															role="tabpanel"
															aria-labelledby="leadspopup1"
															data-parent="#accordionEx"
														>
															<div class="card-body">
																<div class="row">
																	<div class="col-lg-4 col-12">
																		<div class="leads-area">
																			<div class="lead-detail">
																				<p class="head">{leadFirstName}</p>
																				<hr />
																				<p class="sub">Details</p>
																				<hr />
																				<ul>
																					<li>
																						Name:-{leadFirstName} {leadLastName}
																					</li>
																					<hr />
																					<li>
																						OnShore Phone:-
																						{leadOnShorePhone}
																					</li>
																					<hr />
																					<li>
																						OffShore Phone:-
																						{leadOffShorePhone}
																					</li>
																					<hr />
																					<li>Email:-{leadEmail}</li>
																					<hr />

																					<li>
																						Source:-
																						{leadRefferalSource}
																					</li>
																					<hr />
																					<li>
																						Created Date:-
																						{Moment(addedAt).format('DD')}{' '}
																						{Moment(addedAt).format('MMMM')}{' '}
																						{Moment(addedAt).format('YYYY')}
																					</li>
																					<hr />
																					<li>
																						Created Time:-
																						{Moment(addedAt).format('h:mm a')}
																					</li>
																					<hr />
																					<li>Assignee:{leadUserName}</li>
																					<hr />
																				</ul>
																			</div>
																		</div>
																		<div class="lead-action">
																			<ul>
																				<li>
																					<div class="list-view">
																						<i
																							class="fa fa-ellipsis-h"
																							aria-hidden="true"
																						></i>
																					</div>
																				</li>
																				<li>
																					<div class="delete">
																						<i
																							class="fa fa-trash"
																							aria-hidden="true"
																							onClick={() => deleteLeadRecord()}
																						></i>
																					</div>
																				</li>
																				<li>
																					<div class="convert">
																						<button
																							type="button"
																							class="btn btn-convert"
																							onClick={showModal4}
																						>
																							Convert to deal
																						</button>
																					</div>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg-8 col-12">
																		<div id="leadsFilter">
																			<div class="row">
																				<div class="col-md-12">
																					<div class="notes-area">
																						<Tabs className="react-tabs first">
																							<TabList>
																								<Tab>Notes</Tab>
																								<Tab>Activity 2</Tab>
																							</TabList>

																							<TabPanel>
																								<div class="planned">
																									<div class="row">
																										<div class="col-md-12 col-12">
																											{messageEditLeadTask &&
																												(statusEditLeadTask ===
																												'success' ? (
																													<Alert
																														variant={
																															statusEditLeadTask ===
																															'success'
																																? 'success'
																																: 'danger'
																														}
																													>
																														{
																															messageEditLeadTask
																														}
																													</Alert>
																												) : (
																													''
																												))}

																											{messageDeleteLeadTask && (
																												<Alert
																													variant={
																														statusDeleteLeadTask ===
																														'success'
																															? 'success'
																															: 'danger'
																													}
																												>
																													{
																														messageDeleteLeadTask
																													}
																												</Alert>
																											)}

																											<div class="planner-head">
																												<h5>PLANNED</h5>
																											</div>
																										</div>
																									</div>
																									{incompletedTasks &&
																									incompletedTasks.length ? (
																										incompletedTasks
																											.reverse()
																											.map((incompleteTask) => (
																												<div class="call-area">
																													<div class="row">
																														<div class="col-md-1">
																															<div class="call-icon">
																																<i class="fas fa-inbox"></i>
																															</div>
																														</div>
																														<div class="col-md-10">
																															<div class="main-timeline call">
																																<div class="timeline active">
																																	<a
																																		href="#"
																																		class="timeline-content"
																																	>
																																		<label for="call">
																																			{
																																				incompleteTask.taskStatus
																																			}
																																		</label>
																																		<br />
																																	</a>
																																	<ul>
																																		<li>
																																			{
																																				incompleteTask.taskEndDate
																																			}
																																		</li>
																																		<li>
																																			{
																																				incompleteTask.assignee
																																			}
																																		</li>
																																	</ul>
																																	{incompleteTask.taskNote ? (
																																		<div class="row">
																																			<div class="form-group col-12">
																																				<textarea
																																					name="taskNote"
																																					rows="2"
																																					class="form-control"
																																					placeholder="Add Notes"
																																					value={
																																						incompleteTask.taskNote
																																					}
																																				></textarea>
																																			</div>
																																		</div>
																																	) : null}

																																	<button
																																		class="editleads-icon"
																																		onClick={() =>
																																			showModal3(
																																				incompleteTask
																																			)
																																		}
																																	>
																																		<i
																																			class="fa fa-ellipsis-h"
																																			aria-hidden="true"
																																		></i>
																																	</button>

																																	<div
																																		class="modal fade filters-modal show"
																																		id="leadsupdate"
																																		aria-modal="true"
																																	>
																																		<Modal
																																			show={
																																				isOpen3
																																			}
																																			onHide={
																																				hideModal3
																																			}
																																		>
																																			<div
																																				id="leadsFilter"
																																				class="leadsedit"
																																			>
																																				<div class="notes-area">
																																					<Modal.Body>
																																						<div class="fl-head">
																																							<h5>
																																								{' '}
																																								Edit
																																								activity
																																							</h5>

																																							<button className="close">
																																								<span aria-hidden="true">
																																									&times;
																																								</span>
																																							</button>
																																						</div>

																																						<div class="row">
																																							<div class="col-md-12 col-12">
																																								<form
																																									onSubmit={
																																										editIncompletedLeadTask
																																									}
																																								>
																																									<div class="call-sec">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2"></div>
																																												<div class="col-md-8 col-12">
																																													<div class="meeting-input">
																																														<Tabs>
																																															<TabPanel>
																																																<div
																																																	id="home"
																																																	class="tab-pane active show"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Call"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu1"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Meeting"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu2"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Task"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu3"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Deadline"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu4"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Email"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu5"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Lunch"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabList>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Calling'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-user"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Meeting'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-clock-o"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Task'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-flag"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Deadline'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-paper-plane"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Email'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Lunch'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																															</TabList>
																																														</Tabs>
																																													</div>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									{isLoadingDeleteLeadTask && (
																																										<Spinner
																																											variant="primary"
																																											animation="border"
																																										/>
																																									)}

																																									<div class="date-sec">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2">
																																													<i
																																														class="fa fa-clock-o left-icon"
																																														aria-hidden="true"
																																													></i>
																																												</div>
																																												<div class="col-md-8 col-12">
																																													<div class="time-area">
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskStartDate"
																																															value={
																																																taskStartDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>

																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskStartTime"
																																															value={
																																																taskStartTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskEndDate"
																																															value={
																																																taskEndDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>
																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskEndTime"
																																															value={
																																																taskEndTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																													</div>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="add-note">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2">
																																													<i
																																														class="fa fa-sticky-note left-icon"
																																														aria-hidden="true"
																																													></i>
																																												</div>

																																												<div class="col-md-8 col-12">
																																													<textarea
																																														name="taskNote"
																																														value={
																																															taskNote
																																														}
																																														onChange={
																																															handleOnChange
																																														}
																																														rows="4"
																																														class="form-control"
																																														placeholder="Add Notes"
																																													></textarea>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="form-foot">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-6 col-12 save-area">
																																													<button
																																														class="btn btn-save"
																																														onClick={
																																															deleteTaskRecord
																																														}
																																													>
																																														Delete
																																													</button>
																																												</div>

																																												<div class="col-md-6 col-12 save-area">
																																													<div class="done">
																																														<input
																																															type="checkbox"
																																															id="vehicle1"
																																															onChange={(
																																																e
																																															) =>
																																																setTaskCompleted(
																																																	e
																																																		.target
																																																		.checked
																																																)
																																															}
																																														/>
																																														<label>
																																															Mark
																																															as
																																															Done
																																														</label>
																																													</div>

																																													<input
																																														type="submit"
																																														name="Save"
																																														class="btn btn-save"
																																														onClick={
																																															hideModal3
																																														}
																																													/>
																																												</div>
																																											</div>
																																										</div>
																																									</div>
																																								</form>
																																							</div>
																																						</div>
																																					</Modal.Body>
																																				</div>
																																			</div>

																																			<Modal.Footer></Modal.Footer>
																																		</Modal>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											))
																									) : (
																										<p>No task found</p>
																									)}
																								</div>

																								<div class="done">
																									<div class="row">
																										<div class="col-md-12 col-12">
																											<div class="planner-head">
																												<h5>Done</h5>
																											</div>
																										</div>
																									</div>
																									{isLoadingEditLeadTask && (
																										<Spinner
																											variant="primary"
																											animation="border"
																										/>
																									)}

																									{completedTasks &&
																									completedTasks.length ? (
																										completedTasks
																											.reverse()
																											.map((completeTask) => (
																												<div class="call-area">
																													<div class="row">
																														<div class="col-md-1">
																															<div class="call-icon">
																																<i class="fas fa-inbox"></i>
																															</div>
																														</div>
																														<div class="col-md-11">
																															<div class="main-timeline call meeting">
																																<div class="timeline active">
																																	<a
																																		href="#"
																																		class="timeline-content"
																																	>
																																		<label for="call">
																																			{
																																				completeTask.taskStatus
																																			}
																																		</label>
																																		<br />
																																	</a>
																																	<ul>
																																		<li>
																																			{
																																				completeTask.taskEndDate
																																			}
																																		</li>
																																		<li>
																																			{
																																				completeTask.assignee
																																			}
																																		</li>
																																	</ul>
																																	{completeTask.taskNote ? (
																																		<div class="row">
																																			<div class="form-group col-12">
																																				<textarea
																																					name="taskNote"
																																					rows="2"
																																					class="form-control"
																																					placeholder="Add Notes"
																																					value={
																																						completeTask.taskNote
																																					}
																																				></textarea>
																																			</div>
																																		</div>
																																	) : null}

																																	<button
																																		class="editleads-icon"
																																		onClick={() =>
																																			showModal5(
																																				completeTask
																																			)
																																		}
																																	>
																																		<i
																																			class="fa fa-ellipsis-h"
																																			aria-hidden="true"
																																		></i>
																																	</button>

																																	<div
																																		class="modal fade filters-modal show"
																																		id="leadsupdate"
																																		aria-modal="true"
																																	>
																																		<Modal
																																			show={
																																				isOpen5
																																			}
																																			onHide={
																																				hideModal5
																																			}
																																		>
																																			<div
																																				id="leadsFilter"
																																				class="leadsedit"
																																			>
																																				<div class="notes-area">
																																					<Modal.Body>
																																						<div class="fl-head">
																																							<h5>
																																								{' '}
																																								Edit
																																								activity
																																							</h5>
																																							<button
																																								onClick={
																																									hideModal5
																																								}
																																								className="close"
																																							>
																																								<span aria-hidden="true">
																																									&times;
																																								</span>
																																							</button>
																																						</div>

																																						<div class="row">
																																							<div class="col-md-12 col-12">
																																								<form
																																									onSubmit={
																																										editCompletedLeadTask
																																									}
																																								>
																																									<div class="call-sec">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2"></div>
																																												<div class="col-md-8 col-12">
																																													<div class="meeting-input">
																																														<Tabs>
																																															<TabPanel>
																																																<div
																																																	id="home"
																																																	class="tab-pane active show"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Call"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu1"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Meeting"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu2"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Task"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu3"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Deadline"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu4"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Email"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabPanel>
																																																<div
																																																	id="menu5"
																																																	class="tab-pane"
																																																>
																																																	<input
																																																		type="text"
																																																		class="form-control"
																																																		placeholder="Lunch"
																																																		name="statusNote"
																																																		value={
																																																			statusNote
																																																		}
																																																		onChange={
																																																			handleOnChange
																																																		}
																																																	/>
																																																</div>
																																															</TabPanel>
																																															<TabList>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Calling'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-user"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Meeting'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-clock-o"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Task'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-flag"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Deadline'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-paper-plane"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Email'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																																<Tab>
																																																	<div class="icon-bg">
																																																		<i
																																																			class="fa fa-phone"
																																																			aria-hidden="true"
																																																			onClick={() =>
																																																				setTaskStatus(
																																																					'Lunch'
																																																				)
																																																			}
																																																		></i>
																																																	</div>
																																																</Tab>
																																															</TabList>
																																														</Tabs>
																																													</div>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="date-sec">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2">
																																													<i
																																														class="fa fa-clock-o left-icon"
																																														aria-hidden="true"
																																													></i>
																																												</div>
																																												<div class="col-md-8 col-12">
																																													<div class="time-area">
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskStartDate"
																																															value={
																																																taskStartDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>

																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskStartTime"
																																															value={
																																																taskStartTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																														<input
																																															type="date"
																																															class="form-control"
																																															placeholder="Date"
																																															name="taskEndDate"
																																															value={
																																																taskEndDate
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														/>
																																														<select
																																															class="form-control"
																																															id="time"
																																															name="taskEndTime"
																																															value={
																																																taskEndTime
																																															}
																																															onChange={
																																																handleOnChange
																																															}
																																														>
																																															<option>
																																																12:00
																																																AM
																																															</option>
																																															<option>
																																																12:15
																																																AM
																																															</option>
																																															<option>
																																																12:30
																																																AM
																																															</option>
																																															<option>
																																																12:45
																																																AM
																																															</option>
																																															<option>
																																																1:00
																																																AM
																																															</option>
																																															<option>
																																																1:15
																																																AM
																																															</option>
																																															<option>
																																																1:30
																																																AM
																																															</option>
																																															<option>
																																																1:45
																																																AM
																																															</option>
																																															<option>
																																																2:00
																																																AM
																																															</option>
																																															<option>
																																																2:15
																																																AM
																																															</option>
																																															<option>
																																																2:30
																																																AM
																																															</option>
																																															<option>
																																																2:45
																																																AM
																																															</option>
																																															<option>
																																																3:00
																																																AM
																																															</option>
																																															<option>
																																																3:15
																																																AM
																																															</option>
																																															<option>
																																																3:30
																																																AM
																																															</option>
																																															<option>
																																																3:45
																																																AM
																																															</option>
																																															<option>
																																																4:00
																																																AM
																																															</option>
																																															<option>
																																																4:15
																																																AM
																																															</option>
																																															<option>
																																																4:30
																																																AM
																																															</option>
																																															<option>
																																																4:45
																																																AM
																																															</option>
																																															<option>
																																																5:00
																																																AM
																																															</option>
																																															<option>
																																																5:15
																																																AM
																																															</option>
																																															<option>
																																																5:30
																																																AM
																																															</option>
																																															<option>
																																																5:45
																																																AM
																																															</option>
																																															<option>
																																																6:00
																																																AM
																																															</option>
																																															<option>
																																																6:15
																																																AM
																																															</option>
																																															<option>
																																																6:30
																																																AM
																																															</option>
																																															<option>
																																																6:45
																																																AM
																																															</option>
																																															<option>
																																																7:00
																																																AM
																																															</option>
																																															<option>
																																																7:15
																																																AM
																																															</option>
																																															<option>
																																																7:30
																																																AM
																																															</option>
																																															<option>
																																																7:45
																																																AM
																																															</option>
																																															<option>
																																																8:00
																																																AM
																																															</option>
																																															<option>
																																																8:15
																																																AM
																																															</option>
																																															<option>
																																																8:30
																																																AM
																																															</option>
																																															<option>
																																																8:45
																																																AM
																																															</option>
																																															<option>
																																																9:00
																																																AM
																																															</option>
																																															<option>
																																																9:15
																																																AM
																																															</option>
																																															<option>
																																																9:30
																																																AM
																																															</option>
																																															<option>
																																																9:45
																																																AM
																																															</option>
																																															<option>
																																																10:00
																																																AM
																																															</option>
																																															<option>
																																																10:15
																																																AM
																																															</option>
																																															<option>
																																																10:30
																																																AM
																																															</option>
																																															<option>
																																																10:45
																																																AM
																																															</option>
																																															<option>
																																																11:00
																																																AM
																																															</option>
																																															<option>
																																																11:15
																																																AM
																																															</option>
																																															<option>
																																																11:30
																																																AM
																																															</option>
																																															<option>
																																																11:45
																																																AM
																																															</option>
																																															<option>
																																																12:00
																																																PM
																																															</option>
																																															<option>
																																																12:15
																																																PM
																																															</option>
																																															<option>
																																																12:30
																																																PM
																																															</option>
																																															<option>
																																																12:45
																																																PM
																																															</option>
																																															<option>
																																																1:00
																																																PM
																																															</option>
																																															<option>
																																																1:15
																																																PM
																																															</option>
																																															<option>
																																																1:30
																																																PM
																																															</option>
																																															<option>
																																																1:45
																																																PM
																																															</option>
																																															<option>
																																																2:00
																																																PM
																																															</option>
																																															<option>
																																																2:15
																																																PM
																																															</option>
																																															<option>
																																																2:30
																																																PM
																																															</option>
																																															<option>
																																																2:45
																																																PM
																																															</option>
																																															<option>
																																																3:00
																																																PM
																																															</option>
																																															<option>
																																																3:15
																																																PM
																																															</option>
																																															<option>
																																																3:30
																																																PM
																																															</option>
																																															<option>
																																																3:45
																																																PM
																																															</option>
																																															<option>
																																																4:00
																																																PM
																																															</option>
																																															<option>
																																																4:15
																																																PM
																																															</option>
																																															<option>
																																																4:30
																																																PM
																																															</option>
																																															<option>
																																																4:45
																																																PM
																																															</option>
																																															<option>
																																																5:00
																																																PM
																																															</option>
																																															<option>
																																																5:15
																																																PM
																																															</option>
																																															<option>
																																																5:30
																																																PM
																																															</option>
																																															<option>
																																																5:45
																																																PM
																																															</option>
																																															<option>
																																																6:00
																																																PM
																																															</option>
																																															<option>
																																																6:15
																																																PM
																																															</option>
																																															<option>
																																																6:30
																																																PM
																																															</option>
																																															<option>
																																																6:45
																																																PM
																																															</option>
																																															<option>
																																																7:00
																																																PM
																																															</option>
																																															<option>
																																																7:15
																																																PM
																																															</option>
																																															<option>
																																																7:30
																																																PM
																																															</option>
																																															<option>
																																																7:45
																																																PM
																																															</option>
																																															<option>
																																																8:00
																																																PM
																																															</option>
																																															<option>
																																																8:15
																																																PM
																																															</option>
																																															<option>
																																																8:30
																																																PM
																																															</option>
																																															<option>
																																																8:45
																																																PM
																																															</option>
																																															<option>
																																																9:00
																																																PM
																																															</option>
																																															<option>
																																																9:15
																																																PM
																																															</option>
																																															<option>
																																																9:30
																																																PM
																																															</option>
																																															<option>
																																																9:45
																																																PM
																																															</option>
																																															<option>
																																																10:00
																																																PM
																																															</option>
																																															<option>
																																																10:15
																																																PM
																																															</option>
																																															<option>
																																																10:30
																																																PM
																																															</option>
																																															<option>
																																																10:45
																																																PM
																																															</option>
																																															<option>
																																																11:00
																																																PM
																																															</option>
																																															<option>
																																																11:15
																																																PM
																																															</option>
																																															<option>
																																																11:30
																																																PM
																																															</option>
																																															<option>
																																																11:45
																																																PM
																																															</option>
																																														</select>
																																													</div>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="add-note">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-1 col-2">
																																													<i
																																														class="fa fa-sticky-note left-icon"
																																														aria-hidden="true"
																																													></i>
																																												</div>
																																												<div class="col-md-8 col-12">
																																													<textarea
																																														rows="4"
																																														class="form-control"
																																														placeholder="Add Notes"
																																														name="taskNote"
																																														value={
																																															taskNote
																																														}
																																														onChange={
																																															handleOnChange
																																														}
																																													></textarea>
																																												</div>
																																											</div>
																																										</div>
																																									</div>

																																									<div class="form-foot">
																																										<div class="container">
																																											<div class="row">
																																												<div class="col-md-6 col-12 save-area">
																																													<button
																																														class="btn btn-save"
																																														onClick={
																																															deleteTaskRecord
																																														}
																																													>
																																														Delete
																																													</button>
																																												</div>

																																												<div class="col-md-6 col-12 save-area">
																																													<div class="done">
																																														<input
																																															type="checkbox"
																																															id="vehicle1"
																																															onChange={(
																																																e
																																															) =>
																																																setTaskCompleted(
																																																	e
																																																		.target
																																																		.checked
																																																)
																																															}
																																														/>
																																														<label for="vehicle1">
																																															Mark
																																															as
																																															Done
																																														</label>
																																													</div>

																																													<input
																																														type="submit"
																																														name="Save"
																																														class="btn btn-save"
																																														onClick={
																																															hideModal5
																																														}
																																													/>
																																												</div>
																																											</div>
																																										</div>
																																									</div>
																																								</form>
																																							</div>
																																						</div>
																																					</Modal.Body>
																																				</div>
																																			</div>

																																			<Modal.Footer></Modal.Footer>
																																		</Modal>
																																	</div>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											))
																									) : (
																										<p>No task found</p>
																									)}
																								</div>

																								<div class="lead-created">
																									<div class="call-area">
																										<div class="row">
																											<div class="col-md-11">
																												<div class="main-timeline call created">
																													<div class="timeline active">
																														<a
																															href="#"
																															class="timeline-content"
																														>
																															<label for="call">
																																Lead Created
																															</label>
																															<br />
																															<p class="lead-info">
																																{Moment(
																																	addedAt
																																).format(
																																	'DD'
																																)}{' '}
																																{Moment(
																																	addedAt
																																).format(
																																	'MMMM'
																																)}{' '}
																																{Moment(
																																	addedAt
																																).format(
																																	'YYYY'
																																)}
																																,
																																{Moment(
																																	addedAt
																																).format(
																																	'dddd'
																																)}{' '}
																																at{' '}
																																{Moment(
																																	addedAt
																																).format(
																																	'h:mm a'
																																)}
																															</p>
																														</a>
																													</div>
																												</div>
																											</div>
																										</div>
																									</div>
																								</div>
																							</TabPanel>

																							<TabPanel>
																								<div class="row">
																									<div class="col-md-12 col-12">
																										<form
																											onSubmit={
																												handleOnLeadTaskSubmit
																											}
																										>
																											<div class="call-sec">
																												<div class="row">
																													<div class="col-md-1 col-2"></div>
																													<div class="col-md-11 col-12">
																														{messageLeadTask && (
																															<Alert
																																variant={
																																	statusLeadTask ===
																																	'success'
																																		? 'success'
																																		: 'danger'
																																}
																															>
																																{
																																	messageLeadTask
																																}
																															</Alert>
																														)}
																														<div class="meeting-input">
																															<Tabs>
																																<TabPanel>
																																	<div
																																		id="home"
																																		class="tab-pane active show"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Call"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabPanel>
																																	<div
																																		id="menu1"
																																		class="tab-pane"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Meeting"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>

																																<TabPanel>
																																	<div
																																		id="menu2"
																																		class="tab-pane"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Task"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabPanel>
																																	<div
																																		id="menu3"
																																		class="tab-pane"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Deadline"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabPanel>
																																	<div
																																		id="menu4"
																																		class="tab-pane"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Email"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabPanel>
																																	<div
																																		id="menu5"
																																		class="tab-pane"
																																	>
																																		<input
																																			type="text"
																																			class="form-control"
																																			placeholder="Lunch"
																																			name="statusNote"
																																			value={
																																				statusNote
																																			}
																																			onChange={
																																				handleOnChange
																																			}
																																		/>
																																	</div>
																																</TabPanel>
																																<TabList>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-phone"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Calling'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-user"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Meeting'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-clock-o"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Task'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-flag"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Deadline'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-paper-plane"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Email'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																	<Tab>
																																		<div class="icon-bg">
																																			<i
																																				class="fa fa-phone"
																																				aria-hidden="true"
																																				onClick={() =>
																																					setTaskStatus(
																																						'Lunch'
																																					)
																																				}
																																			></i>
																																		</div>
																																	</Tab>
																																</TabList>
																															</Tabs>
																														</div>
																													</div>
																												</div>
																											</div>

																											<div class="date-sec">
																												<div class="row">
																													<div class="col-md-1 col-2">
																														<i
																															class="fa fa-clock-o left-icon"
																															aria-hidden="true"
																														></i>
																													</div>
																													<div class="col-md-11 col-12">
																														<div class="time-area">
																															<div class="row">
																																<div class="form-group col-md-3 col-12">
																																	<label for="Start-Date">
																																		Start-Date
																																	</label>

																																	<input
																																		type="date"
																																		class="form-control"
																																		placeholder="Date"
																																		name="taskStartDate"
																																		value={
																																			taskStartDate
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>

																																<div class="form-group col-md-3 col-12">
																																	<label for="Start-Time">
																																		Start-Time
																																	</label>
																																	<select
																																		class="form-control"
																																		id="time"
																																		name="taskStartTime"
																																		value={
																																			taskStartTime
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	>
																																		<option>
																																			12:00 AM
																																		</option>
																																		<option>
																																			12:15 AM
																																		</option>
																																		<option>
																																			12:30 AM
																																		</option>
																																		<option>
																																			12:45 AM
																																		</option>
																																		<option>
																																			1:00 AM
																																		</option>
																																		<option>
																																			1:15 AM
																																		</option>
																																		<option>
																																			1:30 AM
																																		</option>
																																		<option>
																																			1:45 AM
																																		</option>
																																		<option>
																																			2:00 AM
																																		</option>
																																		<option>
																																			2:15 AM
																																		</option>
																																		<option>
																																			2:30 AM
																																		</option>
																																		<option>
																																			2:45 AM
																																		</option>
																																		<option>
																																			3:00 AM
																																		</option>
																																		<option>
																																			3:15 AM
																																		</option>
																																		<option>
																																			3:30 AM
																																		</option>
																																		<option>
																																			3:45 AM
																																		</option>
																																		<option>
																																			4:00 AM
																																		</option>
																																		<option>
																																			4:15 AM
																																		</option>
																																		<option>
																																			4:30 AM
																																		</option>
																																		<option>
																																			4:45 AM
																																		</option>
																																		<option>
																																			5:00 AM
																																		</option>
																																		<option>
																																			5:15 AM
																																		</option>
																																		<option>
																																			5:30 AM
																																		</option>
																																		<option>
																																			5:45 AM
																																		</option>
																																		<option>
																																			6:00 AM
																																		</option>
																																		<option>
																																			6:15 AM
																																		</option>
																																		<option>
																																			6:30 AM
																																		</option>
																																		<option>
																																			6:45 AM
																																		</option>
																																		<option>
																																			7:00 AM
																																		</option>
																																		<option>
																																			7:15 AM
																																		</option>
																																		<option>
																																			7:30 AM
																																		</option>
																																		<option>
																																			7:45 AM
																																		</option>
																																		<option>
																																			8:00 AM
																																		</option>
																																		<option>
																																			8:15 AM
																																		</option>
																																		<option>
																																			8:30 AM
																																		</option>
																																		<option>
																																			8:45 AM
																																		</option>
																																		<option>
																																			9:00 AM
																																		</option>
																																		<option>
																																			9:15 AM
																																		</option>
																																		<option>
																																			9:30 AM
																																		</option>
																																		<option>
																																			9:45 AM
																																		</option>
																																		<option>
																																			10:00 AM
																																		</option>
																																		<option>
																																			10:15 AM
																																		</option>
																																		<option>
																																			10:30 AM
																																		</option>
																																		<option>
																																			10:45 AM
																																		</option>
																																		<option>
																																			11:00 AM
																																		</option>
																																		<option>
																																			11:15 AM
																																		</option>
																																		<option>
																																			11:30 AM
																																		</option>
																																		<option>
																																			11:45 AM
																																		</option>
																																		<option>
																																			12:00 PM
																																		</option>
																																		<option>
																																			12:15 PM
																																		</option>
																																		<option>
																																			12:30 PM
																																		</option>
																																		<option>
																																			12:45 PM
																																		</option>
																																		<option>
																																			1:00 PM
																																		</option>
																																		<option>
																																			1:15 PM
																																		</option>
																																		<option>
																																			1:30 PM
																																		</option>
																																		<option>
																																			1:45 PM
																																		</option>
																																		<option>
																																			2:00 PM
																																		</option>
																																		<option>
																																			2:15 PM
																																		</option>
																																		<option>
																																			2:30 PM
																																		</option>
																																		<option>
																																			2:45 PM
																																		</option>
																																		<option>
																																			3:00 PM
																																		</option>
																																		<option>
																																			3:15 PM
																																		</option>
																																		<option>
																																			3:30 PM
																																		</option>
																																		<option>
																																			3:45 PM
																																		</option>
																																		<option>
																																			4:00 PM
																																		</option>
																																		<option>
																																			4:15 PM
																																		</option>
																																		<option>
																																			4:30 PM
																																		</option>
																																		<option>
																																			4:45 PM
																																		</option>
																																		<option>
																																			5:00 PM
																																		</option>
																																		<option>
																																			5:15 PM
																																		</option>
																																		<option>
																																			5:30 PM
																																		</option>
																																		<option>
																																			5:45 PM
																																		</option>
																																		<option>
																																			6:00 PM
																																		</option>
																																		<option>
																																			6:15 PM
																																		</option>
																																		<option>
																																			6:30 PM
																																		</option>
																																		<option>
																																			6:45 PM
																																		</option>
																																		<option>
																																			7:00 PM
																																		</option>
																																		<option>
																																			7:15 PM
																																		</option>
																																		<option>
																																			7:30 PM
																																		</option>
																																		<option>
																																			7:45 PM
																																		</option>
																																		<option>
																																			8:00 PM
																																		</option>
																																		<option>
																																			8:15 PM
																																		</option>
																																		<option>
																																			8:30 PM
																																		</option>
																																		<option>
																																			8:45 PM
																																		</option>
																																		<option>
																																			9:00 PM
																																		</option>
																																		<option>
																																			9:15 PM
																																		</option>
																																		<option>
																																			9:30 PM
																																		</option>
																																		<option>
																																			9:45 PM
																																		</option>
																																		<option>
																																			10:00 PM
																																		</option>
																																		<option>
																																			10:15 PM
																																		</option>
																																		<option>
																																			10:30 PM
																																		</option>
																																		<option>
																																			10:45 PM
																																		</option>
																																		<option>
																																			11:00 PM
																																		</option>
																																		<option>
																																			11:15 PM
																																		</option>
																																		<option>
																																			11:30 PM
																																		</option>
																																		<option>
																																			11:45 PM
																																		</option>
																																	</select>
																																</div>
																																<div class="form-group col-md-3 col-12">
																																	<label for="Start-date">
																																		End-Date
																																	</label>
																																	<input
																																		type="date"
																																		class="form-control"
																																		placeholder="Date"
																																		name="taskEndDate"
																																		value={
																																			taskEndDate
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	/>
																																</div>
																																<div class="form-group col-md-3 col-12">
																																	<label for="Start-Date">
																																		End-Time
																																	</label>
																																	<select
																																		class="form-control"
																																		id="time"
																																		name="taskEndTime"
																																		value={
																																			taskEndTime
																																		}
																																		onChange={
																																			handleOnChange
																																		}
																																	>
																																		<option>
																																			12:00 AM
																																		</option>
																																		<option>
																																			12:15 AM
																																		</option>
																																		<option>
																																			12:30 AM
																																		</option>
																																		<option>
																																			12:45 AM
																																		</option>
																																		<option>
																																			1:00 AM
																																		</option>
																																		<option>
																																			1:15 AM
																																		</option>
																																		<option>
																																			1:30 AM
																																		</option>
																																		<option>
																																			1:45 AM
																																		</option>
																																		<option>
																																			2:00 AM
																																		</option>
																																		<option>
																																			2:15 AM
																																		</option>
																																		<option>
																																			2:30 AM
																																		</option>
																																		<option>
																																			2:45 AM
																																		</option>
																																		<option>
																																			3:00 AM
																																		</option>
																																		<option>
																																			3:15 AM
																																		</option>
																																		<option>
																																			3:30 AM
																																		</option>
																																		<option>
																																			3:45 AM
																																		</option>
																																		<option>
																																			4:00 AM
																																		</option>
																																		<option>
																																			4:15 AM
																																		</option>
																																		<option>
																																			4:30 AM
																																		</option>
																																		<option>
																																			4:45 AM
																																		</option>
																																		<option>
																																			5:00 AM
																																		</option>
																																		<option>
																																			5:15 AM
																																		</option>
																																		<option>
																																			5:30 AM
																																		</option>
																																		<option>
																																			5:45 AM
																																		</option>
																																		<option>
																																			6:00 AM
																																		</option>
																																		<option>
																																			6:15 AM
																																		</option>
																																		<option>
																																			6:30 AM
																																		</option>
																																		<option>
																																			6:45 AM
																																		</option>
																																		<option>
																																			7:00 AM
																																		</option>
																																		<option>
																																			7:15 AM
																																		</option>
																																		<option>
																																			7:30 AM
																																		</option>
																																		<option>
																																			7:45 AM
																																		</option>
																																		<option>
																																			8:00 AM
																																		</option>
																																		<option>
																																			8:15 AM
																																		</option>
																																		<option>
																																			8:30 AM
																																		</option>
																																		<option>
																																			8:45 AM
																																		</option>
																																		<option>
																																			9:00 AM
																																		</option>
																																		<option>
																																			9:15 AM
																																		</option>
																																		<option>
																																			9:30 AM
																																		</option>
																																		<option>
																																			9:45 AM
																																		</option>
																																		<option>
																																			10:00 AM
																																		</option>
																																		<option>
																																			10:15 AM
																																		</option>
																																		<option>
																																			10:30 AM
																																		</option>
																																		<option>
																																			10:45 AM
																																		</option>
																																		<option>
																																			11:00 AM
																																		</option>
																																		<option>
																																			11:15 AM
																																		</option>
																																		<option>
																																			11:30 AM
																																		</option>
																																		<option>
																																			11:45 AM
																																		</option>
																																		<option>
																																			12:00 PM
																																		</option>
																																		<option>
																																			12:15 PM
																																		</option>
																																		<option>
																																			12:30 PM
																																		</option>
																																		<option>
																																			12:45 PM
																																		</option>
																																		<option>
																																			1:00 PM
																																		</option>
																																		<option>
																																			1:15 PM
																																		</option>
																																		<option>
																																			1:30 PM
																																		</option>
																																		<option>
																																			1:45 PM
																																		</option>
																																		<option>
																																			2:00 PM
																																		</option>
																																		<option>
																																			2:15 PM
																																		</option>
																																		<option>
																																			2:30 PM
																																		</option>
																																		<option>
																																			2:45 PM
																																		</option>
																																		<option>
																																			3:00 PM
																																		</option>
																																		<option>
																																			3:15 PM
																																		</option>
																																		<option>
																																			3:30 PM
																																		</option>
																																		<option>
																																			3:45 PM
																																		</option>
																																		<option>
																																			4:00 PM
																																		</option>
																																		<option>
																																			4:15 PM
																																		</option>
																																		<option>
																																			4:30 PM
																																		</option>
																																		<option>
																																			4:45 PM
																																		</option>
																																		<option>
																																			5:00 PM
																																		</option>
																																		<option>
																																			5:15 PM
																																		</option>
																																		<option>
																																			5:30 PM
																																		</option>
																																		<option>
																																			5:45 PM
																																		</option>
																																		<option>
																																			6:00 PM
																																		</option>
																																		<option>
																																			6:15 PM
																																		</option>
																																		<option>
																																			6:30 PM
																																		</option>
																																		<option>
																																			6:45 PM
																																		</option>
																																		<option>
																																			7:00 PM
																																		</option>
																																		<option>
																																			7:15 PM
																																		</option>
																																		<option>
																																			7:30 PM
																																		</option>
																																		<option>
																																			7:45 PM
																																		</option>
																																		<option>
																																			8:00 PM
																																		</option>
																																		<option>
																																			8:15 PM
																																		</option>
																																		<option>
																																			8:30 PM
																																		</option>
																																		<option>
																																			8:45 PM
																																		</option>
																																		<option>
																																			9:00 PM
																																		</option>
																																		<option>
																																			9:15 PM
																																		</option>
																																		<option>
																																			9:30 PM
																																		</option>
																																		<option>
																																			9:45 PM
																																		</option>
																																		<option>
																																			10:00 PM
																																		</option>
																																		<option>
																																			10:15 PM
																																		</option>
																																		<option>
																																			10:30 PM
																																		</option>
																																		<option>
																																			10:45 PM
																																		</option>
																																		<option>
																																			11:00 PM
																																		</option>
																																		<option>
																																			11:15 PM
																																		</option>
																																		<option>
																																			11:30 PM
																																		</option>
																																		<option>
																																			11:45 PM
																																		</option>
																																	</select>
																																</div>
																															</div>
																														</div>
																													</div>
																												</div>
																											</div>

																											<div class="add-note">
																												<div class="row">
																													<div class="col-md-1 col-2">
																														<i
																															class="fa fa-sticky-note left-icon"
																															aria-hidden="true"
																														></i>
																													</div>

																													{isLoadingLeadTask && (
																														<Spinner
																															variant="primary"
																															animation="border"
																														/>
																													)}

																													<div class="col-md-11 col-12">
																														<textarea
																															name="taskNote"
																															value={taskNote}
																															onChange={
																																handleOnChange
																															}
																															rows="4"
																															class="form-control"
																															placeholder="Add Notes"
																														></textarea>
																													</div>
																												</div>
																											</div>

																											<div class="user-dropdown">
																												<div class="row">
																													<div class="col-md-1 col-2">
																														<i
																															class="fa fa-user left-icon"
																															aria-hidden="true"
																														></i>
																													</div>
																													<div class="col-md-11 col-12">
																														<div
																															ref={wrapperRef}
																															className="flex-container flex-column pos-rel"
																														>
																															<input
																																class="form-control"
																																name="assignee"
																																value={assignee}
																																onChange={
																																	handleOnChange
																																}
																																onClick={() =>
																																	setDisplayUsers(
																																		!displayUsers
																																	)
																																}
																																placeholder="Assign User"
																																autoComplete="off"
																															/>
																															{displayUsers && (
																																<div className="autoContainer">
																																	<div className="auto-area">
																																		<div class="ssg-header">
																																			<div class="ssg-icon">
																																				<i
																																					class="fas fa-user"
																																					aria-hidden="true"
																																				></i>
																																			</div>
																																			<div class="ssg-name">
																																				My Users
																																			</div>
																																			<div class="ssg-info">
																																				{
																																					optionsUsers.length
																																				}
																																			</div>
																																		</div>
																																		<div className="ssg-content">
																																			{optionsUsers
																																				.filter(
																																					({
																																						firstName,
																																					}) =>
																																						firstName.indexOf(
																																							assignee.toLowerCase()
																																						) >
																																						-1
																																				)
																																				.map(
																																					(
																																						value,
																																						i
																																					) => {
																																						return (
																																							<div
																																								onClick={() =>
																																									updateUser(
																																										value
																																									)
																																								}
																																								className="option ssg-item"
																																								key={
																																									i
																																								}
																																								tabIndex="0"
																																							>
																																								<span>
																																									{
																																										value.firstName
																																									}
																																								</span>
																																							</div>
																																						);
																																					}
																																				)}
																																		</div>
																																	</div>
																																</div>
																															)}
																														</div>
																													</div>
																												</div>
																											</div>

																											<div class="form-foot">
																												<div class="row">
																													<div class="col-md-5 col-12"></div>
																													<div class="col-md-7 col-12 save-area">
																														<div class="done">
																															<input
																																type="checkbox"
																																onChange={(e) =>
																																	setTaskCompleted(
																																		e.target
																																			.checked
																																	)
																																}
																															/>
																															<label>
																																Mark as Done
																															</label>
																														</div>

																														<input
																															type="submit"
																															name="Save"
																															class="btn btn-save"
																														/>
																													</div>
																												</div>
																											</div>
																										</form>
																									</div>
																								</div>
																							</TabPanel>
																						</Tabs>
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
											</Modal.Body>
										</Modal>
									</div>
								</div>

								{/*modal-body--*/}
							</div>

							{/* refferal source modal */}
							<div
								class="modal fade filters-modal show "
								id="leadsFilter"
								aria-modal="true"
							>
								<Modal show={isOpen6} onHide={hideModal6}>
									<Modal.Body class="editleadsfilter">
										<div class="modal-dialog modal-lg" role="document">
											<div class="modal-body">
												<div id="studentFilter" class="deal-convert">
													<div class="modal-dialog modal-lg" role="document">
														<div class="modal-content">
															<div class="modal-top">
																<h5>Edit Leads</h5>
																<button
																	type="button"
																	onClick={hideModal6}
																	class="close"
																	data-dismiss="modal"
																	aria-label="Close"
																>
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<div
																class="accordion md-accordion"
																id="accordionEx"
																role="tablist"
																aria-multiselectable="true"
															>
																<div class="modal-body">
																	<form onSubmit={editFullLead}>
																		{' '}
																		<div class="student-filter-area">
																			<div class="row">
																				<div class="col-lg-12 col-12">
																					<div class="update-crm add-leads">
																						<div class="row">
																							<div class="col-md-6 col-12">
																								<div class="form-row">
																									<div class="form-group col-md-12 col-12">
																										<label>First Name</label>

																										<input
																											type="text"
																											class="form-control input-field"
																											placeholder=""
																											name="leadFirstName"
																											value={leadFirstName}
																											onChange={handleOnChange}
																										/>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>Middle Name</label>

																										<input
																											type="text"
																											class="form-control input-field"
																											placeholder=""
																											name="leadMiddleName"
																											value={leadMiddleName}
																											onChange={handleOnChange}
																										/>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>Last Name</label>

																										<input
																											type="text"
																											class="form-control input-field"
																											placeholder=""
																											name="leadLastName"
																											value={leadLastName}
																											onChange={handleOnChange}
																										/>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>
																											Location Status
																										</label>
																										<select
																											class="form-control"
																											name="leadLocationStatus"
																											value={leadLocationStatus}
																											id="cars"
																											onChange={handleOnChange}
																										>
																											<option>OnShore</option>
																											<option>OffShore</option>
																										</select>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>
																											OnShore(Location)
																										</label>

																										<input
																											type="text"
																											class="form-control input-field"
																											placeholder=""
																											name="leadOnShoreLocation"
																											value={
																												leadOnShoreLocation
																											}
																											onChange={handleOnChange}
																										/>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>
																											OffShore(Location)
																										</label>

																										<input
																											type="text"
																											class="form-control input-field"
																											placeholder=""
																											name="leadOffShoreLocation"
																											value={
																												leadOffShoreLocation
																											}
																											onChange={handleOnChange}
																										/>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>Lead Level</label>
																										<select
																											class="form-control"
																											id="cars"
																											name="leadLevel"
																											value={leadLevel}
																											onChange={handleOnChange}
																										>
																											<option>Very Hot</option>
																											<option>Hot</option>
																											<option>Cold</option>
																											<option>Warm</option>
																										</select>
																									</div>

																									<div class="form-group col-md-12 col-12">
																										<label>
																											Referral source{' '}
																										</label>
																										<select
																											class="form-control"
																											name="leadRefferalSource"
																											value={leadRefferalSource}
																											onChange={handleOnChange}
																										>
																											<option>unknown</option>
																											<option>Youtube</option>
																											<option>Instagram</option>
																											<option>Facebook</option>
																											<option>Google</option>
																										</select>
																									</div>
																								</div>
																							</div>

																							<div class="col-md-6 col-12 person-area">
																								<div class="person">
																									<div class="heading">
																										<i class="fa fa-user"></i>
																										<span>Person</span>
																									</div>
																									<div class="row">
																										<div class="form-group col-md-6 col-6 left">
																											<label>
																												OffShorePhone
																											</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="leadOffShorePhone"
																												value={
																													leadOffShorePhone
																												}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-6 col-6 left">
																											<label>
																												OnShorePhone
																											</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="leadOnShorePhone"
																												value={leadOnShorePhone}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="col-md-6 col-6 form-group left">
																											<label>Gender</label>
																											<select
																												class="form-control"
																												id="cars"
																												name="leadGender"
																												value={leadGender}
																												onChange={
																													handleOnChange
																												}
																											>
																												<option>Male</option>
																												<option>Female</option>
																												<option>Others</option>
																											</select>
																										</div>
																										<div class="form-group col-md-6 col-6 left">
																											<label>Email</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="leadEmail"
																												value={leadEmail}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-6 col-6 left">
																											<label>Nationality</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="leadNationality"
																												value={leadNationality}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>

																										<div class="form-group col-md-6 col-6 left">
																											<label>Birthdate</label>
																											<input
																												type="date"
																												class="form-control"
																												placeholder=""
																												name="leadBirthday"
																												value={leadBirthday}
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
																			<div class="fotercontent">
																				<div class="footersingbtn">
																					<input
																						type="submit"
																						name="Save"
																						class="btn getin-btn"
																						value="Update"
																					/>
																				</div>
																				{messageLeadEdit && (
																					<Alert
																						variant={
																							statusLeadEdit === 'success'
																								? 'success'
																								: 'danger'
																						}
																					>
																						{messageLeadEdit}
																					</Alert>
																				)}
																			</div>

																			{/*<!-- Modal -->*/}
																		</div>
																	</form>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Modal.Body>
								</Modal>
							</div>
							{/* Referral Source Modal */}

							{/* convert to deal modal */}
							<div
								class="modal fade filters-modal show"
								id="convert"
								aria-modal="true"
							>
								<Modal show={isOpen4} onHide={hideModal4}>
									<Modal.Body>
										<div class="modal-dialog modal-lg" role="document">
											<div class="modal-body">
												<div id="studentFilter" class="deal-convert">
													<div class="modal-dialog modal-lg" role="document">
														<div class="modal-content">
															<div class="modal-top">
																<h5>Convert To Deal</h5>
																<button
																	type="button"
																	onClick={hideModal4}
																	class="close"
																	data-dismiss="modal"
																	aria-label="Close"
																>
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<Modal.Body>
																<form onSubmit={handleOnStudentSubmit}>
																	<div class="student-filter-area">
																		<div class="row">
																			<div class="col-lg-7 col-12">
																				<div class="update-student">
																					<div class="headingdiv">Personal</div>
																					<div class="crm-form card-body">
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
																									value={firstName}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>Middle Name</label>
																								<input
																									type="text"
																									class="form-control"
																									placeholder=""
																									name="middleName"
																									value={middleName}
																									onChange={handleOnChange}
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
																									value={lastName}
																									onChange={handleOnChange}
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
																									value={email}
																									onChange={handleOnChange}
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
																									value={birthday}
																									onChange={handleOnChange}
																								/>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>Gender</label>
																								<select
																									class="form-control"
																									name="genders"
																									onChange={handleOnChange}
																									value={genders}
																								>
																									<option>Male</option>
																									<option>Female</option>
																									<option>Other</option>
																								</select>
																							</div>

																							<div class="form-group col-md-4 col-12">
																								<label>Nationality</label>
																								<select
																									class="form-control"
																									name="nation"
																									onChange={handleOnChange}
																									value={nation}
																								>
																									<option>Poland</option>
																									<option>Australia</option>
																									<option>Norway</option>
																									<option>Ghana</option>
																								</select>
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
																										Applicant Current Location{' '}
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
																													Onshore (In Australia)
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
																													Offshore (Overseas)
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
																										OnShore Information{' '}
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
																											<label>Phone</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="onShorePhone"
																												value={onShorePhone}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Address</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="onShoreAddress"
																												value={onShoreAddress}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Location</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="onShoreLocation"
																												value={onShoreLocation}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Unit Number</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="unitNumber"
																												value={unitNumber}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>
																												Street Number
																											</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="streetNumber"
																												value={streetNumber}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Street Name</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="streetName"
																												value={streetName}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>City</label>
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
																											<label>Country</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="country"
																												value={country}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Zipcode</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="zipCode"
																												value={zipCode}
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
																										OffShore Information{' '}
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
																									<div class="form-row">
																										<div class="form-group col-md-4 col-12">
																											<label>Phone</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShorePhone"
																												value={offShorePhone}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Address</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShoreAdress"
																												value={offShoreAdress}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Location</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShoreLocation"
																												value={offShoreLocation}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Unit Number</label>
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
																												Street Number
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
																											<label>Street Name</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="streetNa"
																												value={streetNa}
																												onChange={
																													handleOnChange
																												}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>City</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShoreCity"
																												onChange={
																													handleOnChange
																												}
																												value={offShoreCity}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Country</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShoreCountry"
																												onChange={
																													handleOnChange
																												}
																												value={offShoreCountry}
																											/>
																										</div>
																										<div class="form-group col-md-4 col-12">
																											<label>Zipcode</label>
																											<input
																												type="text"
																												class="form-control"
																												placeholder=""
																												name="offShoreZipCode"
																												value={offShoreZipCode}
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
																										Education Details{' '}
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
																												<label>USI</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="usi"
																													value={usi}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>

																											<div class="form-group col-md-4 col-12">
																												<label>
																													Education Level
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="educationLevel"
																													value={educationLevel}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>

																											<div class="form-group col-md-4 col-12">
																												<label>
																													Institute Name
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="instituteName"
																													value={instituteName}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>GPA</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="gpa"
																													value={gpa}
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
																													value={yearLevel}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>
																													School curriculum
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
																													School curriculum
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
																								id="headingOne5"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne5"
																									aria-expanded="true"
																									aria-controls="collapseOne5"
																								>
																									<div class="headingdiv">
																										Passports{' '}
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
																											<div class="form-group col-md-4 col-12">
																												<label>Number</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="passNumber"
																													value={passNumber}
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
																													value={passIssueDate}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>
																													Expiry Date
																												</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="passExpiryDate"
																													value={passExpiryDate}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>Comments</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="passComments"
																													value={passComments}
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
																										Visas{' '}
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
																											<div class="form-group col-md-4 col-12">
																												<label>
																													Grant Date
																												</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="grantDate"
																													value={grantDate}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>
																													Expiry Date
																												</label>
																												<input
																													type="date"
																													class="form-control"
																													placeholder=""
																													name="visaExpiryDate"
																													value={visaExpiryDate}
																													onChange={
																														handleOnChange
																													}
																												/>
																											</div>
																											<div class="form-group col-md-4 col-12">
																												<label>Type</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="visaType"
																													onChange={
																														handleOnChange
																													}
																													value={visaType}
																												>
																													<option>Any</option>
																													<option>
																														Student visa
																													</option>
																													<option>
																														Working holiday
																													</option>
																													<option>
																														Work & holiday
																													</option>
																													<option>
																														Citizenship
																													</option>
																													<option>other</option>
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
																													value={visaComments}
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
																								id="headingOne7"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne7"
																									aria-expanded="true"
																									aria-controls="collapseOne7"
																								>
																									<div class="headingdiv">
																										Insurance{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne7"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne7"
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
																													Expiry Date
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
																												<label>Type</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="insuranceType"
																													onChange={
																														handleOnChange
																													}
																													value={insuranceType}
																												>
																													<option>
																														Single(Just for the
																														student)
																													</option>
																													<option>
																														Couple(Just for the
																														student)
																													</option>
																													<option>
																														Single
																														parent(Student and
																														their kid)
																													</option>
																													<option>
																														Family(Student,partner
																														and Kid)
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
																													Other comments
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
																								id="headingOne8"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne8"
																									aria-expanded="true"
																									aria-controls="collapseOne8"
																								>
																									<div class="headingdiv">
																										CRM{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne8"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne8"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-4">
																												<label>
																													Sales Pipeline
																												</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="salesPipeline"
																													onChange={
																														handleOnChange
																													}
																													value={salesPipeline}
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
																													Sales Status
																												</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="salesStatus"
																													onChange={
																														handleOnChange
																													}
																													value={salesStatus}
																												>
																													<option>
																														Inquiry Recieved
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
																														Course in Progress
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
																													value={heatLevel}
																												>
																													<option>
																														Very Hot
																													</option>
																													<option>Hot</option>
																													<option>Warm</option>
																													<option>Cold</option>
																												</select>
																											</div>

																											<div class="form-group col-md-12 col-12">
																												<label>
																													Other Comments
																												</label>
																												<input
																													type="text"
																													class="form-control"
																													placeholder=""
																													name="otherComments"
																													value={otherComments}
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
																								id="headingOne9"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne9"
																									aria-expanded="true"
																									aria-controls="collapseOne9"
																								>
																									<div class="headingdiv">
																										Others{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne9"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne9"
																								data-parent="#accordionEx"
																							>
																								<div class="card-body">
																									<div class="crm-form">
																										<div class="form-row">
																											<div class="form-group col-md-4">
																												<label>Status</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="locationStatus"
																													value={locationStatus}
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
																													Refferal Source
																												</label>
																												<select
																													class="form-control"
																													id="cars"
																													name="referalSource"
																													value={referalSource}
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
																								id="headingOne10"
																							>
																								<a
																									data-toggle="collapse"
																									data-parent="#accordionEx"
																									href="#collapseOne10"
																									aria-expanded="true"
																									aria-controls="collapseOne10"
																								>
																									<div class="headingdiv">
																										Add a Note{' '}
																										<i class="fas fa-angle-down rotate-icon"></i>
																									</div>
																								</a>
																							</div>
																							<div
																								id="collapseOne10"
																								class="collapse show"
																								role="tabpanel"
																								aria-labelledby="headingOne10"
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
																													value={note}
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
																				<div className="col-md-3">
																					<input
																						type="submit"
																						name="Save"
																						class="btn float-right btn-primary getin-btn"
																						value="Save"
																					/>
																				</div>
																				{message && (
																					<Alert
																						variant={
																							status === 'success'
																								? 'success'
																								: 'danger'
																						}
																					>
																						{message}
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
											</div>
										</div>
									</Modal.Body>
								</Modal>
							</div>
							{/* convert to deat modal end*/}
						</div>
					</div>
					{/*-- commantable end here --*/}
				</div>
			</div>
		</div>
	);
};

export default Leads;
