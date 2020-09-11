import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    recipe: {}
  };
  // When this component mounts, grab the recipe with the _id of this.props.match.params.id
  // e.g. localhost:3000/recipes/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getRecipe(this.props.match.params.id)
      .then(res => this.setState({ recipe: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.recipe.title}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Ingredients</h1>
              <p>
                {this.state.recipe.ingredients}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Recipe</h1>
              <p>
                {this.state.recipe.recipe}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Image</h1>
              <p>
                {this.state.recipe.image}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Ingredients</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
