import { Box } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../store";
import Sidebar from "../components/sidebar/Sidebar";
import ProposalModal from "../components/CreateProposalModal/ProposalModal";

const Dashboard = ({ children }: any) => {

  // modalOpen from store
  const {isModalOpen}  = useAppSelector(state => state.dao);

  console.log(isModalOpen);
  return (
    <>
      {isModalOpen ? <ProposalModal /> : null}

    <Box display="flex" width="100vw" height="100vh">
      <Sidebar />
      <Box width="100%" style={{background: "#121315"}} flex={1} id="dashboard-page">
        <Box width="100%">
          {/* <Navbar /> */}
          {children}
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Dashboard;
