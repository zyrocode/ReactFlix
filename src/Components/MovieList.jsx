import React, { Component } from 'react';
import { Col, CardImg} from 'reactstrap'

class MovieList extends Component {
    state = {
        movies: []
    }
    render() {
        return (
            this.state.movies
                .map((movie, index) =>
                    movie.Poster !== "N/A" &&
                    (<Col lg="2" md="3" sm="3">
                            <CardImg src={movie.Poster} alt={movie.Title} key={index} />
                    </Col>)
                )
        );
    }

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?apikey=fd3da7b9&s=" + this.props.search)
        let movies = await response.json()
        this.setState({
            movies: movies.Search
        })
    }

}

export default MovieList;