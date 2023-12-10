import { Container } from '@mui/material'
import Profile from  './Profile.jsx'
import Contact from  './Contact.jsx'
import Projects from "./Projects.jsx"

export default function Main() {
  return (
    <Container sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
      <Projects/>
    </Container>
  )
}