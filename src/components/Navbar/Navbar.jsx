import { AppBar, Breadcrumbs, IconButton, Link, Toolbar, Drawer, Icon } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
//icons
import MenuIcon from '@mui/icons-material/Menu';
import NavListDrawer from './NavListDrawer'
import HomeIcon from '@mui/icons-material/Home';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Navbar({setView, mode, setMode, navLinks}) {

  const handleClick = () => {
    mode ? setMode(false) : setMode(true)
  }

  const [open, setOpen] = useState(false);

  return (
    <>
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none'}} position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <IconButton onClick={() => handleClick()}>
          {!mode && <DarkModeIcon color='primary'/>}
          {mode && <LightModeIcon color='primary'/>}
        </IconButton>
        <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{display: {xs: 'none', sm: 'flex'}}}>
          {navLinks.filter(item => item.title != 'Home').map((item) => (
            <Link underline="hover" key={item.title} color="inherit" component={NavLink} to={item.path}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>
        <IconButton  component={NavLink} to='/'>
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
          <NavListDrawer setOpen={setOpen} navLinks={navLinks}/>
      </Drawer>
  </>
  )
}
