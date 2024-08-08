import { Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import PaperInformation from '../PaperInformation/PaperInformation'
import LocationInformation from '../LocationInformation/LocationInformation'

const Description = (props) => {
  const { userState } = props
  const { bio } = userState
  return (
    <>
    <Stack sx={{justifyContent:'center'}}>
        {bio !== null ?
      <Typography variant='body1'>
          {bio}
      </Typography> : <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, eius accusantium. Non facere veniam sit asperiores dignissimos!
      </Typography>}
        
      <PaperInformation userState={userState}/>
      <LocationInformation userState={userState}/>
    </Stack>
      </>
    )
}

export default Description