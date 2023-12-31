import { Toolbar, IconButton, Breadcrumbs, Box, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


export default function Footer() {
  return (
    <Box py={1}>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Breadcrumbs separator="" aria-label="breadcrumb" >
          <IconButton component='a' href="https://www.linkedin.com/in/romina-rao-50a61a1ba/" target="_blank">
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton component='a' href="https://www.instagram.com/renga.art/" target="_blank">
            <InstagramIcon color="primary" />
          </IconButton>
          <IconButton component='a' href="https://github.com/RomiRao" target="_blank">
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton component='a' href="mailto:rominarao96@gmail.com" target="_blank">
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