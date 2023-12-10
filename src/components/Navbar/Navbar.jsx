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
      title:'Projects', path:'#projects', ref: 'Projects'
    },
    {
      title:'Home', path:'#home', ref: 'Profile'
    },
    {
      title:'Contact', path:'#contact', ref: 'Contact'
    }
  ]

  return (
    <>
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none'}} position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <IconButton>
          <DarkModeIcon color='primary'/>
        </IconButton>
        <Breadcrumbs separator="/" aria-label="breadcrumb" sx={{display: {xs: 'none', sm: 'flex'}}}>
          {navLinks.filter(item => item.title != 'Home').map((item) => (
            <Link underline="hover" key={item.title} color="inherit" href={item.path} onClick={() =>  setView(item.ref)}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>
        <IconButton  onClick={() =>  setView('Profile')}>
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
