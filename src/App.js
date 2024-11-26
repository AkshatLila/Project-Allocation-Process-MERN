import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
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
import DocumentApproval from "./component/Documentapproval";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true); // Set authenticated to true if a token exists
    } else {
      setIsAuthenticated(false); // Explicitly set it to false if no token exists
    }
  }, []);

  // Login handler
  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    setIsAuthenticated(false); // Set authenticated to false
  };

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        {/* Default route: Redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        {/* STUDENT PORTAL */}
        <Route
          path="/studentportal"
          element={
            <ProtectedRoute>
              <StudentPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teamjoin"
          element={
            <ProtectedRoute>
              <TeamJoin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentprojectstatus"
          element={
            <ProtectedRoute>
              <StudentprojectStatus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/studentformsubmission"
          element={
            <ProtectedRoute>
              <StudentFormSubmission />
            </ProtectedRoute>
          }
        />
        <Route
          path="/projectabstractform"
          element={
            <ProtectedRoute>
              <ProjectAbstractForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rolespecificationform"
          element={
            <ProtectedRoute>
              <RoleSpecificationForm />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentorchoiceform"
          element={
            <ProtectedRoute>
              <MentorChoiceForm />
            </ProtectedRoute>
          }
        />

        {/* MENTOR PORTAL */}
        <Route
          path="/mentorportal"
          element={
            <ProtectedRoute>
              <MentorPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentorteamselection"
          element={
            <ProtectedRoute>
              <MentorTeamSelection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentordashboard"
          element={
            <ProtectedRoute>
              <MentorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/documentapproval"
          element={
            <ProtectedRoute>
              <DocumentApproval />
            </ProtectedRoute>
          }
        />

        {/* ADMIN PORTAL */}
        <Route
          path="/adminportal"
          element={
            <ProtectedRoute>
              <AdminPortal />
            </ProtectedRoute>
          }
        />
        <Route
          path="/mentorstatusadmin"
          element={
            <ProtectedRoute>
              <MentorStatusAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminteamoverview"
          element={
            <ProtectedRoute>
              <AdminTeamOverview />
            </ProtectedRoute>
          }
        />
        <Route
          path="/adminuploadsection"
          element={
            <ProtectedRoute>
              <AdminUploadSection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/weeklystatusmatrix"
          element={
            <ProtectedRoute>
              <WeeklyStatusMatrix />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
