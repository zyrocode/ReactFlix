import React, { Component } from 'react';
import { Col, CardImg, CardText } from 'reactstrap'

class SingleMovie extends Component {
    state = {}
    render() {
        return (
            <Col xl="2" lg="2" md="4" sm="6">
                <CardImg src={this.props.singleMovie.Poster} alt={this.props.singleMovie.Title} />
                <CardText>{this.props.singleMovie.Title}</CardText>
            </Col>
        );
    }
}

export default SingleMovie;