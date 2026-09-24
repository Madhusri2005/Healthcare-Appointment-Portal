// // // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // // import Login from "./pages/Auth/Login";
// // // import Register from "./pages/Auth/Register";

// // // /* ================= PATIENT ================= */
// // // import Patient from "./pages/Patient/Patient";
// // // import PatientDashboard from "./pages/Patient/PatientDashboard";
// // // import BookToken from "./pages/Patient/BookToken";
// // // import QueueView from "./pages/Patient/QueueView";
// // // import MyToken from "./pages/Patient/MyToken";

// // // /* ================= DOCTOR ================= */
// // // import Doctor from "./pages/Doctor/Doctor";
// // // import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
// // // import DoctorAvailability from "./pages/Doctor/DoctorAvailability";
// // // import PatientQueue from "./pages/Doctor/PatientQueue";
// // // import CurrentPatient from "./pages/Doctor/CurrentPatient";
// // // import CompletedPatients from "./pages/Doctor/CompletedPatients";
// // // import DoctorProfile from "./pages/Doctor/DoctorProfile";

// // // /* ================= ADMIN ================= */
// // // import Admin from "./pages/Admin/Admin";

// // // /* ================= RECEPTIONIST ================= */
// // // import Receptionist from "./pages/Receptionist/Receptionist";
// // // import ReceptionistDashboard from "./pages/Receptionist/ReceptionistDashboard";
// // // import PatientForm from "./pages/Receptionist/PatientForm";
// // // import BookTokens from "./pages/Receptionist/BookTokens";
// // // import QueueManagement from "./pages/Receptionist/QueueManagement";
// // // import PatientCheckIn from "./pages/Receptionist/PatientCheckIn";
// // // import TokenDisplay from "./pages/Receptionist/TokenDisplay";

// // // function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>

// // //         {/* ================= AUTH ================= */}
// // //         <Route path="/" element={<Login />} />
// // //         <Route path="/register" element={<Register />} />

// // //         {/* ================= PATIENT ================= */}
// // //         <Route path="/patient" element={<Patient />}>
// // //           <Route index element={<PatientDashboard />} />
// // //           <Route path="book" element={<BookToken />} />
// // //           <Route path="view" element={<QueueView />} />
// // //           <Route path="my-token" element={<MyToken />} />
// // //         </Route>

// // //         {/* ================= DOCTOR ================= */}
// // //         <Route path="/doctor" element={<Doctor />}>
// // //           <Route index element={<DoctorDashboard />} />
// // //           <Route path="availability" element={<DoctorAvailability />} />
// // //           <Route path="queue" element={<PatientQueue />} />
// // //           <Route path="current" element={<CurrentPatient />} />
// // //           <Route path="completed" element={<CompletedPatients />} />
// // //           <Route path="profile" element={<DoctorProfile />} />
// // //         </Route>

// // //         {/* ================= ADMIN ================= */}
// // //         <Route path="/admin" element={<Admin />} />

// // //         {/* ================= RECEPTIONIST ================= */}
// // //         <Route path="/receptionist" element={<Receptionist />}>
// // //           <Route index element={<ReceptionistDashboard />} />
// // //           <Route path="add-patient" element={<PatientForm />} />
// // //           <Route path="book-token" element={<BookTokens />} />
// // //           <Route path="queue" element={<QueueManagement />} />
// // //           <Route path="checkin" element={<PatientCheckIn />} />
// // //           <Route path="tokens" element={<TokenDisplay />} />
// // //         </Route>

// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }

// // // export default App;
// // import { BrowserRouter, Routes, Route } from "react-router-dom";

// // /* ================= AUTH ================= */

// // import Login from "./pages/Auth/Login";
// // import Register from "./pages/Auth/Register";

// // /* ================= PATIENT ================= */

// // import Patient from "./pages/Patient/Patient";
// // import PatientDashboard from "./pages/Patient/PatientDashboard";
// // import BookToken from "./pages/Patient/BookToken";
// // import QueueView from "./pages/Patient/QueueView";
// // import MyToken from "./pages/Patient/MyToken";

// // /* ================= DOCTOR ================= */

// // import Doctor from "./pages/Doctor/Doctor";
// // import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
// // import DoctorAvailability from "./pages/Doctor/DoctorAvailability";
// // import PatientQueue from "./pages/Doctor/PatientQueue";
// // import CurrentPatient from "./pages/Doctor/CurrentPatient";
// // import CompletedPatients from "./pages/Doctor/CompletedPatients";
// // import DoctorProfile from "./pages/Doctor/DoctorProfile";

// // /* ================= ADMIN ================= */

// // import Admin from "./pages/Admin/Admin";
// // import AdminDashboard from "./pages/Admin/AdminDashboard";
// // import ManageDoctors from "./pages/Admin/ManageDoctors";
// // import ManagePatients from "./pages/Admin/ManagePatients";
// // import AdminQueue from "./pages/Admin/AdminQueue.jsx";
// // import Reports from "./pages/Admin/Reports";
// // import Settings from "./pages/Admin/Settings";

// // /* ================= RECEPTIONIST ================= */

// // import Receptionist from "./pages/Receptionist/Receptionist";
// // import ReceptionistDashboard from "./pages/Receptionist/ReceptionistDashboard";
// // import PatientForm from "./pages/Receptionist/PatientForm";
// // import BookTokens from "./pages/Receptionist/BookTokens";
// // import QueueManagement from "./pages/Receptionist/QueueManagement";
// // import PatientCheckIn from "./pages/Receptionist/PatientCheckIn";
// // import TokenDisplay from "./pages/Receptionist/TokenDisplay";

// // function App() {
// //   return (
// //     <BrowserRouter>

// //       <Routes>

// //         {/* ================= AUTH ================= */}

// //         <Route path="/" element={<Login />} />
// //         <Route path="/register" element={<Register />} />



// //         {/* ================= PATIENT ================= */}

// //         <Route path="/patient" element={<Patient />}>

// //           <Route index element={<PatientDashboard />} />

// //           <Route path="book" element={<BookToken />} />

// //           <Route path="view" element={<QueueView />} />

// //           <Route path="my-token" element={<MyToken />} />

// //         </Route>



// //         {/* ================= DOCTOR ================= */}

// //         <Route path="/doctor" element={<Doctor />}>

// //           <Route index element={<DoctorDashboard />} />

// //           <Route path="availability" element={<DoctorAvailability />} />

// //           <Route path="queue" element={<PatientQueue />} />

// //           <Route path="current" element={<CurrentPatient />} />

// //           <Route path="completed" element={<CompletedPatients />} />

// //           <Route path="profile" element={<DoctorProfile />} />

// //         </Route>



// //         {/* ================= ADMIN ================= */}

// //         <Route path="/admin" element={<Admin />}>

// //           <Route index element={<AdminDashboard />} />

// //           <Route path="doctors" element={<ManageDoctors />} />

// //           <Route path="patients" element={<ManagePatients />} />

// //           <Route path="queue" element={<AdminQueue />} />

// //           <Route path="reports" element={<Reports />} />

// //           <Route path="settings" element={<Settings />} />

// //         </Route>



// //         {/* ================= RECEPTIONIST ================= */}

// //         <Route path="/receptionist" element={<Receptionist />}>

// //           <Route index element={<ReceptionistDashboard />} />

// //           <Route path="add-patient" element={<PatientForm />} />

// //           <Route path="book-token" element={<BookTokens />} />

// //           <Route path="queue" element={<QueueManagement />} />

// //           <Route path="checkin" element={<PatientCheckIn />} />

// //           <Route path="tokens" element={<TokenDisplay />} />

// //         </Route>

// //       </Routes>

// //     </BrowserRouter>
// //   );
// // }

// // export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// /* ================= AUTH ================= */
// import Login from "./pages/Auth/Login";
// import Register from "./pages/Auth/Register";

// /* ================= PATIENT ================= */
// import Patient from "./pages/Patient/Patient";
// import PatientDashboard from "./pages/Patient/PatientDashboard";
// import BookToken from "./pages/Patient/BookToken";
// import QueueView from "./pages/Patient/QueueView";
// import MyToken from "./pages/Patient/MyToken";

// /* ================= DOCTOR ================= */
// import Doctor from "./pages/Doctor/Doctor";
// import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
// import DoctorAvailability from "./pages/Doctor/DoctorAvailability";
// import PatientQueue from "./pages/Doctor/PatientQueue";
// import CurrentPatient from "./pages/Doctor/CurrentPatient";
// import CompletedPatients from "./pages/Doctor/CompletedPatients";
// import DoctorProfile from "./pages/Doctor/DoctorProfile";

// /* ================= ADMIN ================= */
// import Admin from "./pages/Admin/Admin";
// import AdminDashboard from "./pages/Admin/AdminDashboard";
// import ManageDoctors from "./pages/Admin/ManageDoctors";
// import ManagePatients from "./pages/Admin/ManagePatients";
// import AdminQueue from "./pages/Admin/AdminQueue";
// import Reports from "./pages/Admin/Reports";
// import Settings from "./pages/Admin/Settings";

// /* ================= RECEPTIONIST ================= */
// import Receptionist from "./pages/Receptionist/Receptionist";
// import ReceptionistDashboard from "./pages/Receptionist/ReceptionistDashboard";
// import PatientForm from "./pages/Receptionist/PatientForm";
// import BookTokens from "./pages/Receptionist/BookTokens";
// import QueueManagement from "./pages/Receptionist/QueueManagement";
// import PatientCheckIn from "./pages/Receptionist/PatientCheckIn";
// import TokenDisplay from "./pages/Receptionist/TokenDisplay";

// import Dashboard from './components/Dashboard';
// import OrderSection from './components/OrderSection';
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Auth Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Patient Section */}
//         <Route path="/patient" element={<Patient />}>
//           <Route index element={<PatientDashboard />} />
//           <Route path="book" element={<BookToken />} />
//           <Route path="view" element={<QueueView />} />
//           <Route path="my-token" element={<MyToken />} />
//         </Route>

//         {/* Doctor Section */}
//         <Route path="/doctor" element={<Doctor />}>
//           <Route index element={<DoctorDashboard />} />
//           <Route path="availability" element={<DoctorAvailability />} />
//           <Route path="queue" element={<PatientQueue />} />
//           <Route path="current" element={<CurrentPatient />} />
//           <Route path="completed" element={<CompletedPatients />} />
//           <Route path="profile" element={<DoctorProfile />} />
//         </Route>

//         {/* Admin Section (Updated with Sub-routes) */}
//         <Route path="/admin" element={<Admin />}>
//           <Route index element={<AdminDashboard />} />
//           <Route path="doctors" element={<ManageDoctors />} />
//           <Route path="patients" element={<ManagePatients />} />
//           <Route path="queue" element={<AdminQueue />} />
//           <Route path="reports" element={<Reports />} />
//           <Route path="settings" element={<Settings />} />
//         </Route>

//         {/* Receptionist Section */}
//         <Route path="/receptionist" element={<Receptionist />}>
//           <Route index element={<ReceptionistDashboard />} />
//           <Route path="add-patient" element={<PatientForm />} />
//           <Route path="book-token" element={<BookTokens />} />
//           <Route path="queue" element={<QueueManagement />} />
//           <Route path="checkin" element={<PatientCheckIn />} />
//           <Route path="tokens" element={<TokenDisplay />} />
//         </Route>

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ================= AUTH ================= */
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

/* ================= PATIENT ================= */
import Patient from "./pages/Patient/Patient";
import PatientDashboard from "./pages/Patient/PatientDashboard";
import BookToken from "./pages/Patient/BookToken";
import QueueView from "./pages/Patient/QueueView";
import MyToken from "./pages/Patient/MyToken";

/* ================= DOCTOR ================= */
import Doctor from "./pages/Doctor/Doctor";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAvailability from "./pages/Doctor/DoctorAvailability";
import PatientQueue from "./pages/Doctor/PatientQueue";
import CurrentPatient from "./pages/Doctor/CurrentPatient";
import CompletedPatients from "./pages/Doctor/CompletedPatients";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

/* ================= ADMIN ================= */
import Admin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageDoctors from "./pages/Admin/ManageDoctors";
import ManageReceptionists from "./pages/Admin/ManageReceptionists";
import ManagePatients from "./pages/Admin/ManagePatients";
import AdminQueue from "./pages/Admin/AdminQueue";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";

/* ================= RECEPTIONIST ================= */
import Receptionist from "./pages/Receptionist/Receptionist";
import ReceptionistDashboard from "./pages/Receptionist/ReceptionistDashboard";
import PatientForm from "./pages/Receptionist/PatientForm";

import QueueManagement from "./pages/Receptionist/QueueManagement";

import TokenDisplay from "./pages/Receptionist/TokenDisplay";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Patient Section */}
        <Route path="/patient" element={<Patient />}>
          <Route index element={<PatientDashboard />} />
          <Route path="dashboard" element={<PatientDashboard />} />
          <Route path="book" element={<BookToken />} />
          <Route path="view" element={<QueueView />} />
          <Route path="my-token" element={<MyToken />} />
        </Route>

        {/* Doctor Section */}
        <Route path="/doctor" element={<Doctor />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="availability" element={<DoctorAvailability />} />
          <Route path="queue" element={<PatientQueue />} />
          <Route path="current" element={<CurrentPatient />} />
          <Route path="completed" element={<CompletedPatients />} />
          <Route path="profile" element={<DoctorProfile />} />
        </Route>

        {/* Admin Section */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="patients" element={<ManagePatients />} />
          <Route path="queue" element={<AdminQueue />} />
          <Route path="receptionists" element={<ManageReceptionists />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Receptionist Section */}
        <Route path="/receptionist" element={<Receptionist />}>
          <Route index element={<ReceptionistDashboard />} />
          <Route path="add-patient" element={<PatientForm />} />
          
          <Route path="queue" element={<QueueManagement />} />
          
          <Route path="tokens" element={<TokenDisplay />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;