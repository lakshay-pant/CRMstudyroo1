import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './components/login/loginSlice';
import signUpReducer from './components/signup/signupSlice';
import userReducer from './pages/dashboard/userSlice';
import addStudent from './components/add-student-form/addStudentSlice';
import addCertificate from './components/add-student-form/addCerificateSlice';
import addTask from './pages/addTask/addTaskSlice';
import studentTask from './pages/addTask/addStudentTaskSlice';
import allStudent from './pages/allStudents/allStudentSlice';
import getUser from './components/getAllTheUsers/getUsersSlice';
import editStudent from './components/student-overview/studentOverviewSlice';
import deleteStudent from './components/student-overview/studentOverviewDeleteSlice';
import addLead from './pages/leads/addLeadSlice';
import leadList from './pages/leads/showLeadSlice';
import leadTask from './pages/leads/leadTaskSlice';
import singleLead from './pages/leads/getSingleLeadSlice';
import deleteLead from './pages/leads/deleteLeadSlice';
import deleteTask from './pages/leads/deleteTaskSlice';
import deleteLeadTask from './pages/leads/deleteLeadTaskSlice';
import updateLeadTask from './pages/leads/updateLeadTaskSlice';
import getTask from './pages/taskList/taskListgetSlice';
import deletetask from './pages/taskList/taskListdeleteSlice';
import editTask from './pages/taskList/taskListSlice';
import editUser from './pages/profile/profileeditSlice';
import addstudentTask from './pages/addTask/addTaskSlice';
import deleteStudentTask from './pages/taskList/deleteStudentTaskSlice';
import editStudentTask from './pages/taskList/editStudentTaskSlice';
import addUserStudentTask from './pages/addTask/addTaskStudentSlice';
import editUserStudentTask from './pages/taskList/editUserTaskSlice';
import editLead from './pages/leads/editLeadSlice';
import putLeadTaskInUser from './pages/leads/putTaskInUserSlice';
import editUserLeadTask from './pages/leads/editUserTaskSlice';
import deleteUserLeadTask from './pages/leads/deleteUserLeadTaskSlice';
import addLeadTaskData from './pages/leads/daddLeadTaskSlice';
import editLeadTaskData from './pages/leads/dEditLeadTaskSlice';
import DeleteLeadTaskData from './pages/leads/dDeleteLeadTaskSlice';
import getLeadTaskData from './pages/leads/dGetLeadTaskSlice';
import deleteLeadTaskDust from './pages/leads/deleteLeadDustTaskSlice';
import addOfficeStudentTask from './pages/addTask/addUserOfficeTaskSlice';
import addDp from './pages/profile/profileDpSlice';
import getSingleStudent from './components/student-overview/studentOverviewClickStudSlice';
import studentInfo from './pages/studentInfo/editStudentInfoSlice';
import addCourse from './pages/providers/addProviderSlice';
import courseList from './components/providerList/getProvidersSlice';
import addOffice from './pages/adminUser/addOfficeSlice';
import addAdminUser from './pages/adminUser/addAdminUserSlice';
import getSingleProvider from './pages/providers/singleProviderSlice';

const store = configureStore({
	reducer: {
		login: loginReducer,
		signUp: signUpReducer,
		user: userReducer,
		addStudent: addStudent,
		addTask: addTask,
		allStudent: allStudent,
		getUser: getUser,
		editStudent: editStudent,
		deleteStudent: deleteStudent,
		addLead: addLead,
		getTask: getTask,
		editTask: editTask,
		deletetask: deletetask,
		leadList: leadList,
		editUser: editUser,
		leadTask: leadTask,
		singleLead: singleLead,
		deleteLead: deleteLead,
		deleteLeadTask: deleteLeadTask,
		updateLeadTask: updateLeadTask,
		addstudentTask: addstudentTask,
		deleteStudentTask: deleteStudentTask,
		editStudentTask: editStudentTask,
		addUserStudentTask: addUserStudentTask,
		editUserStudentTask: editUserStudentTask,
		editLead: editLead,
		putLeadTaskInUser: putLeadTaskInUser,
		editUserLeadTask: editUserLeadTask,
		deleteUserLeadTask: deleteUserLeadTask,
		addLeadTaskData: addLeadTaskData,
		editLeadTaskData: editLeadTaskData,
		DeleteLeadTaskData: DeleteLeadTaskData,
		getLeadTaskData: getLeadTaskData,
		deleteLeadTaskDust: deleteLeadTaskDust,
		addDp: addDp,
		addCertificate: addCertificate,
		addOfficeStudentTask: addOfficeStudentTask,
		getSingleStudent: getSingleStudent,
		studentInfo: studentInfo,
		studentTask: studentTask,
		addCourse: addCourse,
		courseList: courseList,
		addOffice: addOffice,
		addAdminUser: addAdminUser,
		getSingleProvider: getSingleProvider,
	},
});

export default store;
