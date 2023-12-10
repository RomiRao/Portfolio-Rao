import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider, Box } from '@mui/material';

import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';

export default function App() {

  
  const navLinks = [
    {
      title:'Projects', path:'/Projects', icon: <FolderSharedIcon/ >
    },
    {
      title:'Contact', path:'/Contact', icon: <CallIcon/ >
    },
    {
      title:'Home', path:'/', icon: <HomeIcon/ > 
    },
  ]


  const [mode, setMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    },
  });


  const [view, setView] = useState('Profile')

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Navbar setView={setView} setMode={setMode} mode={mode} navLinks={navLinks} />
          <Main view={view} navLinks={navLinks} />
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  )
}

