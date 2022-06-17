import { makeStyles } from "@material-ui/core";

export default makeStyles({
  MainContainer: {
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(35px)",
    zIndex: 99,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ModalContainer: {
    width: "66.25rem",
    height: "47rem",
    background: "#252525",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px 2px rgba(0, 0, 0, 0.3)",
    '@media only screen and (max-width: 1840px)': {
      width: "64rem",
      height: "45rem",
    },
    '@media only screen and (max-width: 1730px)': {
      width: "62rem",
      height: "43rem",
    },
    '@media only screen and (max-width: 1630px)': {
      width: "60rem",
      height: "41rem",
    },
    '@media only screen and (max-width: 1530px)': {
      width: "58rem",
      height: "39rem",
    },
    '@media only screen and (max-width: 1440px)': {
      width: "56rem",
      height: "37rem",
    },
  },
  ModalHeader: {
    padding: "4rem",
    display: "flex",
    flexDirection: "column",
  },
  ModalHeaderTitle: {},
  ModalHeaderSubTitle: {
    color: "#fff",
    fontSize: "40px",
    fontWeight: 600,
    lineHeight: "47px",
    letterSpacing: "0.04em",
  },
  inputWrapper: {
    marginTop: "2rem",
  },
  inputLabel: {
    color: "#fff",
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: "35px",
    letterSpacing: "0.04em",
  },
  textFieldCustomization: {
    color: "#626262 !important",
    width: "489.21px",
    "& label:focus, input:focus": {
      color: "#fff",
    },
    borderRadius: "4.35714px",
    marginTop: "1rem",
    marginBottom: "1rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#626262",
      },
      "&:hover fieldset": {
        borderColor: "#626262",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#626262",
      },
    },
    
    },
    multilineCustomization: {
        color: "#626262 !important",
        width: "489.21px",
        "& label:focus, input:focus": {
          color: "#fff",
        },
        "& .MuiOutlinedInput-multiline": {
            padding: "45.5px 14px",
        },
        borderRadius: "4.35714px",
        marginTop: "1rem",
        marginBottom: "1rem",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#626262",
          },
          "&:hover fieldset": {
            borderColor: "#626262",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#626262",
          },
        },
    },
    buttonWrapper: {
      paddingLeft: "4rem",
      paddingRight: "4rem",
      paddingTop: '4rem',
    display: "flex",
    alignItems: 'end',
    justifyContent: 'flex-end'
    },
    submitButton: {
      width: '246px',
      height: '50px',
      backgroundColor: '#076AFF',
      borderRadius: '10px',
      color: '#fff',
      textTransform: 'none',
      fontSize: '20px',
      lineHeight: '23px',
      letterSpacing: '-0.015em'
    }
});
