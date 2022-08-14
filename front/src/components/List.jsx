import React, {useEffect, useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import MovieService from "../API/MovieService";

const List = (props) => {
    const [moviesCount, setMovieCount] = useState()
    const navigate = useNavigate();
    const toList = () => {
        navigate(`/list/${props.list._id}`)
    }

     

    async function getMovieCount(id){
        const _moviesCount = await MovieService.getAll(id)
        setMovieCount(_moviesCount.length)
    }

    useEffect(() => {
        getMovieCount(props.list._id)
    }, [])

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50, backgroundColor: 'lightblue', padding: 10, marginBottom: 10, borderRadius: 5}}>
            <h3 style={{width: '80%'}}>
            {props.list.name} - {moviesCount}
            </h3>
            <div>
            <button onClick={() => toList()} style={{marginRight: 10}}>Go to list</button>
            <button onClick={props.onClick}>Delete</button>
            </div>
            
        </div>
        
    )
}

export default List;