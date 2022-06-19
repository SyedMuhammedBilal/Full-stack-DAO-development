import { Box, Chip, Typography } from '@material-ui/core'
import React from 'react'
import Title from '../ReusableComponent/Title/Title'
import useStyles from './stylesheet'

const ProposalDetailHeader = ({ proposalDetail, proposalStatus }: any) => {
    const classes = useStyles();

    const getChip = (status: any) => {
        switch (status) {
          case "ongoing":
            return (
              <Chip
                style={{
                  backgroundColor: "#076AFF",
                  color: "#fff",
                }}
                label="ONGOING"
              />
            );
          case "passed":
            return (
              <Chip
                style={{
                  backgroundColor: "#00A843",
                  color: "#fff",
                }}
                label="PASSED"
              />
            );
          case "rejected":
            return (
              <Chip
                style={{
                  backgroundColor: "#FB3A3A",
                  color: "#fff",
                }}
                label="REJECTED"
              />
            );
        }
      };

      const date = new Date();
      const dayName = date.toLocaleDateString("en-US", {
        weekday: "long",
      });
    
    
  return (
    <Box>
        <Title width={"45rem"} heading={proposalDetail?.title} />
        <Box className={classes.userProposalDetailContainer}>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
            >{`Proposer`}</Typography>
            <Typography
              className={classes.detailValueTypo}
            >{`0x0e24g...3fcw430`}</Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
            >{`Timeline`}</Typography>
            <Typography className={classes.detailValueTypo}>
              {dayName}
            </Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
              style={{ paddingRight: "5rem" }}
            >{`Status`}</Typography>
           {getChip(proposalStatus)}
          </Box>
        </Box>
      </Box>
  )
}

export default ProposalDetailHeader