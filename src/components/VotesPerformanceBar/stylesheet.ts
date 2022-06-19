import { makeStyles } from "@material-ui/core";

export default makeStyles({
    progressContainer: {
        width: '27.5rem',
        height: '6.25rem',
        backgroundColor: '#252525',
        borderRadius: '12px',
        marginTop: '2rem',
        marginBottom: '3rem'
    },
    progressWrapper: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    votesBox: {
        display: 'flex',
        alignItems: 'center',
    
    },
    forVotesTypo: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight : '29px',
        letterSpacing: '-0.015em',
        color: '#A9A9A9'
    },
    numberOfVotes: {
        fontSize: '20px',
        fontWeight: 600,
        lineHeight : '29px',
        letterSpacing: '-0.015em',
        color: '#fff',
        paddingLeft: '1rem'
    }
})