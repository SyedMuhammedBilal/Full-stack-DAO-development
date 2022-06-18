import { Box, Chip, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Title from "../ReusableComponent/Title/Title";
import useStyles from "./stylesheet";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Checkbox from "@material-ui/core/Checkbox";

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const ProposalDetail = () => {
  const [value, setValue] = useState(0);
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

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
            <Typography
              className={classes.detailValueTypo}
            >{`0x04af...53f2c`}</Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
            >{`Timeline`}</Typography>
            <Typography
              className={classes.detailValueTypo}
            >{`18-06-2022, Saturday`}</Typography>
          </Box>
          <Box className={classes.userProposalDetailWrapper}>
            <Typography
              className={classes.detailKeyTypo}
              style={{ paddingRight: "5.5rem" }}
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
      <Box className={classes.activeTab}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ width: "10rem" }}
        >
          <Tab
            style={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 600,
              textTransform: "none",
            }}
            label="Proposal"
            {...a11yProps(0)}
          />
        </Tabs>
      </Box>

      <Box className={classes.detailContainer}>
        <Box className={classes.detaiTitlelWrapper}>
          <Box>
            <DragHandleIcon style={{ fill: "#737373" }} />
          </Box>
          <Box style={{ paddingLeft: "1rem" }}>
            <Typography
              className={classes.proposalTitle}
            >{`Pull Request #021: Bug on staking  treasurey smart contract.`}</Typography>
          </Box>
        </Box>

        <Box className={classes.descriptionBoxWrapper}>
          <Box className={classes.descriptionBox}>
            <Typography
              className={classes.descriptionTypo}
            >{`found a bug on a smart contract that can lead to drainage of Ethers from smart contract.`}</Typography>
          </Box>
        </Box>

        <Box style={{ marginTop: '1rem' }} className={classes.detaiTitlelWrapper}>
          <Box>
            <DragHandleIcon style={{ fill: "#737373" }} />
          </Box>
          <Box style={{ paddingLeft: "1rem" }}>
            <Typography
              className={classes.proposalTitle}
            >{`Cast vote`}</Typography>
          </Box>
        </Box>

        <Box className={classes.VoteBoxWrapper}>
          <Box className={classes.voteContainer}>
            <Box className={classes.voteWrapper}>
              <Box>
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  className={classes.checkBox}
                />
              </Box>
              <Box style={{ paddingLeft: "1rem" }}>
                <Typography className={classes.voteOptionTypo}>{`For`}</Typography>
              </Box>
            </Box>
            <Box className={classes.voteWrapper}>
              <Box>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  defaultChecked={false}
                  className={classes.checkBox}
                    
                />
              </Box>
              <Box style={{ paddingLeft: "1rem" }}>
                <Typography className={classes.voteOptionTypo}>{`Against`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalDetail;
