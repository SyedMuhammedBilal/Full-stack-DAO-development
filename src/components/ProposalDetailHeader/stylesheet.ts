import { makeStyles } from "@material-ui/core";

export default makeStyles({
    userProposalDetailContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: '1rem'
    },
    userProposalDetailWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '1.5rem'
    },
    detailKeyTypo: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight : '23px',
        letterSpacing: '-0.015em',
        color: '#737373'
    },
    detailValueTypo: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight : '23px',
        letterSpacing: '-0.015em',
        color: '#A9A9A9',
        paddingLeft: '4rem'
    },
})