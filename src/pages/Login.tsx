import { Box, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Web3 from "web3";
import { useHistory } from 'react-router-dom';

const Login = () => {
   // account usestate
    const [account, setAccount] = useState();
    const [publicKey, setPublicKey] = useState<any>(null)
  const history = useHistory();

    // web3 wallet intialize function
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const init = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
        const accounts: any = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setPublicKey(accounts[0])
        history.push('/DAO')
    }

    console.log('account', account);

    useEffect(() => {
        if (publicKey) {
          sessionStorage.setItem("walletAddress", publicKey);
        }
      }, [publicKey, init])

      useEffect(() => {
        const localUser: any = sessionStorage.getItem('walletAddress');
        if (localUser) {
          setPublicKey(localUser)
          setAccount(localUser);
        }
      }, []);
    
  return (
    <Box>
        <Button onClick={init}>Login</Button>
    </Box>
  )
}

export default Login