const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/RecipeDB"
);

const recipeSeed = [
  {
    title: "French Toast",
    ingredients: "1/2 stick butter, pinch of salt, cinnamon, poewdered sugar, 2 slices of bread",
    recipe:
      "Start by doing some stuff...",
    date: new Date(Date.now())
  },
  {
    title: "Omellete",
    ingredients: "3 eggs, salt, shredded cheese, oil",
    recipe:
      "Do not fry the eggs...",
    date: new Date(Date.now())
  },
  {
    title: "Cereal",
    ingredients: "Cereal, Milk",
    recipe:
      "mix ceral in a bowl with milk...",
    date: new Date(Date.now())
  },
  {
    title: "Melted Butter",
    ingredients: "butter",
    recipe:
      "Put it in the microwave...",
    date: new Date(Date.now())
  },
  {
    title: "Glass o' Water",
    ingredients: "water, ice",
    recipe:
      "grab a cup and mix the ice and water in the cup...",
    date: new Date(Date.now())
  }
];

db.Recipe
  .remove({})
  .then(() => db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
