import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { Theme, withStyles, createStyles } from "@material-ui/core";
import { ReactComponent as UnfoldIcon } from "../../../assets/SVGs/Arrow/Unfold_More.svg";

export const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    input: {
      borderRadius: '10px',
      position: "relative",
      backgroundColor: "#565656",
      fontSize: 16,
      //   padding: '10px 10px 10px 15rem',
      width: "30rem",
      height: "2rem",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
      '@media only screen and (max-width: 1840px)': {
        width: "28rem",
      },
      '@media only screen and (max-width: 1730px)': {
        width: "26rem",
      },
      '@media only screen and (max-width: 1630px)': {
        width: "24rem",
      },
      '@media only screen and (max-width: 1530px)': {
        width: "22rem",
      },
      '@media only screen and (max-width: 1440px)': {
        width: "20rem",
      },
    },
  })
)(InputBase);

const SelectInput = ({ heading }: any) => {
  return (
    <FormControl>
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={heading}
        label={heading}
        input={<BootstrapInput />}
        IconComponent={UnfoldIcon}
      >
      </Select>
    </FormControl>
  );
};

export default SelectInput;
