
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form
}
from "react-router-dom"
import TeamStatus from './component/TeamStatusAdmin';
import Login from './component/Login';
import StudentPortal from "./component/Studentportal";
import StudentPortalStatus from './component/StudentprojectStatus';
import AdminPortal from './component/AdminPortal';
import ProjectAbstractForm from './component/Form1';
import RoleSpecificationForm from "./component/Form2";
import WeeklyStatusMatrix from "./component/Form3";
import MentorPortal from "./component/MentorPortal";
import MentorDashboard from "./component/MentorDashboard";
import MentorStatusAdmin from "./component/MentorStatusAdmin";

function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route path = '/' element = {<MentorStatusAdmin/>}/>
    <Route path = '/studentstatus' element = {<StudentPortalStatus/>}/>
    <Route path = '/teamstatus' element = {<TeamStatus/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
