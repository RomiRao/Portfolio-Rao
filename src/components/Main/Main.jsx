import { Container } from '@mui/material'
import Profile from  './Profile.jsx'
import Contact from  './Contact.jsx'
import Projects from "./Projects.jsx"

export default function Main({view}) {
  return (
    <Container sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap'}}>
      {view === 'Profile' && <Profile />}
      {view === 'Projects' && <Projects />}
      {view === 'Contact' && <Contact />}
    </Container>
  )
}