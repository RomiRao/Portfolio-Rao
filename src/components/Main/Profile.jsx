import { Box, Container, Typography } from "@mui/material";
import styled from '@emotion/styled'
import image from '../../assets/profile-picture.png'

export default function Profile() {

  const Img = styled('img')({
    width: 330,
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  })

  return (
    <Container sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
      <Img src={image}/>
      <Box>
        <Typography variant="h4">
            Hi! I'm
        </Typography>
        <Typography variant="h3">
            Romina Rao
        </Typography>
        <Typography variant="h5">
            Developer, traveler and artist.
        </Typography>
      </Box>
    </Container>
  )
}