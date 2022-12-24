import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

import "./styles.css";

export default function Navbar() {
  const { location } = useHistory();
  const shawLogo = 'https://app.shawandpartners.com/logo-sap.d8f2f511.png'
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={shawLogo} alt="Shaw and Partners Logo" />
      </NavLink>

      {location.pathname === '/card' && (
        <div className="buttons">
          <NavLink to={{ pathname: "/repos" }}>
            <Button inverted color="yellow">
              Repositories
            </Button>
          </NavLink>
        </div>
      )}
    </div>
  );
}
