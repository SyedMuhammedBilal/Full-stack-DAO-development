import { makeStyles } from "@material-ui/core";

export default makeStyles({
    detailValueTypo: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight : '23px',
        letterSpacing: '-0.015em',
        color: '#A9A9A9',
        paddingLeft: '4rem'
    },
    activeTab: {
        width: "5rem",
        background: "#121315",
        paddingTop: '3rem',
        marginTop: '-2.5rem'
    },
    detailContainer: {
        marginTop: '1rem'
    },
    detaiTitlelWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    proposalTitle: {
        fontSize: '25px',
        fontWeight: 600,
        lineHeight : '35px',
        letterSpacing: '-0.015em',
        color: '#FFFFFF'
    },
    descriptionBoxWrapper: {
        background: '#252525',
        width: '45.813rem',
        height: '9.93rem',
        borderRadius: '12px',
        marginTop: '1rem',
        marginLeft: '2.4rem'
    },
    descriptionBox: {
        padding: '1rem'
    },
    descriptionTypo: {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight : '29px',
        letterSpacing: '-0.015em',
        color: '#A9A9A9'
    },
    voteContainer: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column', 
    },
    VoteBoxWrapper: {
        marginTop: '1rem',
        marginLeft: '2.4rem'
    },
    voteWrapper: {
        display: 'flex',
        alignItems: 'center',
    },
    voteOptionTypo: {
        fontSize: '20px',
        fontWeight: 400,
        lineHeight : '29px',
        letterSpacing: '-0.015em',
        color: '#fff'
    },
    checkBox: {
        display: 'flex',
        '& .MuiSvgIcon-root': {
            fill: '#076AFF !important',
            color: '#076AFF !important'
        },
        '& .MuiCheckbox-colorPrimary.Mui-checked': {
            fill: '#076AFF !important',
            color: '#076AFF !important'
        }
        
    }
})