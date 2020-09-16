import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Recipes from "./pages/Recipes";
import RecipeList from "./pages/RecipeList";
import SubmitForm from "./pages/SubmitForm";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

//<Route exact path="/" component={RecipeList} />
//<Route exact path="/recipes" component={RecipeList} />
//<Route exact path="/recipes/:id" component={RecipeList} />
//<Route exact path="/submit" component={SubmitForm} />
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route exact path="/recipes" component={RecipeList} />
          <Route exact path="/recipes/:id" component={Detail} />
          <Route exact path="/submit" component={SubmitForm} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
