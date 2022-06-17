import React from "react";
import { Box, Button } from "@material-ui/core";
import useStyles from "./stylesheet";

const ReusableButton = ({ buttonTitle, width, padding }: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.btnWrapper}>
      <Button style={{ width, padding }} className={classes.Minterbtn}>
        {buttonTitle}
      </Button>
    </Box>
  );
};

export default ReusableButton;
