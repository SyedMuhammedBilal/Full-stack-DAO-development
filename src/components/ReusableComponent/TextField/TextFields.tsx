import { Box, Typography } from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import useStyles from "./stylesheet";

const ReusableTextFields = ({ label, heading }: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.TextWrapper}>
      <Typography className={classes.WalletHeading}>{heading}</Typography>

      <TextField
        className={classes.TextField}
        id="outlined-basic"
        label={label}
        inputProps={{ className: classes.input }}
        variant="outlined"
        InputLabelProps={{
          style: { color: "#fff" },
        }}
      />
    </Box>
  );
};

export default ReusableTextFields;
