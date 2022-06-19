import { Box } from "@material-ui/core";
import React from "react";
import ProposalDetail from "../components/ProposalDetail/ProposalDetail";
import BackButton from "../components/ReusableComponent/Back-Button/BackButton";
import VotesLinearBar from "../components/VotesPerformanceBar/VotesLinearBar";
import {useLocation} from 'react-router-dom';
import RedVotesLinearBar from "../components/VotesPerformanceBar/RedVoteLinearBar";

const Proposal = (props: any) => {
  const { state } = useLocation();
  console.log("State: ",  state);
  return (
    <Box
      style={{
        paddingLeft: "2rem",
        paddingRight: "2rem",
        paddingTop: "1.5rem",
        backgroundColor: "#121315",
        paddingBottom: "2rem",
      }}
    >
      <BackButton />
      <ProposalDetail />
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <VotesLinearBar />
      <RedVotesLinearBar />
      </Box>
    </Box>
  );
};

export default Proposal;
