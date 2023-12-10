import { Box, Container, Typography } from "@mui/material";
import styled from '@emotion/styled'
import image from '../../assets/profile-picture.png'

export default function Profile() {

  const Img = styled('img')({
    width: 330,
    height: '90%',
    objectFit: 'cover',
    objectPosition: 'center',
  })

  return (
    <Container sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
      <Img src={image}/>
      <Box my={5}>
        <Typography variant="h4" color='secondary'>
            Hi! I'm
        </Typography>
        <Typography variant="h3" color='primary'>
            Romina Rao
        </Typography>
        <Typography variant="h5" color='inherit'>
            Developer, traveler and artist.
        </Typography>
      </Box>
    </Container>
  )
}