import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

import React from "react";

const Search =() =>{
    const [searchParams] = useSearchParams();

    const[movies, setmovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchMovies = async (url) => {
        const res =await fetch(url);
        const data = await res.json();

        setmovies(data.results);
    };

    useEffect(() =>{
        const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

        getSearchMovies(searchWithQueryURL);    
    }, [query]);


    return(
        <div className="conatiner">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-conatiner">
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && movies.map((movie)=> <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default Search;