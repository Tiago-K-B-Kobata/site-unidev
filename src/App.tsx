import { Box } from '@mui/system';
import React from 'react';
import Cards from './Cards.tsx';
import Carrosel from './Carrosel.tsx';
import Footer from './Footer.tsx';
import TopBar from './TopBar.tsx';



function App() {

  return (
    <Box >

      <TopBar />
      <Carrosel />
      <Cards />
      <Footer />


    </Box>
  );
}

export default App;
