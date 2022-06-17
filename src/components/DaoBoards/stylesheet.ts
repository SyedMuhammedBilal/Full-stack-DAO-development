import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  MainContainer: {
    width: "100%",
    height: "1117px",
    background: "#121315",
    paddingTop: "1rem",
  },
  DaoTitleAndButtonWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  createProposalButton: {
    width: '15.3rem',
    height: '2.7rem',
    background: '#565656',
    borderRadius: '10px',
    color: '#fff',
    
  },
  proposalsBoardMainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  onGoingProposalContainer: {
    marginTop: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  boardCardContainer: {
    width: "31.2rem",
    height: "12.563rem",
    background: "#252525",
    border: "1px solid #676767",
    borderRadius: "10px",
    marginTop: "1rem",
    '@media only screen and (max-width: 1840px)': {
      width: "29rem",
    },
    '@media only screen and (max-width: 1730px)': {
      width: "27rem",
    },
    '@media only screen and (max-width: 1630px)': {
      width: "25rem",
    },
    '@media only screen and (max-width: 1530px)': {
      width: "23rem",
    },
    '@media only screen and (max-width: 1440px)': {
      width: "21rem",
    },
  },
  boardContainerWrapper: {
    padding: "1rem",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "column",
  },
  proposalHeading: {
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "23px",
    letterSpacing: "-0.015em",
    color: "#FFFFFF",
  },
  votesWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "1rem",
  },
  proposalsVotesInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "7rem",
  },
  voteCountWrapper: {
    backgroundColor: "#565656",
    borderRadius: "50px",
    width: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '23px'
  },
  userInfoContainer: {
    display: "flex",
    alignItems: "center",
  }
}));
