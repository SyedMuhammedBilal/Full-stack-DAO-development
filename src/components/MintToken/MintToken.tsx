import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";
import TextField from "../ReusableComponent/TextField/TextFields";
import Button from "../ReusableComponent/Buttons/Button";
const MintToken = () => {
  const classes = useStyles();
  return (
    <Box className={classes.MainContainer}>
      <Box>
        <Typography className={classes.MinterHeading}>Mint Token</Typography>
      </Box>
      <hr />
      <TextField heading="Enter Wallet Address" label="Wallet Address " />
      <TextField heading="Amount of Token" label="Amount" />

      <Button buttonTitle="Mint" />
    </Box>
  );
};
export default MintToken;
