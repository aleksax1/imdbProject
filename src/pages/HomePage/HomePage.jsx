import React, { useEffect, useState } from "react"; 
import "./Homepage.css";  
import CustomCard from "../../components/CustomCard/CustomCard";
import { Pagination } from "@mui/material";
import axiosInstance from "../../ApiConfig/AxiosInstance";
function HomePage() {
 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async () =>{
    setLoading(true);
    try{
      const response = await axiosInstance.get("/");
      const fetchedMovies = response.data;

      fetchedMovies.filter()

      setMovies(fetchedMovies);
      console.log(response.data);
    }catch(err){
      setError(err.message + "Something went terribly wrong");
    }finally{
      setLoading(false);
    }
  };
  useEffect(()=>{   
    fetchMovies();
  },[]);
  
 
  if(loading) return <p>Loading...</p>;
  if(error) return <p>Error:{error}</p>;

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
            <h1>TOP FEATURED MOVIES</h1>
            <div className="top-featured-posters">
              {
                movies.map(movie=>(
                  <CustomCard movie={movie} key={movie.poster}/> 
                ))
              }
              
 
            </div>
            
         </div> 
      </section>  
      <section className="top-featured .tv-shows-container">
         <div className="top-featured-container">
            <h1>TOP FEATURED TV SHOWS</h1>
            <div className="top-featured-posters">
              {
                movies.map(movie=>(
                  <CustomCard movie={movie} key={movie.poster}/> 
                ))
              } 
            </div>
            
         </div> 
      </section>  

      <section className="top-featured all-movies">
         <div className="top-featured-container ">
            <h1>All MOVIES</h1>
              <div className="top-featured-posters">
              {
                movies.map(movie=>(
                  <CustomCard movie={movie} key={movie.poster}/> 
                ))
              } 
              </div>
            </div> 
            <Pagination count={10} color="primary" />
         
      </section>  
    </main>
  );
} 
export default HomePage;
