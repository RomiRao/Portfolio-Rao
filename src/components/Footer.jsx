import { Toolbar, IconButton, Breadcrumbs, Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  return (
    <Box py={3}>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Breadcrumbs separator="" aria-label="breadcrumb" >
          <IconButton component='a'>
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton component='a'>
            <InstagramIcon color="primary" />
          </IconButton>
          <IconButton component='a'>
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton component='a'>
            <EmailIcon color="primary" />
          </IconButton>
        </Breadcrumbs>
      </Toolbar>
      <Typography variant="caption" sx={{display: 'flex', justifyContent: 'center'}}>
        The One Piece is real.
      </Typography>
    </Box>
  )
}

//sx={{display: {xs: 'none', sm: 'flex'}}}
//onClick={(e) => handleClick(e)}