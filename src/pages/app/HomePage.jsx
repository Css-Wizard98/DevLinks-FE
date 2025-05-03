import React from 'react';
import Navbar from '../components/navBar';
import Sidebar from '../components/Sidebar';
import FloatActionButton from '../components/floatActionButton';
import Box from '@mui/material/Box';

const HomePage = ({}) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Navbar />
      <Sidebar widthPercentage={30} />
      <Box sx={{ width: '70%', p: 2, position: 'relative' }}>{/* Main Content */}
        Main content here

        <FloatActionButton sx={{zIndex:200}}/>
      </Box>
    </Box>
  );
};
export default HomePage;