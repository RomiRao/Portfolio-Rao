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
    <>
      <Img src={image}/>
      <Box>
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
    </>
  )
}