import React,{useState, useEffect} from 'react'
import {Box, Stack, Typography } from '@mui/material';
import {SideBar, Videos} from './';
import { fetchFromAPI } from '../utills/fetchFromAPI';

const Feed = () => {
const [selectedCategory, setSelectedCategory] = useState('New')
  useEffect(() => {
     fetchFromAPI(`search?part=nippet&q=${selectedCategory}`)
  },[])
  return (
   <Stack sx={{ flexDirection: { sx: 
   "column", md: "row" } }}>
    <Box sx={{ height: {sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2 } }} >
      <SideBar/>
      <Typography className='copyright'
      variant='body2' sx={{mt: 1.5, color: '#fff'}}>
        copyright 2022 @Neghat
      </Typography>
    </Box>
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flllex: 2 }}>
       <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
        New <span style={{color: '#f31503'}}>videos</span>
       </Typography>
       <Videos videos={[]}/>
    </Box>
   </Stack>
  )
}

export default Feed
