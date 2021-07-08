import React, { Component } from 'react';
import { IMAGE_URL } from '../API/security';
import "./Movie.css"
class Movie extends Component {
    state = {}
    render() {
        let singlemovie = this.props.movie;
        let imgsrc = IMAGE_URL + singlemovie.poster_path;
        return (
            <React.Fragment>
                <div className="movie">
                    <div className="Poster-img">
                        <img src={imgsrc}></img>
                    </div>
                    <div className=" mov title">{singlemovie.title}</div>
                    <div className="mov movie-rating">{singlemovie.vote_average} IMDB</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Movie;
