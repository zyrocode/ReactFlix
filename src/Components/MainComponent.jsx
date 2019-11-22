import React, { Component } from 'react';
import { Container, Row, Input } from 'reactstrap'
import NavComponent from './NavComponent';
import MovieList from './MovieList';

class MainComponent extends Component {
    state = {
        search: "Star Wars"
    }
    
    render() {
        return (
            <>
                <Container fluid>

                    <NavComponent />
                    <Input type="text" value={this.state.search} onChange={(val) => this.setState({search: val.target.value})} placeholder="Type a movie" />
                        <h1>TV Shows</h1>
                    <Row>
                        <MovieList search={this.state.search}/>
                    </Row>
                </Container>
            </>
        );
    }
}

export default MainComponent;