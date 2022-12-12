import React from "react";
import { MdAccountCircle } from "react-icons/md";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarFooter,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, Outlet } from "react-router-dom";
import {} from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
        className= "sidebar-div"
      >
        <CDBSidebar textColer="#fff" backgroundColor="rgba(25, 135, 0.33)">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <Link to="/dashboard" className="admin-icon-text d-flex ">
              <MdAccountCircle className="admin-icon" />
              <span className="admin-text">Admin</span>
            </Link>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content content-sidebar">
            <CDBSidebarMenu>
              <Link to={`/dashboard`} className="">
                <CDBSidebarMenuItem
                  className="sidebar-menu-item"
                  icon="columns"
                >
                  Statistics
                </CDBSidebarMenuItem>
              </Link>
              <Link
                to={`/dashboard/students`}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <CDBSidebarMenuItem className="sidebar-menu-item" icon="users">
                  Students
                </CDBSidebarMenuItem>
              </Link>
              <Link
                to={`/dashboard/staff`}
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold" : "bg-red-500 font-bold"
                }
              >
                <CDBSidebarMenuItem
                  className="sidebar-menu-item"
                  icon="user-tie"
                >
                  Staff
                </CDBSidebarMenuItem>
              </Link>
              <Link to={`/dashboard/events`} className="">
                <CDBSidebarMenuItem
                  className="sidebar-menu-item"
                  icon="calendar"
                >
                  Events
                </CDBSidebarMenuItem>
              </Link>
              <Link
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-500 font-bold" : "bg-red-500 font-bold"
                }
              >
                <CDBSidebarMenuItem
                  className="sidebar-menu-item "
                  icon="arrow-right"
                >
                  Log Out
                </CDBSidebarMenuItem>
              </Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              className="sidebar-btn-wrapper"
              style={{ padding: "20px 5px" }}
            >
              Copyright &copy; - kmr
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>

        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
