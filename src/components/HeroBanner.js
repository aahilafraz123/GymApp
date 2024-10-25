import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '212px', xs: '70px'},
        ml: { sm: '50px'},
        display: 'flex',
        justifyContent: 'space-between', // Ensures space between text and image
        alignItems: 'center', // Centers items vertically
        height: '500px' // Adjust the height as needed
    }} position='relative' p="20px">
      <Box sx={{ maxWidth: '600px' }}>  
        <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
          Fitness Club  
        </Typography>
        <Typography fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px'}}}>
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight="35px" mb={3}>
         Check out the most effective exercises
        </Typography>
        <Button variant="contained"
        color="error" href="#exercises"  sx={{ backgroundColor: '#ff2625', padding: '10px'}} >Explore Exercises </Button>
        <Typography
        fontWeight={600}
        color='#ff2625'
        fontSize="200px"
        sx={{
          opacity: 0.1
        }}
        > 
        Exercises </Typography> 
      </Box>
      <img src={HeroBannerImage} alt="banner" className='hero-banner-img' style={{ width: '600px', height: 'auto', marginTop: '-290px' }} />
    </Box>
  )
}

export default HeroBanner;
