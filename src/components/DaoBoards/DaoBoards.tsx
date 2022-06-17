import { Box, Button, Typography } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import React, { useState, useEffect } from "react";
import SelectInput from "../ReusableComponent/Select/Select";
import Title from "../ReusableComponent/Title/Title";
import AddIcon from "@material-ui/icons/Add";
import { useAppDispatch } from "../../store";
import { setModalOpen } from "../../store/DAO";
import { ReactComponent as ArrowUp } from "../../assets/SVGs/Arrow/Arrow_Circle_Up.svg";
import { ReactComponent as ArrowDown } from "../../assets/SVGs/Arrow/Arrow_Circle_Down.svg";
import { ReactComponent as ProfileIcon } from "../../assets/SVGs/profile-icon.svg";
import useStyles from "./stylesheet";

const DaoBoards = () => {
  const [modalOpen] = useState(false);
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleModalOpen = () => {
    dispatch(setModalOpen(!modalOpen));
  }

  return (
    <Box>
      <Box className={classes.DaoTitleAndButtonWrapper}>
        <Title heading={`Raydium DAO`} />

        <Button
          className={classes.createProposalButton}
          startIcon={<AddIcon />}
          onClick={handleModalOpen}
        >
          {`Create proposal`}
        </Button>
      </Box>
      <hr style={{ borderColor: "#565656", marginTop: "-0.1rem" }} />

      <Box className={classes.proposalsBoardMainContainer}>
        {/* ONGOING PROPOSALS */}
        <Box className={classes.onGoingProposalContainer}>
          <SelectInput heading={"ONGOING"} />

          <Box className={classes.boardCardContainer}>
            <Box className={classes.boardContainerWrapper}>
              <Typography
                className={classes.proposalHeading}
              >{`Pull Request #021: Bug on staking treasurey smart contract.`}</Typography>

              <Chip
                style={{
                  marginTop: "3rem",
                  backgroundColor: "#076AFF",
                  color: "#fff",
                }}
                label="ONGOING"
              />
              <Box className={classes.votesWrapper}>
                <Box className={classes.proposalsVotesInfo}>
                  <ArrowUp />
                  <ArrowDown />
                  <Box className={classes.voteCountWrapper}>
                    <Typography style={{ color: "#fff", fontSize: "12px" }}>
                      58
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.userInfoContainer}>
                  <Typography style={{ paddingRight: "0.5rem", color: "#fff" }}>
                    0x0a2f...3g2w0
                  </Typography>
                  <ProfileIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* PASSED PROPOSALS */}
        <Box className={classes.onGoingProposalContainer}>
          <SelectInput heading={"PASSED"} />

          <Box className={classes.boardCardContainer}>
            <Box className={classes.boardContainerWrapper}>
              <Typography
                className={classes.proposalHeading}
              >{`Pull Request #021: Bug on staking treasurey smart contract.`}</Typography>

              <Chip
                style={{
                  marginTop: "3rem",
                  backgroundColor: "#00A843",
                  color: "#fff",
                }}
                label="PASSED"
              />
              <Box className={classes.votesWrapper}>
                <Box className={classes.proposalsVotesInfo}>
                  <ArrowUp />
                  <ArrowDown />
                  <Box className={classes.voteCountWrapper}>
                    <Typography style={{ color: "#fff", fontSize: "12px" }}>
                      58
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.userInfoContainer}>
                  <Typography style={{ paddingRight: "0.5rem", color: "#fff" }}>
                    0x0a2f...3g2w0
                  </Typography>
                  <ProfileIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* REJECTED PROPOSALS */}
        <Box className={classes.onGoingProposalContainer}>
          <SelectInput heading={"REJECTED"} />

          <Box className={classes.boardCardContainer}>
            <Box className={classes.boardContainerWrapper}>
              <Typography
                className={classes.proposalHeading}
              >{`Pull Request #021: Bug on staking treasurey smart contract.`}</Typography>

              <Chip
                style={{
                  marginTop: "3rem",
                  backgroundColor: "#FB3A3A",
                  color: "#fff",
                }}
                label="REJECTED"
              />
              <Box className={classes.votesWrapper}>
                <Box className={classes.proposalsVotesInfo}>
                  <ArrowUp />
                  <ArrowDown />
                  <Box className={classes.voteCountWrapper}>
                    <Typography style={{ color: "#fff", fontSize: "12px" }}>
                      58
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.userInfoContainer}>
                  <Typography style={{ paddingRight: "0.5rem", color: "#fff" }}>
                    0x0a2f...3g2w0
                  </Typography>
                  <ProfileIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DaoBoards;
