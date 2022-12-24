import React, { useContext, useState } from "react";
import { Form } from "semantic-ui-react";
import { Navbar } from "../../components"
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context";
import "./styles.css";

export default function LandingPage() {
  const {
    state: { setSearchTerm },
  } = useContext(MainContext);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="container__search">
          <Form>
            <Form.Group>
              <Form.Input
                size="massive"
                placeholder="e.g., feliperucunha"
                name="github user"
                onChange={handleInput}
              />
              <NavLink to={{ pathname: "/card" }}>
                <Form.Button size="massive" color="yellow" content="Search" />
              </NavLink>
            </Form.Group>
          </Form>
      </div>
    </div>
  );
}
