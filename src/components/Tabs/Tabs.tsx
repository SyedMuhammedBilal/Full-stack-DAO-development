import { Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useStyles from "./stylesheet";
import Web3 from "web3";

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const HomeTabs = () => {
  const [account, setAccount] = useState<any>();
  const [publicKey, setPublicKey] = useState<any>(null);
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const walletInitializer = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    const accounts: any = await web3.eth.requestAccounts();
    setPublicKey(accounts[0]);
    setAccount(accounts[0]);
    console.log("account", accounts[0]);
  };

  useEffect(() => {
    if (publicKey) {
      sessionStorage.setItem("walletAddress", publicKey);
    }
  }, [publicKey, walletInitializer]);

  useEffect(() => {
    const localUser: any = sessionStorage.getItem("walletAddress");
    if (localUser) {
      setPublicKey(localUser);
      setAccount(localUser);
    }
  }, []);

  return (
    <Box className={classes.MainContainer}>
      <Tabs
        value={value}
        //   onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        style={{ width: "50rem" }}
      >
        <Tab style={{ color: "#fff" }} label="DAO" {...a11yProps(0)} />
        <Tab style={{ color: "#fff" }} label="Forum" {...a11yProps(1)} />
        <Tab style={{ color: "#fff" }} label="Docs" {...a11yProps(2)} />
      </Tabs>
      {account?.length < 1 ? (
        <Button
          className={classes.createProposalButton}
          onClick={walletInitializer}
        >
          {`Login with wallet`}
        </Button>
      ) : null}
    </Box>
  );
};

export default HomeTabs;
