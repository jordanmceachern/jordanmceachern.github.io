import React from 'react'
import Typography from '@material-ui/core/Typography'
import CustomButton from './CustomButton'

export default function LandingPage () {
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
        ['People', 'Planets', 'Movies'].map(page => {
          return <CustomButton page={page} key={page} />
        })
      }
    </Typography>
  )
}
