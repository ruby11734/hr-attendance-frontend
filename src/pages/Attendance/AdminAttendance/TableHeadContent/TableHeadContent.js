import React, { Component } from "react";

import { TableCell, TableRow } from "@material-ui/core";

class TableHeadContent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TableRow>
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">Employee</TableCell>

        {this.props.currentDaysOfMonth.map((columns) => (
          <TableCell key={columns} align="center">
            {columns}
          </TableCell>
        ))}
      </TableRow>
    );
  }
}

export default TableHeadContent;
