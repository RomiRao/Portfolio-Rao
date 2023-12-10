import { AppBar, Breadcrumbs, IconButton, Link, Toolbar, Drawer, Icon } from "@mui/material";
import { useState } from "react";
//icons
import MenuIcon from '@mui/icons-material/Menu';
import NavListDrawer from './NavListDrawer'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Navbar({setView}) {

  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      title:'Projects', path:'#projects'
    },
    {
      title:'Home', path:'#'
    },
    {
      title:'Contact', path:'#contact'
    }
  ]

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none'}} position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <IconButton>
          <DarkModeIcon color='primary'/>
        </IconButton>
        <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{display: {xs: 'none', sm: 'flex'}}}>
          {navLinks.filter(item => item.title != 'Home').map((item) => (
            <Link underline="hover" key={item.title} color="inherit" href={item.path} onClick={(e) => handleClick(e)}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>
        <IconButton>
          <HomeIcon color='primary' sx={{display: {xs: 'none', sm: 'flex'}}}/>
        </IconButton>
        <IconButton onClick={() => setOpen(true)} sx={{display: {xs: 'flex', sm: 'none'}}}>
          <MenuIcon color="primary" />
        </IconButton>
      </Toolbar>
    </AppBar>
      <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      sx={{display: {xs: 'flex', sm: 'none'}}}
      >
          <NavListDrawer setOpen={setOpen} setView={setView} />
      </Drawer>
  </>
  )
}
