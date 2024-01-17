import React from 'react'
import { Grid, Stack } from '@mui/material'; // For Material UI


export const Hero_Section_Component = () => {
  return (
  <Grid container >
    <Grid item xs={12}>
    <Stack>
    <img className='w-auto h-12' src="https://f.nooncdn.com/mpcms/EN0001/assets/c21a10fa-ccad-4551-84c7-55d21fdbc345.png?format=avif" alt=""/>
    </Stack>
    </Grid>
    <Grid item xs={6}>
    <Stack>
    <img className='w-auto h-12' src="https://f.nooncdn.com/mpcms/EN0001/assets/c21a10fa-ccad-4551-84c7-55d21fdbc345.png?format=avif" alt=""/>
    </Stack>
    </Grid>
  </Grid>
  )
}
