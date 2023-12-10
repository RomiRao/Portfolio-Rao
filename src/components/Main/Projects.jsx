import { Box } from "@mui/material";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  const projects = [
    {
      title: 'ToDo App',
      img: 'https://github.com/RomiRao/AdaTasks/blob/main/src/assets/images/example-1.png?raw=true',
      description: 'Just a simple ToDo app, done with react and Materiaul UI.',
      repository: 'https://github.com/RomiRao/AdaTasks',
      deploy: 'https://ada-tasks.vercel.app'
    },
    {
      title: 'Royal Caribbean Jobs',
      img: 'https://github.com/RomiRao/jobs/raw/main/styles/assets/web-example.png',
      description: 'For this project I learned how to use an API with MockAPI',
      repository: 'https://github.com/RomiRao/jobs',
      deploy: 'https://romirao.github.io/jobs/'
    },
    {
      title: 'AhorrADAs',
      img: 'https://camo.githubusercontent.com/dd841d70836798918545a47cdf870240aed9f9a8466f30c7422a46bc110f9c19/68747470733a2f2f692e696d6775722e636f6d2f59774546614f6b2e706e67',
      description: 'This ona was my first project working with another person, we made a virtual wallet were you can register your money movements. First time using LocalStorage',
      repository: 'https://github.com/RomiRao/ahorrADAs-marce-romi',
      deploy: 'https://romirao.github.io/ahorrADAs-marce-romi'
    },
    {
      title: 'Meme Generator',
      img: 'https://github.com/RomiRao/meme-generator/raw/main/style/image-examples/website.png',
      description: 'A fun project using JavaScript for the first time!',
      repository: 'https://github.com/RomiRao/meme-generator',
      deploy: 'https://romirao.github.io/meme-generator/'
    }
  ]

  return (
    <Box>
      {projects.map((project) => <ProjectCard key={project.title} title={project.title} img={project.img} description={project.description} repository={project.repository} deploy={project.deploy} />)}
    </Box>
  )
}