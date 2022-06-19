import { Box, Chip, Typography } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import Title from "../ReusableComponent/Title/Title";
import useStyles from "./stylesheet";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import Checkbox from "@material-ui/core/Checkbox";
import { useParams } from "react-router-dom";
import { IndexService } from "../../service/index.service";
import { Contract_ABi } from "../../ABis/RaydiumDAO";
import { config, contractAddress } from "../../config/config";
import { useDispatch } from "react-redux";
import { setAgainstVote, setForVote } from "../../store/DAO";
import { GetProposalStatus } from "../../helpers/GetProposalStatus";
import ProposalDetailHeader from "../ProposalDetailHeader/ProposalDetailHeader";

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const ProposalDetail = (props: any) => {
  const [proposalDetail, setProposalDetail] = useState<any>({});
  const [proposalStatus, setProposalStatus] = useState<any>("");
  const [value] = useState(0);
  const [checked, setChecked] = React.useState(true);

  const dispatch = useDispatch();

  const { id } = useParams<any>();

  console.log("ID: ", id);

  const classes = useStyles();

  const contractService: IndexService = useMemo(
    () => new IndexService(Contract_ABi, contractAddress),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contractAddress, Contract_ABi]
  );

  useEffect(() => {
    const getCounts = async () => {
      const { contractServerUrl } = config;
      const contract: any = new contractServerUrl.eth.Contract(
        Contract_ABi,
        contractAddress
      );
      const proposal = await contract.methods.Proposals(id).call({
        from: sessionStorage.getItem("walletAddress"),
      });
      setProposalDetail(proposal);
      dispatch(setForVote(proposal?.votesUp));
      dispatch(setAgainstVote(proposal?.votesDown));
      const status = GetProposalStatus(proposal);
      console.log("status", status);
      setProposalStatus(status);
    };
    getCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contractService]);

  console.log("response", proposalDetail);

  const handleVoteOnProposal = async (vote: any) => {
    const response: any = await contractService.voteOnProposal(id, vote);
    console.log("contract", response);
    return response;
  };

  return (
    <Box>
      <ProposalDetailHeader proposalDetail={proposalDetail} proposalStatus={proposalStatus} />
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
            <Typography className={classes.proposalTitle}>
              {proposalDetail?.title}
            </Typography>
          </Box>
        </Box>

        <Box className={classes.descriptionBoxWrapper}>
          <Box className={classes.descriptionBox}>
            <Typography className={classes.descriptionTypo}>
              {proposalDetail?.description}
            </Typography>
          </Box>
        </Box>

        <Box
          style={{ marginTop: "1rem" }}
          className={classes.detaiTitlelWrapper}
        >
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
                  defaultChecked={false}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  className={classes.checkBox}
                  onChange={(e: any) => handleVoteOnProposal(e.target.checked)}
                />
              </Box>
              <Box style={{ paddingLeft: "1rem" }}>
                <Typography
                  className={classes.voteOptionTypo}
                >{`For`}</Typography>
              </Box>
            </Box>
            <Box className={classes.voteWrapper}>
              <Box>
                <Checkbox
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  defaultChecked={false}
                  className={classes.checkBox}
                  onChange={(e: any) => handleVoteOnProposal(false)}
                />
              </Box>
              <Box style={{ paddingLeft: "1rem" }}>
                <Typography
                  className={classes.voteOptionTypo}
                >{`Against`}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProposalDetail;
