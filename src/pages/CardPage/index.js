import React, { useContext } from "react";
import { UserCard, Navbar } from "../../components"
import { NavLink, Redirect } from "react-router-dom";
import { MainContext } from "../../context";
import { Icon } from "semantic-ui-react";

import "./styles.css";

export default function CardPage() {
  const {
    state: { searchTerm },
  } = useContext(MainContext);

  if (!searchTerm) {
    return <Redirect to='/'  />
  }
  
  return (
    <div className="card-container">
      <Navbar />
      <NavLink to="/">
        <div className="arrow-container">
          <Icon name="arrow alternate circle left outline" size="big" />
        </div>
      </NavLink>

      <UserCard />
    </div>
  );
}
