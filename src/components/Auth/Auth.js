import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from '../LoginButton/login-button';
import { SignUpButton } from '../SignUpButton/signup-button';

const Auth = () => {
   const { loginWithRedirect } = useAuth0();

   return <button onClick={() => loginWithRedirect()}>Log In</button>;
 };

 export default Auth;