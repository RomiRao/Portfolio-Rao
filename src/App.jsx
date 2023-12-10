import { Box, Paper } from "@mui/material";
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Main from './components/Main/Main.jsx'
import { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

export default function App() {
  const [mode, setMode] = useState(false)

  const theme = createTheme({
    palette: {
      mode: mode ? 'dark' : 'light'
    },
  });


  const [view, setView] = useState('Profile')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper elevation={0}>
        <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <Navbar setView={setView} setMode={setMode} mode={mode} />
          <Main view={view} />
          <Footer />
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

