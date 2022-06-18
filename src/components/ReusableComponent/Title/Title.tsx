import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./stylesheet";

const Title = ({ heading, width }: any) => {
  const classes = useStyles();
  return (
    <>
      <Box style={{ width: width }}>
        <Typography style={{textAlign: 'start'}} className={classes.MinterHeading}>
          {heading}
        </Typography>
      </Box>
      {/* 565656 */}
      <hr style={{ borderColor: 'transparent' }} />
    </>
  );
};

export default Title;
