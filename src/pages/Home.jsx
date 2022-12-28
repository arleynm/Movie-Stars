import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home =() =>{
    const [TopMovies, setTopMovies] = useState([]);

    const getTopRateMovies = async (url) => {
        const res =await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    useEffect(() =>{
        const topRateUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRateMovies(topRateUrl);
    }, []);


    return (
        <div className="conatiner">
            <h2>Melhores Filmes</h2>
            <div className="movies-conatiner">
            {TopMovies.length === 0 && <p>Carregando...</p>}
            {TopMovies.length > 0 && TopMovies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Home;