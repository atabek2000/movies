import React, { useEffect, useState } from 'react';
import MovieService from '../API/MovieService';
import Container from '@mui/material/Container'
import {useParams} from "react-router-dom"
import Movie from '../components/Movie';
import { Button, TextField } from '@mui/material';


const Movies = () => {

    const params = useParams();
    const [movies, setMovies] = useState([]) 
    const [listName, setListName] = useState([]) 
    const [newMovie, setNewMovie] = useState([])

    

    async function getMovies() {
        const movies = await MovieService.getAll(params.id);
        setMovies(movies)
    }

    async function getListName() {
        const _listName = await MovieService.getListName(params.id);
        setListName(_listName.name)
    }

    async function addNewMovie(){
        const newMovies = await MovieService.createMovie(params.id, newMovie);
        setMovies(newMovies)
        setNewMovie('')
    }

    async function deleteMovie(id) {
        const movies = await MovieService.deleteOne(id, params.id);
        setMovies(movies)
    }



    useEffect(() => {
        getMovies()
        getListName()
    }, [])
    

    return (
        <div className="App">
        <Container maxWidth="md">
        <h1>Page with movies from list {listName}</h1>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10, width: '50%'}}>
        <TextField
          id="name"
          label=""
          value={newMovie}
          onChange={e => setNewMovie(e.target.value)}
          
        />
        <Button variant="contained" onClick={addNewMovie}>
          Add new movie
        </Button>
        </div>
            {movies.map((elem, index) => 
                <Movie movie={elem} index={index+1} key={index} onClick={() => deleteMovie(elem._id)} />
            )}
        </Container>
    </div>
    );
};

export default Movies;