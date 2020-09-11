import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";

class SubmitForm extends Component { //might have broken something here check back on the original to see if everyhting was changed properly might have been a capitalization erroe e.g. Recipe instead of recipe
  state = {
    recipes: [],
    title: "",
    ingredients: "",
    recipe: ""
  };

  componentDidMount() {
    this.loadRecipes();
  }

  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, title: "", ingredients: "", recipe: "" })
      )
      .catch(err => console.log(err));
  };

  deleteRecipe = id => {
    API.deleteRecipe(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.ingredients) {
      API.saveRecipe({
        title: this.state.title,
        ingredients: this.state.ingredients,
        recipe: this.state.recipe
      })
        .then(res => this.loadRecipes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size= "md-3"></Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Which Recipes Should I Do?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <TextArea
                rows="3"
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                name="ingredients"
                placeholder="Ingredients (required)"
              />
              <TextArea
                value={this.state.recipe}
                onChange={this.handleInputChange}
                name="recipe"
                placeholder="Recipe (required)"
              />
              <FormBtn
                disabled={!(this.state.ingredients && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Recipe
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SubmitForm;