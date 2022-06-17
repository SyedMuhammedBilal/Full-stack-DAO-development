import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const Title = ({ heading }: any) => {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Typography className={classes.MinterHeading}>
          {heading}
        </Typography>
      </Box>
      <hr style={{ borderColor: '#565656' }} />
    </>
  );
};

export default Title;
