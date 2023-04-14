import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.2rem', bgcolor: '#FFF0F5', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          By <a style={{textDecoration: 'none',color:'purple',fontStyle:'italic',fontFamily:'cursive'}} target="_blank" href="https://github.com/rsarsahay">Ritu Sarsahay</a>
        </Typography>
      </Box>
  )
}

export default Footer