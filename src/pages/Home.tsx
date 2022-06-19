import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
import DaoBoards from "../components/DaoBoards/DaoBoards";
import HomeTabs from "../components/Tabs/Tabs";
import Login from "./Login";

const Home = () => {
  const [account, setAccount] = useState();
  const [publicKey, setPublicKey] = useState<any>(null)
  const [userAddress, setUserAddress] = React.useState<any>(null);
  React.useEffect(() => {
    const localUser: any = sessionStorage.getItem("walletAddress");
    console.log('localUser', localUser);
    if (localUser) {
      setUserAddress(localUser);
    }
  }, []);

 
  return (
    <Box style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
        <>
          <HomeTabs />
          <DaoBoards />
        </>
    </Box>
  );
};

export default Home;
