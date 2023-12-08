import { Box } from "@mui/material";
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main/Main.jsx'


export default function App() {
  return (
    <Box sx={{height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'green'}}>
      <Navbar />
      <Main />
      <Footer />
    </Box>
  )
}

