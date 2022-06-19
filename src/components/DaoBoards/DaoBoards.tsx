import {
  Box,
  Button,
  FormControl,
  Select,
  Typography,
} from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import React, { useState, useEffect, useMemo } from "react";
import SelectInput, {
  BootstrapInput,
} from "../ReusableComponent/Select/Select";
import Title from "../ReusableComponent/Title/Title";
import AddIcon from "@material-ui/icons/Add";
import { useAppDispatch } from "../../store";
import {
  setCount,
  setModalOpen,
  setPassRate,
  setTotalProposal,
} from "../../store/DAO";
import { ReactComponent as ArrowUp } from "../../assets/SVGs/Arrow/Arrow_Circle_Up.svg";
import { ReactComponent as ArrowDown } from "../../assets/SVGs/Arrow/Arrow_Circle_Down.svg";
import { ReactComponent as ProfileIcon } from "../../assets/SVGs/profile-icon.svg";
import { ReactComponent as UnfoldIcon } from "../../assets/SVGs/Arrow/Unfold_More.svg";
import useStyles from "./stylesheet";
import {
  useMoralis,
  useMoralisWeb3Api,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { generatePath, Link, useHistory } from "react-router-dom";
import { AppRoutes } from "../../routes/routes";
import { IndexService } from "../../service/index.service";
import { config, contractAddress } from "../../config/config";
import { Contract_ABi } from "../../ABis/RaydiumDAO";

const DaoBoards = () => {
  const [modalOpen] = useState(false);
  const [proposals, setProposals] = useState<any[]>([]);
  const [passedProposals, setPassedProposals] = useState<any[]>([]);
  const [rejectedProposals, setRejectedProposals] = useState<any[]>([]);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const contractService: IndexService = useMemo(
    () => new IndexService(Contract_ABi, contractAddress),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contractAddress, Contract_ABi]
  );

  useEffect(() => {
    const getCounts = async () => {
      const { contractServerUrl } = config;
      const response = await contractService.getProposalCounts();
      const contract: any = new contractServerUrl.eth.Contract(
        Contract_ABi,
        contractAddress
      );
      for (let i = 0; i <= response; i++) {
        const proposal = await contract.methods.Proposals(i).call({
          from: sessionStorage.getItem("walletAddress"),
        });
        // filter votes that has voteUp and voteDown are equal to 0
        if (proposal.votesUp === proposal.votesDown) {
          setProposals((prevProposals) => [...prevProposals, proposal]);
        }
        // filter out proposals that has greater votesUp then votesDown and save it to filtered usestate
        if (proposal.votesUp > proposal.votesDown) {
          setPassedProposals((prevPassedProposals) => [
            ...prevPassedProposals,
            proposal,
          ]);
        }
        // filter out proposals that has less votesUp then votesDown and save it to filtered usestate
        if (proposal.votesUp < proposal.votesDown) {
          setRejectedProposals((prevRejectedProposals) => [
            ...prevRejectedProposals,
            proposal,
          ]);
        }
      }

      console.log("response", response);
    };
    getCounts();
  }, [contractService]);

  console.log("response-porposals", proposals);
  console.log("response-passedProposals", passedProposals);
  console.log("response-rejectedProposals", rejectedProposals);

  const navigateProposalRoute = (id: any) => {
    const pathname = generatePath(AppRoutes.Proposal, {
      id,
    });
    history.push({
      pathname,
    });
  };

  const handleModalOpen = () => {
    dispatch(setModalOpen(!modalOpen));
  };

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
          <FormControl>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={"ONGOING"}
              input={<BootstrapInput />}
              IconComponent={UnfoldIcon}
            ></Select>
          </FormControl>

          {proposals?.map((items: any) => {
            return (
              <>
                {items?.title === "" ? null : (
                  <Box key={items?.id} className={classes.boardCardContainer}>
                    <Box
                      onClick={() => navigateProposalRoute(items?.id)}
                      className={classes.boardContainerWrapper}
                    >
                      <Typography className={classes.proposalHeading}>
                        {items?.title}
                      </Typography>

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
                            <Typography
                              style={{ color: "#fff", fontSize: "12px" }}
                            >
                              {items?.votesUp}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.userInfoContainer}>
                          <Typography
                            style={{ paddingRight: "0.5rem", color: "#fff" }}
                          >
                            0x0a2f...3g2w0
                          </Typography>
                          <ProfileIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </>
            )
          })}
        </Box>

        {/* PASSED PROPOSALS */}
        <Box className={classes.onGoingProposalContainer}>
          <FormControl>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={"PASSED"}
              input={<BootstrapInput />}
              IconComponent={UnfoldIcon}
            ></Select>
          </FormControl>

          {passedProposals?.map((items: any) => {
            return (
              <>
                {items?.title === "" ? null : (
                  <Box onClick={() => navigateProposalRoute(items?.id)} className={classes.boardCardContainer}>
                    <Box className={classes.boardContainerWrapper}>
                      <Typography
                        className={classes.proposalHeading}
                      >{items?.title}</Typography>

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
                            <Typography
                              style={{ color: "#fff", fontSize: "12px" }}
                            >
                              {items?.votesUp}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.userInfoContainer}>
                          <Typography
                            style={{ paddingRight: "0.5rem", color: "#fff" }}
                          >
                            0x0a2f...3g2w0
                          </Typography>
                          <ProfileIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </>
            );
          })}
        </Box>

        {/* REJECTED PROPOSALS */}
        <Box className={classes.onGoingProposalContainer}>
          <FormControl>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={"REJECTED"}
              input={<BootstrapInput />}
              IconComponent={UnfoldIcon}
            ></Select>
          </FormControl>

          {rejectedProposals?.map((items: any) => {
            return (
              <>
                {items?.title === "" ? null : (
                  <Box onClick={() => navigateProposalRoute(items?.id)} className={classes.boardCardContainer}>
                    <Box className={classes.boardContainerWrapper}>
                      <Typography
                        className={classes.proposalHeading}
                      >{items?.title}</Typography>

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
                            <Typography
                              style={{ color: "#fff", fontSize: "12px" }}
                            >
                              {items?.votesDown}
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={classes.userInfoContainer}>
                          <Typography
                            style={{ paddingRight: "0.5rem", color: "#fff" }}
                          >
                            0x0a2f...3g2w0
                          </Typography>
                          <ProfileIcon />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default DaoBoards;
