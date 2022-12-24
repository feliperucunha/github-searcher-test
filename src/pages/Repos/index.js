import React, { useContext } from "react";
import { RepoTable, Navbar } from "../../components"
import { NavLink, Redirect } from "react-router-dom";
import { MainContext } from "../../context";
import { Icon } from "semantic-ui-react";

import "./styles.css";

export default function Repos() {
  const {
    state: { searchTerm },
  } = useContext(MainContext);

  if (!searchTerm) {
    return <Redirect to='/'  />
  }

  return (
    <div>
      <Navbar />

      <NavLink to="/card">
        <div className="arrow-container">
          <Icon name="arrow alternate circle left outline" size="big" />
        </div>
      </NavLink>

      <div className="table-container">
        <RepoTable />
      </div>
    </div>
  );
}
