import { Box } from '@material-ui/core'
import React from 'react'
import DaoBoards from '../components/DaoBoards/DaoBoards'
import HomeTabs from '../components/Tabs/Tabs'

const Home = () => {
  return (
    <Box style={{ paddingLeft: '2rem',
    paddingRight: '2rem', }}>
      <HomeTabs />
      <DaoBoards />
    </Box>
  )
}

export default Home