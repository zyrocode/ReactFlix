import React, { Component } from 'react';
import { Fade, Container, Row, Input, Spinner, Col } from 'reactstrap'
import NavComponent from './NavComponent';
import SingleMovie from './SingleMovie';

class MainComponent extends Component {
    state = {
        search: "Star Wars",
        movies: [],
        loading: true
    }


    render() {
        return (
            <>
                {this.state.loading &&
                    <Fade in={this.state.loading}>
                        <Container className="my-5 d-block text-center">
                            <Row>
                                <Col>
                                    <img className="loading-img" src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c529.png" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Spinner style={{ width: '3rem', height: '3rem', color: 'red' }} />
                                </Col>
                            </Row>
                        </Container>
                    </Fade>
                }
                {!this.state.loading &&
                    <Container className="m-0">
                        <Fade in={!this.state.loading}>

                            <NavComponent />
                            <Input type="text" value={this.state.search} onChange={(val) => this.setState({ search: val.target.value })} placeholder="Type a movie" />
                            <h1>TV Shows</h1>
                            <Row>
                                {this.state.movies
                                    .map((movie, index) =>
                                        movie.Poster !== "N/A" &&
                                        (<SingleMovie singleMovie={movie} />)
                                    )}
                            </Row>
                        </Fade>
                    </Container>
                }
            </>
        );
    }

    componentDidMount = async () => {
        let response = await fetch("http://www.omdbapi.com/?apikey=fd3da7b9&s=" + this.state.search)
        let movies = await response.json()
        this.setState({
            movies: movies.Search
        })
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)
    }
}

export default MainComponent;