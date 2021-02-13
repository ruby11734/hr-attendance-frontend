import React from "react";
import Calendar from "react-calendar";
import styles from "./EmployeeAttendance.module.css";

const name = "ABC";

const EmployeeAttendance = () => {
  return (
    <div className={styles.container}>
      <Calendar
        maxDate={new Date()}
        calendarType="US"
        view="month"
        onChange={(value) => {
          writeData(value);
        }}
      ></Calendar>
    </div>
  );
};
export default EmployeeAttendance;
