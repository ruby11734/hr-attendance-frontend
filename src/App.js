import React, { Component } from "react";
import AttendancePage from "./pages/Attendance/AdminAttendance/index";
import EmployeeListPage from "./pages/EmployeeList/index";

class App extends Component {
  render() {
    return (
      <div className="container">
        <AttendancePage></AttendancePage>
      </div>
    );
  }
}

export default App;
