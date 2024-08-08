import { Paper, Typography, Stack } from '@mui/material'
import React from 'react'

const PaperInformation = (props) => {
  const { userState } = props
  const { public_repos, followers, following } = userState
  return (
    <>
    <Paper elevation={3} sx={{marginTop: '15px'}}>
      <Stack direction='row' spacing={3} sx={{justifyContent: 'space-evenly', margin: '20px'}}>
        <Stack>
          <Typography variant='h5'>Repos</Typography>
          <Typography variant='h6' align='center'>{public_repos}</Typography>
        </Stack>
        <Stack>
          <Typography variant='h5'>Followers</Typography>
          <Typography variant='h6' align='center'>{followers}</Typography>
        </Stack>
        <Stack>
          <Typography variant='h5'>Following</Typography>
          <Typography variant='h6' align='center'>{following}</Typography>
        </Stack>
      </Stack>
    </Paper>
    </>
  )
}

export default PaperInformation