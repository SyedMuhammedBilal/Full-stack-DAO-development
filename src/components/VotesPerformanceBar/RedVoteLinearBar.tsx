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
import { useAppSelector } from "../../store";
  
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
        backgroundColor: "#FB3A3A",
      },
    })
  )(LinearProgress);
  
  const RedVotesLinearBar = () => {
    const classes = useStyles();
    const { againstVote } = useAppSelector((state) => state.dao);
    return (
      <Box style={{ marginLeft: '2rem' }} className={classes.progressContainer}>
        <Box className={classes.progressWrapper}>
          <Box className={classes.votesBox}>
            <Typography className={classes.forVotesTypo}>Votes Against</Typography>
            <Typography className={classes.numberOfVotes}>{againstVote}</Typography>
          </Box>
          <Box style={{ marginTop: '0.5rem' }}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default RedVotesLinearBar;
  