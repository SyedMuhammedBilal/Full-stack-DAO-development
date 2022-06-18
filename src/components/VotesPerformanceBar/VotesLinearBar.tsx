import {
  Box,
  Theme,
  Typography,
  withStyles,
  createStyles,
} from "@material-ui/core";
import React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import useStyles from "./stylesheet";

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#00A843",
    },
  })
)(LinearProgress);

const VotesLinearBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.progressContainer}>
      <Box className={classes.progressWrapper}>
        <Box className={classes.votesBox}>
          <Typography className={classes.forVotesTypo}>Votes For</Typography>
          <Typography className={classes.numberOfVotes}>05</Typography>
        </Box>
        <Box style={{ marginTop: '0.5rem' }}>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </Box>
    </Box>
  );
};

export default VotesLinearBar;
