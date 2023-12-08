import { Container } from '@mui/material'
import Profile from  './Profile.jsx'
import Contact from  './Contact.jsx'

export default function Main() {
  return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}>
      <Contact/>
    </Container>
  )
}