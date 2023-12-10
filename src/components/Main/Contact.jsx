import { Box, Stack, Typography, Divider, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import image from "../../assets/profile-photo.jpg"
import styled from '@emotion/styled'


export default function Contact() {

  const Img = styled('img')({
    width: '80%',
    maxWidth: 330,
    maxHeight: 330,
    borderRadius: '50%'
  })

  return (
    <>
    <Img src={image}/>
    <Box sx={{p: 4, boxShadow: 5, borderRadius: 1, width: '90%', maxWidth: '500px', mt: {xs: 6, sm: 0}}}>
      <Box>
        <Typography variant="h6" textAlign='center' mb={2}>
          About me
        </Typography>
        <Typography variant="body2" gutterBottom>
          I'm an artist that spent some contracts working and travelling for a cruise ship company so I got to know to many people and places! But now is time to keep working on my life and career. As I have always been passionate about solving logic problems, I decided to study in Front-End Development at ADA ITW in Argentina.
        </Typography>
        <Typography variant="body2" gutterBottom>
          I have experience in HTML, CSS, JavaScript, GIT, React, and CSS frameworks for JS vanilla and for React (like Material UI, the one I'm using on this portfolio). Besides that, on my previous job I got valuable soft skills that contribute to my overall performance with people and projects.
        </Typography>
        <Typography variant="body2" gutterBottom>
          Also I'm fluent in Spanish and English, with basic Italian.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" textAlign='center' mt={3}>
          Contact me!
        </Typography>
        <Stack
        direction={{ xs: 'column', sm: 'row' }}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        p={3}
        justifyContent='center'
        alignItems='center'
        >
          <Box display='flex'>
            <IconButton component='a' href="https://www.linkedin.com/in/romina-rao-50a61a1ba/" target="_blank">
              <LinkedInIcon color="primary" />
            </IconButton>
            <IconButton component='a' href="https://github.com/RomiRao" target="_blank">
              <GitHubIcon color="primary" />
            </IconButton>
          </Box>
          <Box display='flex'>
            <IconButton component='a' href="https://www.instagram.com/renga.art/" target="_blank">
              <InstagramIcon color="primary" />
            </IconButton>
            <IconButton component='a' href="mailto:rominarao96@gmail.com" target="_blank">
              <EmailIcon color="primary" />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Box>
    </>
  )
}