import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      variant="primary"
      className="ml-2"
    >
      Sign Up
    </Button>
  );
};

export default SignupButton;