import React, { Component } from "react";
import Attendance from "./Attendance/Attendance";
import Header from "./Header/Header";

export default class AttendancePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Attendance></Attendance>
      </div>
    );
  }
}
