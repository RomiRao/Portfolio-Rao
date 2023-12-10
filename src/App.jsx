import { Box } from "@mui/material";
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import { useState } from "react";


export default function App() {

  const [view, setView] = useState('Profile')

  return (
    <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <Navbar setView={setView} />
      <Main view={view} />
      <Footer />
    </Box>
  )
}

