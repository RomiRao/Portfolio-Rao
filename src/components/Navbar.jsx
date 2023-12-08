import { AppBar, Breadcrumbs, Link, Toolbar } from "@mui/material";

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
      <Toolbar sx={{justifyContent: 'center'}}>
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          {navLinks.filter(item => item.title != 'Home').map((item) => (
            <Link underline="hover" key={item.title} color="inherit" href={item.path} onClick={(e) => handleClick(e)}>
              {item.title}
            </Link>
          ))}
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  )
}