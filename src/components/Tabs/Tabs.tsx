import { Box } from '@material-ui/core';
import React from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useStyles from "./stylesheet";

function a11yProps(index: any) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

const HomeTabs = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    
  return (
    <Box className={classes.MainContainer}>
    <Tabs
          value={value}
        //   onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          style={{ width: '50rem' }}
        >
          <Tab style={{ color: '#fff' }} label="DAO" {...a11yProps(0)} />
          <Tab style={{ color: '#fff' }} label="Forum" {...a11yProps(1)} />
          <Tab style={{ color: '#fff' }} label="Docs" {...a11yProps(2)} />
        </Tabs>
    </Box>
  )
}

export default HomeTabs