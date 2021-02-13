import {
  Card,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import React, { Component } from "react";
import axios from "axios";
import TableHeadContent from "../TableHeadContent/TableHeadContent";
import TableBodyContent from "../TableBodyContent/TableBodyContent";
import SearchBar from "../SearchBar/SearchBar";

const useStyle = makeStyles({
  titleSize: {
    fontSize: 20,
  },
  contentSize: {
    fontSize: 15,
  },
});

const getCurrentDayOfMonth = (currentNewDate) => {
  const days = [];

  let currentTotalDays = new Date().getDate();

  if (currentNewDate.getMonth() !== new Date().getMonth())
    currentTotalDays = new Date(
      currentNewDate.getFullYear(),
      currentNewDate.getMonth() + 1,
      0
    ).getDate();
  for (let i = 1; i <= currentTotalDays; i++) {
    days.push(i);
  }

  return days;
};

export default class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendances: [],
      currentDate: new Date(),
    };

    this.handleCalendarClick = this.handleCalendarClick.bind(this);
  }
  handleCalendarClick(value) {
    this.setState({
      currentDate: new Date(value),
    });
  }
  componentDidMount() {
    axios
      .get("http://localhost:8080/")

      .then((res) => {
        // {
        //   data from Java
        // (id-int,employeeId-string, name-string, attendanceDate-Date("YYYY-MM-DD"))
        //  {1,"Mel-001", name:"abc", attendanceDate: "2020-11-01"}
        //  {2, ""Mel-001", name:"abc", attendanceDate: "2020-11-02""}
        //  {3, ""Mel-001", name:"abc", attendanceDate: "2020-11-03""}
        //  {4, ""Mel-002", name:"bbb", attendanceDate: "2020-11-02""}
        //  {5, ""Mel-002", name:"bbb", attendanceDate: "2020-11-03""}
        // }
        this.setState({ attendances: res.data });
      });
  }

  render() {
    return (
      <Card variant="outlined">
        <SearchBar
          handleCalendarClick={this.handleCalendarClick}
          attendances={this.state.attendances}
        ></SearchBar>
        <TableContainer>
          <Table stickyHeader={true} aria-label="sticky table">
            <TableHead>
              <TableHeadContent
                currentDaysOfMonth={getCurrentDayOfMonth(
                  this.state.currentDate
                )}
              ></TableHeadContent>
            </TableHead>
            <TableBody>
              <TableBodyContent
                attendances={this.state.attendances}
                currentDate={this.state.currentDate}
                currentDaysOfMonth={getCurrentDayOfMonth(
                  this.state.currentDate
                )}
              ></TableBodyContent>
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination rowsPerPageOptions={ [2,5,10,25,100]} component="div"></TablePagination> */}
      </Card>
    );
  }
}
