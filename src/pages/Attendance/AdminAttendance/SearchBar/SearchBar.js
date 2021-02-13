import { Grid, IconButton, TextField, InputAdornment } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";
import React, { Component } from "react";
import style from "./SearchBar.module.css";

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(new Date().getMonth() + 1);

    const getCurrentMonth = () => {
      let currentMonth = new Date().getMonth() + 1;
      currentMonth.toString.length === 1
        ? (currentMonth = "0" + currentMonth)
        : currentMonth;

      return new Date().getFullYear() + "-" + currentMonth;
    };

    return (
      <div className={style.container}>
        <Grid container direction="row" justify="center">
          <Grid container item xs={8} justify="flex-end">
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                onChange={() => {
                  this.props.handleCalendarClick(event.target.value);
                  console.log(event.target.value);
                }}
                type="month"
                inputProps={{
                  max:
                    // new Date().getFullYear() +
                    // "-" +
                    // (new Date().getMonth() + 1),
                    getCurrentMonth(),
                }}
                defaultValue={
                  // new Date().getFullYear() + "-" + (new Date().getMonth() + 1)
                  getCurrentMonth()
                }
              ></TextField>
            </Grid>
          </Grid>
          <Grid container item xs justify="flex-end">
            <form method="get" noValidate autoComplete="on">
              <TextField
                type="search"
                autoComplete="name"
                label="  Search ID or name"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton type="submit">
                        <SearchIcon></SearchIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default SearchBar;
