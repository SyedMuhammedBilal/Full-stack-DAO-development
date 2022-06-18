import { Box } from "@material-ui/core";
import React from "react";
import ProposalDetail from "../components/ProposalDetail/ProposalDetail";
import BackButton from "../components/ReusableComponent/Back-Button/BackButton";
import VotesLinearBar from "../components/VotesPerformanceBar/VotesLinearBar";

const Proposal = () => {
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
      <VotesLinearBar />
    </Box>
  );
};

export default Proposal;
