import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import "./Movies.css"
class Movies extends Component {
    state = {  }
    render() { 
    let allmovies=this.props.movies;
        return (
            <div className="movies">
               {allmovies.map((singlemovie)=>{
                    return <Movie key={singlemovie.id} movie={singlemovie}></Movie>
                })}
            </div>
         );
    }
}
 
export default Movies;