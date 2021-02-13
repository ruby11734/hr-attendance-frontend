import React, { Component } from "react";
import { TableRow, TableCell } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const dataProcess = (attendances, currentDaysOfMonth) => {
  var fullAttendanceList = [];

  attendances.map((data) => {
    if (new Date(data.attendanceDate).getMonth() + 1 === currentDaysOfMonth)
      fullAttendanceList.push(data);
  });

  return getCurrentAttendanceList(fullAttendanceList);
};

const getCurrentAttendanceList = (attendanceList) => {
  const currentAttendanceList = [];
  attendanceList.map((data) => {
    for (let i = 0; i < currentAttendanceList.length; i++) {
      if (currentAttendanceList[i].name === data.name) {
        currentAttendanceList[i].attendanceDate.push(
          new Date(data.attendanceDate).getDate()
        );
        return;
      }
    }

    currentAttendanceList.push({
      name: data.name,
      employeeId: data.employeeId,
      attendanceDate: [new Date(data.attendanceDate).getDate()],
    });
  });
  return currentAttendanceList;
};

const isCheckIn = (data, currentDaysOfMonth) => {
  const currentDayOfAttendance = [];
  for (let i = 1; i <= currentDaysOfMonth.length; i++) {
    currentDayOfAttendance[i - 1] = {
      date: i,
      isAttend: false,
    };
  }

  for (let i = 1; i <= currentDayOfAttendance.length; i++) {
    data.some((cell) => {
      if (i === cell) {
        return (currentDayOfAttendance[i - 1] = {
          date: i,
          isAttend: true,
        });
      }
    });
  }
  return currentDayOfAttendance;
};

const showCrossOrTickIcon = (flag) => {
  if (flag === false) return <CancelOutlinedIcon></CancelOutlinedIcon>;

  return <CheckCircleOutlineOutlinedIcon></CheckCircleOutlineOutlinedIcon>;
};

class TableBodyContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return dataProcess(
      this.props.attendances,
      this.props.currentDate.getMonth() + 1
    ).map((row, index) => (
      <TableRow>
        <TableCell key={row.employeeId} align="center">
          {row.employeeId}
        </TableCell>
        <TableCell key={index} align="center">
          {row.name}
        </TableCell>

        {isCheckIn(row.attendanceDate, this.props.currentDaysOfMonth).map(
          (cell, index) => (
            <TableCell key={index} align="center">
              {showCrossOrTickIcon(cell.isAttend)}
            </TableCell>
          )
        )}
      </TableRow>
    ));
  }
}

export default TableBodyContent;
