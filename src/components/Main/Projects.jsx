import { useState, useEffect } from "react";
import { Box } from "@mui/material";
//card components
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//firestore config
import { collection, getDocs } from "firebase/firestore";
import db from "../../../firestore.config";
import SkeletonCard from "./SkeletonCard";

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const obtenerDatos = async () => {
            const projectsCollection = collection(db, "proyectos");
            try {
                const query = await getDocs(projectsCollection);
                const data = query.docs.map((doc) => doc.data());
                setProjects(data);
            } catch (error) {
                console.error("Error al obtener datos de Firestore:", error);
            }
        };

        obtenerDatos();
    }, []);

    return (
        <Box display="flex" justifyContent="center" flexWrap="wrap" py={5}>
            {projects.length === 0 ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    py={5}
                >
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </Box>
            ) : (
                projects.map((project) => (
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
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
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
                ))
            )}
        </Box>
    );
}
