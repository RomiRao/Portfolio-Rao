import { Box } from "@mui/material";
//card components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Projects() {
    const projects = [
        {
            title: "ToDo App",
            img: "https://github.com/RomiRao/AdaTasks/blob/main/src/assets/images/example-1.png?raw=true",
            description:
                "Just a simple ToDo app, done with react and Materiaul UI.",
            repository: "https://github.com/RomiRao/AdaTasks",
            deploy: "https://ada-tasks.vercel.app",
        },
        {
            title: "Royal Caribbean Jobs",
            img: "https://github.com/RomiRao/jobs/raw/main/styles/assets/web-example.png",
            description:
                "For this project I learned how to use an API with MockAPI",
            repository: "https://github.com/RomiRao/jobs",
            deploy: "https://romirao.github.io/jobs/",
        },
        {
            title: "AhorrADAs",
            img: "https://camo.githubusercontent.com/dd841d70836798918545a47cdf870240aed9f9a8466f30c7422a46bc110f9c19/68747470733a2f2f692e696d6775722e636f6d2f59774546614f6b2e706e67",
            description:
                "This ona was my first project working with another person, we made a virtual wallet were you can register your money movements. First time using LocalStorage",
            repository: "https://github.com/RomiRao/ahorrADAs-marce-romi",
            deploy: "https://romirao.github.io/ahorrADAs-marce-romi",
        },
        {
            title: "Meme Generator",
            img: "https://github.com/RomiRao/meme-generator/raw/main/style/image-examples/website.png",
            description: "A fun project using JavaScript for the first time!",
            repository: "https://github.com/RomiRao/meme-generator",
            deploy: "https://romirao.github.io/meme-generator/",
        },
        {
            title: "My first Portfolio",
            img: "https://camo.githubusercontent.com/e2ac60df5b8cc9e6812241600c1f256e9053a3e020531c8f7ef5e2df37ad7ac0/68747470733a2f2f726f6d6972616f2e6769746875622e696f2f506f7274666f6c696f2d526f6d696e612f7265736f75726365732f726f6d6972616f2e6769746875622e696f5f506f7274666f6c696f2d526f6d696e615f2e706e67",
            description:
                "This is my very first project. I made a portfolio only using HTML and CSS. Of course, I made the illustrations as well ;)",
            repository: "https://github.com/RomiRao/Portfolio-Romina",
            deploy: "https://romirao.github.io/Portfolio-Romina/",
        },
    ];

    return (
        <Box display="flex" justifyContent="center" flexWrap="wrap" py={5}>
            {projects.map((project) => (
                <Card
                    key={project.title}
                    sx={{
                        maxWidth: 300,
                        m: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <CardMedia
                        sx={{ height: 150 }}
                        image={project.img}
                        title={project.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {project.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            href={project.repository}
                            target="_blank"
                        >
                            Repository
                        </Button>
                        <Button
                            size="small"
                            href={project.deploy}
                            target="_blank"
                        >
                            Deploy
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
}
