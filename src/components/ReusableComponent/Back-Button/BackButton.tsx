import { Box, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from './stylesheet'
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const classes = useStyles()
    const history = useHistory();
  return (
    <Box onClick={() => history.goBack()} className={classes.goBackContainer}>
        <IconButton className={classes.goBackBtnWrapper}>
            <ArrowBackIosIcon style={{ fill: '#076AFF' }} />
        </IconButton>
        <Box>
            <Typography className={classes.ButtonTypo}>Back</Typography>
        </Box>
    </Box>
  )
}

export default BackButton