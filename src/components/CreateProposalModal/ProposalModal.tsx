import { Box, Button, InputLabel, TextField, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./stylesheet";
import { setModalOpen } from "../../store/DAO";
import { useAppDispatch } from "../../store";

const ProposalModal = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

    const close = () => {
        dispatch(setModalOpen(false))
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
              wallet address
            </InputLabel>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              className={classes.textFieldCustomization}
              id="outlined-basic"
              label="wallet address"
              variant="outlined"
            />

            <InputLabel style={{ marginTop: '2rem' }} className={classes.inputLabel}>
              write your proposal...
            </InputLabel>
            <TextField
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              style={{ height: '4rem' }}
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
            <Button onClick={close} className={classes.submitButton}>{`Submit proposal`}</Button>
          </Box>
      </Box>
    </Box>
  );
};

export default ProposalModal;
