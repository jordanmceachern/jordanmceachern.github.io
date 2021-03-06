import React from 'react'
import Typography from '@material-ui/core/Typography'
import CustomButton from './CustomButton'

const LandingPage = () => {
  return (
    <Typography
      component='div'
      style={{
        backgroundColor: '#eeeeee',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'start',
        paddingTop: '64px'
      }}
    >
      {
        ['People', 'Movies', 'Planets'].map(page => {
          return <CustomButton page={page} key={page} />
        })
      }
    </Typography>
  )
}

export default LandingPage
