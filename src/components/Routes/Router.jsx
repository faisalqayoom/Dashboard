import React from "react";
import { Routes, Route } from "react-router-dom";
import Statistics from "../statistics/Statistics";
import LoginForm from "../login/LoginForm";
import Events from "../pages/events/Events";
import Staff from "../pages/staff/Staff";
import Students from "../pages/students/Students";
import Sidebar from "../sideBar/Sidebar";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<Sidebar />}>
          <Route path={``} element={<Statistics />} />
          <Route path={`students`} element={<Students />}>
            {/* <Route path={`addStudent`} element={<AddStudentForm />} /> */}
          </Route>
          <Route path={`staff`} element={<Staff />} />
          <Route path={`events`} element={<Events />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
