import { LocationOn, Twitter, Language, Business } from '@mui/icons-material'
import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const LocationInformation = (props) => {
  const { userState } = props
  const { location, twitter_username, blog, company } = userState
  return (
    <>
    <Grid
    container
    spacing={2}
    sx={{marginTop: '15px'}}
    >
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <LocationOn/>
          {location !== null? <Typography>{location}</Typography> : <Typography>Not Available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Twitter/>
          {twitter_username !== null? <Typography>@{twitter_username}</Typography> : <Typography>Not Available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Language/>
          {blog !== null? <a target='_blank' href={blog}><Typography>{blog}</Typography></a> : <Typography>Not Available</Typography>}
        </Stack>
      </Grid>
      <Grid item xs={6}>
        <Stack direction='row' spacing={2}>
          <Business/>
          {company !== null? <Typography>{company}</Typography> : <Typography>Not Available</Typography>}
        </Stack>
      </Grid>
    </Grid>
    </>
  )
}

export default LocationInformation