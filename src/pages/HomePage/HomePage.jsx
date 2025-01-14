import React from "react"; 
import "./Homepage.css"; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";

function HomePage() {
  const movies=[
    {
      title: "Inside Out",
      poster: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_FMjpg_UX1000_.jp",
      genre: 'Animated',
      year: '2015',
      rating:8
    },
    {
      title: "Speed",
      poster: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BYjc0MjYyN2EtZGRhMy00NzJiLWI2Y2QtYzhiYTU3NzAxNzg4XkEyXkFqcGdeQXVyMTQxNzMzNDI%40._V1_.jpg&f=1&nofb=1&ipt=d489b1ea5047009246d3677b84bdcfc422fc786318ea2fa7ae872abb799f42bc&ipo=images",
      genre: 'Action',
      year: '1995',
      rating:9
    },
    {
      title: "Dredd",
      poster: "https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_.jpg",
      genre: 'Action',
      year: '2012',
      rating:8
    },
    {
      title: "I saw the Devil",
      poster: "https://upload.wikimedia.org/wikipedia/en/9/91/I_Saw_the_Devil_film_poster.jpg",
      genre: 'Horror',
      year: '2010',
      rating:9
    },
    {
      title: "Good Will Hunting",
      poster: "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      genre: 'Drama Comedy',
      year: '2010',
      rating:10
    }
  ];



  return (
    <main className="home-page">
      <section className="banner">  
        <div className="trailer">
          <img src="https://pm1.narvii.com/6252/ee8743cf74bfc0c3d9b69322922730a73bfb0e26_hq.jpg" className="trailer-preview" alt="" />
       
          <div className="trailer-preview-info">
            <img src="https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_FMjpg_UX1000_.jpg" alt="" className="movie-poster" />
          <h1 className="movie-name">Inside out</h1>
          </div> 

        </div> 
      </section>
      
      <section className="top-featured">
         <div className="top-featured-container">
            <h1>TOP FEATURED</h1>
            <div className="top-featured-posters">
              {
                movies.map(movie=>(
                  <Card  sx={{ width:180 }} >
                    <CardMedia
                      sx={{ height:300 }} 
                      image={movie.poster} 
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {movie.title}
                      </Typography>
                      <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
                       <p>Genre: {movie.genre}</p> 
                       <p>Year: {movie.year}</p> 
                       
                       <p>Rating: {movie.rating}/10</p> 
                      </Typography>
                      
                    </CardContent>
                    <CardActions> 
                      <Button size="small">More...</Button>
                    </CardActions>
                  </Card>
                ))
              }
              
 
            </div>
         </div>
         
         
      </section>  
    </main>
  );
} 
export default HomePage;
