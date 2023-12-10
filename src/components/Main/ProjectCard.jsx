import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({title, img, description, repository, deploy}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" href={repository} target="_blank">Repository</Button>
            <Button size="small" href={deploy} target="_blank">Deploy</Button>
        </CardActions>
  </Card>
  )
}