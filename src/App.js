// import React, { useEffect } from "react";
// import DashBoard from "./pages/DashBoard/DashBoard"; 1
// import { Routes, Route } from "react-router-dom";
// import LogInSignUp from "./pages/LogInSignUp/LogInSignUp.jsx"; 1
// import RequireAuth from "@auth-kit/react-router/RequireAuth";
// import BookingTable from "./pages/BookingTable/BookingTable.jsx"; 1
// import EmailForPassword from "./pages/EmailForPassword/EmailForPassword.jsx"; 1
// import EmailForPasswordForProfessors from "./pages/EmailForPassword/EmailForPasswordForProfessors.jsx"; 1
// import PasswordUpdater from "./pages/PasswordUpdator/PasswordUpdater.jsx"; 1
// import ProfessorPasswordUpdator from "./pages/PasswordUpdator/ProfessorPasswordUpdator.jsx" 1
// import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx"; 1
// import LayOut from "./components/LayOut/LayOut.jsx"; 1
// import AddEquipment from "./pages/AddEquipment/AddEquipment.jsx"; 1
// import AddProfessors from "./pages/AddProfessors/AddProfessors.jsx"; 1
// import VerifyRequest from "./pages/verifyRequestPage/VerifyRequest.jsx"; 1
// import StudentConfirmation from "./pages/StudentConfirmation/StudentConfirmation.jsx"; 1
// import UserRoleUpdater from "./pages/userRoleUpdator/UserRoleUpdater.jsx"; 1
// import ListOfUsers from "./pages/ListOfUsersForAdmin/ListOfUsers.jsx"; 1
// import useAuthUser from "react-auth-kit/hooks/useAuthUser";
// import { useNavigate } from "react-router-dom";
// import DeleteRecords from "./pages/deleteOldRecords/DeleteRecords.jsx"; 1
// import ProfessorDashboard from "./pages/ProffesorsDashboard/ProfessorDashboard.jsx" 1
// import EquipmentBlocking from "./pages/BlockEquipmentSlot/EquipmentBlocking.jsx"; 1
// import UpdateEquipStatus from "./pages/UpateEquipmentStatus/UpdateEquipStatus.jsx"; 1
// import ProfessorLogIn from "./pages/ProfessorLogIn/ProfessorLogIn.jsx"; 1
// import StudentsBookingDetail from "./pages/StudentsBookingDetailForProfessor/StudentsBookingDetail.jsx" 1
// import StudentsDashBoard from "./pages/StudentDashBoard/StudentsDashBoard.jsx" 1
// import OperatorDashBoard from "./pages/OperatorsDashBoard/OperatorDashBoard.jsx"; 1
// import OperatorUpdating from "./pages/OperatorUpdating/OperatorUpdating.jsx"; 1
// import About from "./pages/AboutPage/AboutPage.jsx"; 1
// import Information from "./pages/InformationDesk/Information.jsx"; 1
// import PrivateRoute from "./components/PrivateRotue/PrivateRoute.jsx"
// function App() {
//   const auth = useAuthUser();
//   const navigate = useNavigate();
//   // useEffect(() => {
//   //   if (auth?.token && auth?.verification === true) {
//   //     navigate("/dashboard");
//   //   }
//   // }, [auth, navigate]);
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<LogInSignUp />} />
//         <Route path="/login" element={<LogInSignUp />} />
//         <Route path="/signup" element={<LogInSignUp />} />
//         <Route path="/verify" element={<Verify />} />
//         <Route element ={<PrivateRoute/>}>

//         <Route
//           path="/dashBoard"
//           element={
//             <RequireAuth fallbackPath="/login">
//               <LayOut showHeader={true} showFooter={true}>
//                 <DashBoard />
//               </LayOut>
//             </RequireAuth>
//           }
//         />
//         </Route>
//         <Route
//           path="/bookingTable"
//           element={
//             <RequireAuth fallbackPath="/login">
//               <BookingTable />
//             </RequireAuth>
//           }
//         />
//         <Route path="/emailProvide" element={<EmailForPassword />} />
//         <Route path="/ProfessorEmailProvide" element={<EmailForPasswordForProfessors />} />
        
//         <Route
//           path="/userPasswordReset/:userId"
//           element={<PasswordUpdater />}
//         />
//         <Route
//           path="/professorPasswordReset/:professorId"
//           element={<ProfessorPasswordUpdator />}
//         />
//         {/* <Route
//           path="//:userId"
//           element={<PasswordUpdater />}
//         /> */}
//         <Route
//           path="/addEquipments"
//           element={
//             <LayOut showHeader={true} showFooter={false}>
//               <AddEquipment />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/addProfessors"
//           element={
//             <LayOut showHeader={true} showFooter={false}>
//               <AddProfessors />
//             </LayOut>
//           }
//         />
//         <Route path="/successReg" element={<VerifyRequest />} />
//         <Route
//           path="/studentConfirmation/:userId"
//           element={<StudentConfirmation />}
//         />
//         <Route
//           path="/userRoleUpdate"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <UserRoleUpdater />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/ListOfAllUsers"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <ListOfUsers />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/deleteOldData"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <DeleteRecords />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/ProfessorDashboard"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <ProfessorDashboard />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/blockBooking"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <EquipmentBlocking />
//             </LayOut>
//           }
//         />
//         <Route
//           path="/EquipStatusUpdate"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               < UpdateEquipStatus/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/ProfessorLogin"
//           element={
//             <LayOut showHeader={false} showFooter={true}>
//               <ProfessorLogIn/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/professors/viewStudentBooking/:userId/:professorId"
//           element={
//             <LayOut showHeader={false} showFooter={true}>
//               <StudentsBookingDetail/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/myBookings"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <StudentsDashBoard/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/operatorList"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <OperatorDashBoard/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/operatorUpdates/:resultId"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <OperatorUpdating/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <About/>
//             </LayOut>
//           }
//         />
//         <Route
//           path="/information"
//           element={
//             <LayOut showHeader={true} showFooter={true}>
//               <Information/>
//             </LayOut>
//           }
//         />
//         <Route path="/*" element={<PageNotFound />} />
//       </Routes>
//     </>
//   );
// }
// <LayOut></LayOut>;
// export default App;

// {
//   /* <RequireAuth fallbackPath='/login'>
// <DashBoard />
// </RequireAuth> */
// }


import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import RoutesConfig from "./RoutesConfig"; // Separate file for routing

function App() {
  const auth = useAuthUser();
  const navigate = useNavigate();

  // Ensure correct redirection on load
  // useEffect(() => {
  //   if (auth?.token && auth?.verification) {
  //     navigate("/dashboard", { replace: true });
  //   }
  // }, [auth, navigate]);

  return (
 
      <RoutesConfig />
  
  );
}

export default App;
