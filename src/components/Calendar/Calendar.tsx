import {
  Divider,
  Grid,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const useStyles = makeStyles({
  Calen: {
    width: 42,
    height: 42,
    position: "relative",
    marginTop: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: "#E8F5DB",
      color: "#425D50",
      transition: "all .3s",
    },
    "&:hover >*": {
      color: "#425D50",
      backgroundColor: "#425D50",
    },
  },
  CalenS: {
    width: 42,
    height: 42,
    marginTop: 4,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    cursor: "pointer",
    alignItems: "center",
    borderRadius: "100%",
    color: "white",
    background: "#425D50",
  },
  CalendotS: {
    position: "absolute",
    width: 4,
    height: 4,
    background: "#425D50",
    borderRadius: "100%",
    left: " 45.24%",
    right: "45.24%",
    top: "73.81%",
    bottom: "16.67%",
  },
  Calendotother: {
    position: "absolute",
    width: 4,
    height: 4,
    background: "#425D50",
    borderRadius: "100%",
    left: " 45.24%",
    right: "45.24%",
    top: "73.81%",
    bottom: "16.67%",
  },
  pre: {
    color: "#DEE4ED",
  },
});

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  const DAYS_OF_THE_WEEK = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const start = new Date();
  start.setDate(1);
  const [date, setDate] = useState(start);
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [lastDay, setLastDay] = useState(getlastDay(date));
  const [prevLastDay, setprevlastDay] = useState(getprevLastDay(date));
  const [lastDayIndex, setlastDayIndex] = useState(getlastDayIndex(date));
  const [firstDayIndex, setfirstDayIndex] = useState(getfirstDayIndex(date));

  function CalendarBlock(props) {
    const classes = useStyles();
    const holdingvar = new Date(props.year, props.month, props.day);

    const handleClick = () => {
      setSelectedDate(holdingvar);
    };


    return holdingvar.toDateString().slice(0, 15) === selectedDate.toDateString().slice(0, 15) ? (
      <Grid item className={classes.CalenS} onClick={() => handleClick()} >
        <Typography align="center" variant="body1">
          {props.day}
        </Typography>
      </Grid>
    ) : (
      <Grid item className={classes.Calen} onClick={() => handleClick()}>
        {(
          <>
            {props.type != "main" ? (
              <Typography
                align="center"
                variant="body1"
                className={classes.pre}
                style={{ background: "transparent" }}
              >
                {props.day}
              </Typography>
            ) : (
              <Typography
                align="center"
                variant="body1"
                style={{ background: "transparent" }}
              >
                {props.day}
              </Typography>
            )}
          </>
        )}
      </Grid>
    );
  }

  function monthdebugger(month, action) {
    switch (action) {
      case "+":
        switch (month) {
          case 11:
            return 0;
          default:
            return month + 1;
        }
      case "-":
        switch (month) {
          case 0:
            return 11;
          default:
            return month - 1;
        }
    }
  }

  function yeardebugger(year, month, action) {
    switch (action) {
      case "+": {
        if (month === 11) {
          return year + 1;
        }
        return year;
      }

      case "-": {
        if (month === 0) {
          return year - 1;
        }
        return year;
      }
      default:
        return year;
    }
  }

  function getlastDay(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }

  function getprevLastDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  }

  function getfirstDayIndex(date) {
    return date.getDay();
  }

  function getlastDayIndex(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  }

  var nextDays = 7 - lastDayIndex - 1;

  const arr = [];
  const demo = [];

  for (let x = firstDayIndex; x > 0; x--) {
    arr.push(prevLastDay - x + 1);
    demo.push({
      day: prevLastDay - x + 1,
      month: monthdebugger(month, "-"),
      year: yeardebugger(year, month, "-"),
      type: "other",
    });
  }

  for (let i = 1; i <= lastDay; i++) {
    arr.push(i);
    demo.push({ day: i, month: month, year: year, type: "main" });
  }

  for (let j = 1; j <= nextDays; j++) {
    arr.push(j);
    demo.push({
      day: j,
      month: monthdebugger(month, "+"),
      year: yeardebugger(year, month, "+"),
      type: "other",
    });
  }

  useEffect(() => {
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setLastDay(getlastDay(date));
    setprevlastDay(getprevLastDay(date));
    setlastDayIndex(getlastDayIndex(date));
    setfirstDayIndex(getfirstDayIndex(date));
  }, [date]);

  return (
    <>
      <Grid
        container
        direction="column"
        style={{
          width: 360,
          padding: "16px 21px",
          background: "#FFFFFF",
          borderRadius: "8px",
          border: " 1px solid #DEE4ED",
        }}
      >
        <Grid
          style={{ marginBottom: "24px" }}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton
            style={{
              height: 24,
              width: 24,
              background: " #FFFFFF",
              border: "1px solid #DEE4ED",
              borderRadius: 4,
              padding: 8,
            }}
            onClick={() => {
              setDate(new Date(year, month - 1, 1));
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
          <Typography variant="h5">{MONTHS[month] + " " + year}</Typography>
          <IconButton
            style={{
              height: 24,
              width: 24,
              background: " #FFFFFF",
              border: "1px solid #DEE4ED",
              borderRadius: 4,
              padding: 8,
            }}
            onClick={() => {
              setDate(new Date(year, month + 1, 1));
            }}
          >
            <NavigateNextIcon />
          </IconButton>
        </Grid>
        <Grid container justifyContent="space-between">
          {DAYS_OF_THE_WEEK.map((e, i) => (
            <Typography
              variant="h5"
              color="primary"
              align="center"
              key={i}
              style={{ width: 42 }}
            >
              {e}
            </Typography>
          ))}
        </Grid>
        <Divider style={{ margin: "16px 0px 8px 0px" }} />
        <Grid container justifyContent="space-between">
          {demo.map((e, i) => (
            <CalendarBlock
              key={i}
              day={e.day}
              month={e.month}
              year={e.year}
              type={e.type}
            ></CalendarBlock>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

