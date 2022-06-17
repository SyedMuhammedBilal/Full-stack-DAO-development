import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useAppSelector } from "../store";
import Sidebar from "../components/sidebar/Sidebar";
import ProposalModal from "../components/CreateProposalModal/ProposalModal";

const Dashboard = ({ children }: any) => {

  // modalOpen from store
  const {isModalOpen}  = useAppSelector(state => state.dao);

  useEffect(() => {
    console.log(isModalOpen);
  }, [isModalOpen])
  return (
    <>
      {isModalOpen && <ProposalModal />}
     
        <Box display="flex" position="relative" width="100vw" height="100vh">
          <Sidebar />
          <Box width="100%" style={{background: "#121315"}} flex={1} id="dashboard-page">
            <Box width="100%">
              {children}
            </Box>
          </Box>
        </Box>
      
    </>
  );
};

export default Dashboard;
