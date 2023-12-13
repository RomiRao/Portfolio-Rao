import { Container } from '@mui/material'
import Home from  './Home.jsx'
import Contact from  './Contact.jsx'
import Projects from "./Projects.jsx"
import { Route, Routes } from 'react-router-dom'

export default function Main() {
  
  return (
    <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Container>
  )
}