
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 

const CustomCard = ({movie}) => {
    return ( 
        <Card  sx={{ width:180 }} >
            <CardMedia
                sx={{ height:300 }} 
                image={movie.poster} 
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {movie.title}
                </Typography>
                <Typography variant="body1"  sx={{ color: 'text.secondary' }}>
                Genre: {movie.genre}  
                </Typography>
                
                <Typography variant="body1"  sx={{ color: 'text.secondary' }}> 
                Year: {movie.year}   
                </Typography>

                <Typography variant="body1"  sx={{ color: 'text.secondary' }}> 
                Rating: {movie.rating}/10 
                </Typography>
            </CardContent>
            <CardActions> 
                <Button size="small">More...</Button>
            </CardActions>
        </Card>
     );
}
 
export default CustomCard;