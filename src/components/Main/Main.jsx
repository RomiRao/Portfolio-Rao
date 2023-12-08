import { Container } from '@mui/material'
import Profile from  './Profile.jsx'

export default function Main() {
  return (
    <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Profile/>
    </Container>
  )
}