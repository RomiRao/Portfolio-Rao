import { AppBar, Box, Breadcrumbs, Link, Toolbar } from "@mui/material";

export default function Navbar() {

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <AppBar sx={{bgcolor: 'transparent', boxShadow: 'none'}} position="sticky">
      <Toolbar sx={{justifyContent: 'center'}}>
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          <Link underline="hover" key="1" color="inherit" href="/" onClick={(e) => handleClick(e)}>
            Projects
          </Link>
          <Link underline="hover" key="1" color="inherit" href="/" onClick={(e) => handleClick(e)}>
            Home
          </Link>
          <Link underline="hover" key="1" color="inherit" href="/" onClick={(e) => handleClick(e)}>
            Contact
          </Link>
        </Breadcrumbs>
      </Toolbar>
    </AppBar>
  )
}