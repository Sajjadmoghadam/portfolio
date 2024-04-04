import React from 'react'
import Stack, { Box, Typography } from '@mui/material'
import SouthIcon from '@mui/icons-material/South';
export default function Services() {
  return (
    <>
    <Stack>
        <Stack>
            <Box sx={{
                width:'600px',
                height:'482px'
            }}>
                <Typography  variant='h3'>
                    full Stack
                </Typography>
                <Typography  variant='h2'>
                    Mern
                </Typography>
                <Typography variant='body1'>
                Premium web design, development, and SEO services to help your business stand out.
                </Typography>
            </Box>
            <Box sx={{display:'flex',direction:'row',height:'46px',width:'158px' }}>
                <SouthIcon/>
                <Typography>My Services</Typography>
            </Box>
            <Box>
                
            </Box>
        </Stack>
    </Stack>
    </>
  )
}
