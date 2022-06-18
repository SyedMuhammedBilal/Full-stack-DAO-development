import { Box } from "@material-ui/core";
import React from "react";
import ProposalDetail from "../components/ProposalDetail/ProposalDetail";
import BackButton from "../components/ReusableComponent/Back-Button/BackButton";

const Proposal = () => {
  return (
    <Box style={{ paddingLeft: "2rem", paddingRight: "2rem", paddingTop: '1.5rem' }}>
        <BackButton />
        <ProposalDetail />
    </Box>
  )
};

export default Proposal;
