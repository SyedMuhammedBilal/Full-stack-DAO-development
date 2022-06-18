import { Box, IconButton, Typography } from '@material-ui/core'
import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import useStyles from './stylesheet'

const BackButton = () => {
    const classes = useStyles();
  return (
    <Box className={classes.goBackContainer}>
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