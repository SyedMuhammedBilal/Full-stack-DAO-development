import { Box, Chip, Typography } from "@material-ui/core";
import React from "react";
import Title from "../ReusableComponent/Title/Title";
import useStyles from "./stylesheet";

const ProposalDetail = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Title
          width={"45rem"}
          heading={
            "Pull Request #021: Bug on staking  treasurey smart contract."
          }
        />
        <Box className={classes.userProposalDetailContainer}>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
            >{`Proposer`}</Typography>
            <Typography className={classes.detailValueTypo}>{`0x04af...53f2c`}</Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
            >{`Timeline`}</Typography>
            <Typography className={classes.detailValueTypo}>{`18-06-2022, Saturday`}</Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
              style={{ paddingRight: '5.5rem' }}
            >{`Status`}</Typography>
            <Chip
              style={{
                backgroundColor: "#076AFF",
                color: "#fff",
              }}
              label="ONGOING"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalDetail;
