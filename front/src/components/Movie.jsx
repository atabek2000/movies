import React from "react"

const Movie = (props) => {   

    return (
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 50, backgroundColor: 'lightblue', padding: 10, marginBottom: 10, borderRadius: 5}}>
            <h3 style={{width: '80%'}}>
            {props.index}.
            {props.movie.name}
            </h3>      
            <div>
            <button onClick={props.onClick}>Delete</button>
            </div>
        </div>
        
    )
}

export default Movie;