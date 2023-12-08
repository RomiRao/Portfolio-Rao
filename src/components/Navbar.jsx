import { AppBar, Breadcrumbs, Link, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {

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
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none'}} position="sticky">
      <Toolbar sx={{justifyContent: 'space-between'}}>

        <Breadcrumbs separator="/" aria-label="breadcrumb">
          {navLinks.filter(item => item.title != 'Home').map((item) => (
            <Link underline="hover" key={item.title} color="inherit" href={item.path} onClick={(e) => handleClick(e)}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>

        <MenuIcon color="black"/>
      </Toolbar>
    </AppBar>
  )
}