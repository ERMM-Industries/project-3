import React, { Component } from "react";
import Jumbotron from "../../src/components/Jumbotron";
import DeleteBtn from "../../src/components/DeleteBtn";
import API from "../../src/utils/API";
import { Col, Row, Container } from "../../src/components/Grid";
import { List, ListItem } from "../../src/components/List";
import { Input, TextArea, FormBtn } from "../../src/components/Form";
//add link to navbar

class Recipes extends Component {
  // Setting our component's initial state
  state = {
    recipes: [],
    title: "",
    ingredients: "",
    recipe: ""
  };

  // When the component mounts, load all recipes and save them to this.state.recipes
  componentDidMount() {
    this.loadRecipes();
  }

  // Loads all recipes  and sets them to this.state.recipes
  loadRecipes = () => {
    API.getRecipes()
      .then(res =>
        this.setState({ recipes: res.data, title: "", ingredients: "", recipe: "" })
      )
      .catch(err => console.log(err));
  };

  // Deletes a recipe from the database with a given id, then reloads recipes from the db
  deleteRecipes = id => {
    API.deleteRecipes(id)
      .then(res => this.loadRecipes())
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saverecipe method to save the recipe data
  // Then reload recipes from the database
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.ingredients) {
      API.saveRecipes({
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
          <Col size="md-6">
            <Jumbotron>
              <h1>What recipe should I check?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.ingredients}
                onChange={this.handleInputChange}
                name="ingredients"
                placeholder="ingredients (required)"
              />
              <TextArea
                value={this.state.recipe}
                onChange={this.handleInputChange}
                name="recipe"
                placeholder="recipe (Optional)"
              />
              <FormBtn
                disabled={!(this.state.ingredients && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Recipe
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Recipes On My List</h1>
            </Jumbotron>
            {this.state.recipes.length ? (
              <List>
                {this.state.recipes.map(recipe => {
                  return (
                    <ListItem key={recipe._id}>
                      <a href={"/recipes/" + recipe._id}>
                        <strong>
                          {recipe.title} by {recipe.ingredients}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => this.deleteRecipes(recipe._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Recipes;
