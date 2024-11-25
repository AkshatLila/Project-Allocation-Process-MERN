import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
import TeamStatus from "./component/TeamStatusAdmin";
import Login from "./component/Login";
import StudentPortal from "./component/Studentportal";
import StudentprojectStatus from "./component/StudentprojectStatus";
import AdminPortal from "./component/AdminPortal";
import ProjectAbstractForm from "./component/Form1";
import RoleSpecificationForm from "./component/Form2";
import WeeklyStatusMatrix from "./component/Form3";
import MentorPortal from "./component/MentorPortal";
import MentorDashboard from "./component/MentorDashboard";
import MentorStatusAdmin from "./component/MentorStatusAdmin";
import MentorChoiceForm from "./component/MentorChoice";
import TeamJoin from "./component/TeamJoiningForm";
import AdminUploadSection from "./component/AdminUpload";
import StudentFormSubmission from "./component/StudentFormSubmission";
import AdminTeamOverview from "./component/AdminTeamOverview";
import MentorTeamSelection from "./component/MentorTeamSelection";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* STUDENT PORTAL */}
          {/* <Route path="/" element={<StudentPortal/>} /> */}
          <Route path= "/teamjoin" element={<TeamJoin/>}/>
          <Route path= "/studentprojectstatus" element={<StudentprojectStatus/>}/>
          <Route path= "/studentformsubmission" element={<StudentFormSubmission/>}/>
          <Route path= "/projectabstractform" element={<ProjectAbstractForm/>}/>
          <Route path= "/rolespecificationform" element={<RoleSpecificationForm/>}/>
          <Route path= "/mentorchoiceform" element={<MentorChoiceForm/>}/>

          {/* MENTOR PORTAL */}
          {/* <Route path="/" element={<MentorPortal/>} /> */}
          <Route path="/mentorteamselection" element={<MentorTeamSelection/>} />
          <Route path="/mentordashboard" element={<MentorDashboard/>} />

          {/* ADMIN PORTAL */}
          <Route path="/" element={<AdminPortal/>} />
          <Route path="/mentorstatusadmin" element={<MentorStatusAdmin />} />
          <Route path="/adminteamoverview" element={<AdminTeamOverview />} />
          <Route path="/teamstatus" element={<TeamStatus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
