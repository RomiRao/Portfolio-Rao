import { Box, Breadcrumbs, Link } from "@mui/material";

export default function Navbar() {

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', bgcolor: 'red'}}>
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
    </Box>
  )
}