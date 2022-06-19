import { Box, Button, InputLabel, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import useStyles from "./stylesheet";
import { setModalOpen } from "../../store/DAO";
import { useAppDispatch } from "../../store";
import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from "react-moralis";
import { contractAddress } from "../../config/config";
import { IndexService } from "../../service/index.service";
import { Contract_ABi } from "../../ABis/RaydiumDAO";

const ProposalModal = () => {
  const contractProcessor = useWeb3ExecuteFunction()
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const classes = useStyles();
  const dispatch = useAppDispatch();
    const contractService: IndexService = useMemo(
    () => new IndexService(Contract_ABi, contractAddress), [contractAddress, Contract_ABi]
  )

    const close = () => {
        dispatch(setModalOpen(false))
    }


  const createProposal = async (proposalDescription: any, proposalTitle: any) => {
    const proposal = await contractService.createProposal(proposalDescription, proposalTitle)
    console.log("created: ", proposal)
    close()
  }

  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.ModalContainer}>
        <Box className={classes.ModalHeader}>
          <Box className={classes.ModalHeaderTitle}>
            <Typography
              className={classes.ModalHeaderSubTitle}
            >{`Create a New Proposal`}</Typography>
          </Box>
          <Box className={classes.inputWrapper}>
            <InputLabel className={classes.inputLabel}>
              proposal title
            </InputLabel>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              onChange={(e: any) => setTitle(e.target.value)}
              className={classes.textFieldCustomization}
              id="outlined-basic"
              label="title"
              variant="outlined"
            />

            <InputLabel style={{ marginTop: '2rem' }} className={classes.inputLabel}>
              write your proposal...
            </InputLabel>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              onChange={(e: any) => setDescription(e.target.value)}
              style={{ height: '4rem', color: '#fff' }}
              className={classes.multilineCustomization}
              id="outlined-multiline-static"
              label="description..."
              multiline
              rows={4}
              variant="outlined"
            />
          </Box>
          
        </Box>
        <Box className={classes.buttonWrapper}>
            <Button onClick={(e: any) => {
              e.preventDefault();
              createProposal(title, description)
              }} className={classes.submitButton}>{`Submit proposal`}</Button>
          </Box>
      </Box>
    </Box>
  );
};

export default ProposalModal;
