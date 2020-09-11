import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Nav, } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button";
import LoginButton from "../login-button";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// export function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <Link className="navbar-brand" to="/">
//         Pupster
//       </Link>
//       <div>
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link
//               to="/"
//               className={
//                 window.location.pathname === "/" || window.location.pathname === "/about"
//                   ? "nav-link active"
//                   : "nav-link"
//               }
//             >
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/discover"
//               className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//             >
//               Discover
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/search"
//               className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//             >
//               Search
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export function AuthNav() {
  const AuthNav = () => {
    const { isAuthenticated } = useAuth0();
  
    return (
      <Nav className="justify-content-end">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </Nav>
    );
  };
}

export default AuthNav;

