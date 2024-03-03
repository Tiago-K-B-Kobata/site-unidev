import { Box } from '@mui/system';
import React from 'react';
import Cards from './Cards.tsx';
import Carrosel from './Carrosel.tsx';
import Footer from './Footer.tsx';
import TopBar from './TopBar.tsx';



function App() {

  const forms = "https://forms.gle/PsSsjvgQ6c6GNxcNA";

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);

    if (element) {

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box >

      <TopBar onScrollToComponent={scrollToComponent} forms={forms} />
      <Carrosel />
      <Cards forms={forms} />
      <Footer />


    </Box>
  );
}

export default App;
