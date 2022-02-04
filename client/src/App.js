import { EntryPage } from './pages/entry/Entry.page';
import './App.css';
import './components/Fontawesomeicons';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './components/private-route/PrivateRoute.comp';
import { Registration } from './pages/registeration/Registeration.page';
import { NewStudent } from './pages/newStudent/newStudent.page';
import { StudentOverview } from './pages/studentOverview/studentOverview.page';
import { Addtask } from './pages/addTask/Addtask.page';
import AllStudent from './pages/allStudents/AllStudentPage.js';
import { UncategorizedStudents } from './components/student-overview/studOverview.comp';
import LeadsPopup from './pages/allStudents/leadsPopup';
import Leads from './pages/leads/Leads';
import { Profile } from './pages/profile/profile';
import { TaskList } from './pages/taskList/taskList';
import { StudentInfo } from './pages/studentInfo/studentInfo.page';
import { Addadmin } from './pages/adminUser/addAdminUser';
import { Providersdash } from './pages/providers/providersDashboard';
import { Editcourses } from './pages/providers/providersEdit';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<EntryPage />
					</Route>
					<Route path="/registration">
						<Registration />
					</Route>

					<PrivateRoute path={'/dashboard'}>
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute path={'/all-student'}>
						<StudentOverview />
					</PrivateRoute>

					<PrivateRoute path="/studentInfo/:_id">
						<StudentInfo />
					</PrivateRoute>

					<PrivateRoute path="/addstudent">
						<NewStudent />
					</PrivateRoute>
					<PrivateRoute path="/student-overview">
						<AllStudent />
					</PrivateRoute>
					<PrivateRoute path="/student-list">
						<UncategorizedStudents />
					</PrivateRoute>
					<PrivateRoute path="/add-task">
						<Addtask />
					</PrivateRoute>

					<PrivateRoute path="/leads">
						<Leads />
					</PrivateRoute>

					<PrivateRoute path="/profile-page">
						<Profile />
					</PrivateRoute>

					<PrivateRoute path="/task-list">
						<TaskList />
					</PrivateRoute>
					<PrivateRoute path="/addAdmin">
						<Addadmin />
					</PrivateRoute>
					<PrivateRoute path="/addCourses">
						<Providersdash />
					</PrivateRoute>
					<PrivateRoute path="/editCourses/:_id">
						<Editcourses />
					</PrivateRoute>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
