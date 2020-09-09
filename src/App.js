import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Friends from "./pages/Friends";
import InputRecipe from "./pages/InputRecipe";
import Login from "./pages/Login";
import SearchPage from "./pages/SearchPage";
import Wrapper from "./components/Wrapper";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/Dashboard/id:/" component={Dashboard} />
          <Route exact path="/Dashboard/id:/searchpage" component={SearchPage} />
          <Route exact path="/Dashboard/id:/friends" component={Friends} />
          <Route exact path="/Dashboard/id:/inputrecipe" component={InputRecipe} />
          <Route exact path="/Dashboard/id:/recipes" component={Recipes} />
          <Route exact path="/Dashboard/id:/singlerecipe/id:/" component={SingleRecipe} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
