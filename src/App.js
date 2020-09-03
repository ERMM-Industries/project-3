import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from "./pages/Account";
import Friends from "./pages/Friends";
import InputRecipe from "./pages/InputRecipe";
import LoginButton from "./pages/Login";
import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginButton} />
      <Route exact path="/login" component={LoginButton} />
      <div>
        {/* <Navbar /> */}
        <Wrapper>
          <Route exact path="/account/id:/" component={Account} />
          <Route exact path="/account/id:/search" component={Search} />
          <Route exact path="/account/id:/friends" component={Friends} />
          <Route exact path="/account/id:/inputrecipe" component={InputRecipe} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
