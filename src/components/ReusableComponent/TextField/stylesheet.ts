import { makeStyles } from "@material-ui/core";

export default makeStyles({
  TextField: {
    color: "#626262 !important",
    width: "489.21px",
    "& label:focus, input:focus": {
      color: "#fff",
    },
    borderRadius: "4.35714px",
    marginTop: "1rem",
    marginBottom: "1rem",
    "& .MuiOutlinedInput-root": {
      '& fieldset': {
        borderColor: '#626262',
      },
      '&:hover fieldset': {
        borderColor: '#626262',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#626262',
      },
    },
  },
  input: {
    color: "white"
  },
  TextWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  WalletHeading: {
    fontWeight: 500,
    fontSize: "20px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.15px",
    color: "#fff",
  },
});