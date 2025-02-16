
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 
import { useNavigate } from 'react-router-dom';

const CustomCard = ({movie}) => {
const navigate = useNavigate();

    return ( 
        <Card  sx={{ width:180 }} >
            <CardMedia
                sx={{ height:300 }} 
                image={movie.big_image} 
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
                <Button 
                size="small"
                onClick={() => navigate(`/movie-details/${movie.id}`)}
                >More...</Button>
            </CardActions>
        </Card>
     );
}
 
export default CustomCard;