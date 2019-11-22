import React, { Component } from 'react';
import { Container, Row, Input } from 'reactstrap'
import NavComponent from './NavComponent';
import SingleMovie from './SingleMovie';

class MainComponent extends Component {
    state = {
        search: "Star Wars",
        movies: []
    }
    
    render() {
        return (
            <>
                <Container fluid>

                    <NavComponent />
                    <Input type="text" value={this.state.search} onChange={(val) => this.setState({search: val.target.value}) } placeholder="Type a movie" />
                        <h1>TV Shows</h1>
                    <Row>
                        {this.state.movies
                            .map((movie, index) =>
                                movie.Poster !== "N/A" &&
                                (<SingleMovie singleMovie={movie}/>)
                            )}
                    </Row>
                </Container>
            </>
        );
    }

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?apikey=fd3da7b9&s=" + this.state.search)
        let movies = await response.json()
        this.setState({
            movies: movies.Search
        })
    }
}

export default MainComponent;