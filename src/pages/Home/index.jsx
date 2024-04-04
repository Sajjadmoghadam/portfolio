import React from 'react'
import  { Box, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
        <Box>
            <Box>
                <img src='assets/homepagePhoto.png'/>
                <Typography>
                    Welcome to the home page of our website
                </Typography>
            </Box>
            <Box sx={{display: "flex", flexDirection:"column"}}>

            </Box>
        </Box>
    </>
  )
}
