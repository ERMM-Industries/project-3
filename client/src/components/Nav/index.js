import React from "react";


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Recipe List
      </a>
      <div className= "float-right">
        <a className="nav-item text-white p-2" href="/">
          Recipes
        </a>

        <a className="nav-item text-white p-2" href="/submit">
          Submit Recipe
        </a>
      </div>
    </nav>
  );
}

export default Nav;

