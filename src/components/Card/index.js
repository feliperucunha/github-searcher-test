/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useContext } from "react";
import { Form, Card, Image, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context";

import Error from "../../assets/gitHubError.png";
import "./styles.css";

export default function UserCard() {

  const {
    state: { searchTerm, apiError, githubData, setSearchTerm },
  } = useContext(MainContext);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = () => {
    setSearchTerm(searchInput);
  };

  const twitterLink = "http://twitter.com/" + githubData.twitter_username;

  return (
    <div className="search-and-card-container">
      <div className="search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input
              size="big"
              placeholder="type an username"
              name="github user"
              onChange={handleSearch}
            />
            <Form.Button size="big" color="yellow" content="Search" />
          </Form.Group>
        </Form>
      </div>

      {apiError ? (
        <div className="error">
          <span>{apiError}</span>
          <img src={Error} alt="Error information" />
        </div>
      ) : (
        <div className="card">
          <Card fluid>
            <Image src={githubData.avatar_url} wrapped ui={false} />

            <Card.Content>
              <Card.Header>{githubData.name}</Card.Header>
              <Card.Header className="username">
                <a href={githubData.html_url}>{githubData.login}</a>
              </Card.Header>

              <Card.Description>{githubData.userBio}</Card.Description>
            </Card.Content>

            <Card.Content extra>
              <NavLink to={{ pathname: "/repos", state: { searchTerm } }}>
                <a alt="Repositories link">
                  <Icon name="fork" />
                  {githubData.public_repos} Repositories
                </a>
              </NavLink>
            </Card.Content>
            <Card.Content extra>
              <a alt="Followers link">
                <Icon name="user" />
                {githubData.followers} Followers
              </a>
              <a
                className="following"
                alt="Following link"
              >
                <Icon name="user" />
                {githubData.following} Following
              </a>
            </Card.Content>
            {githubData.location && (
              <Card.Content extra>
                <a alt="Map link">
                  <Icon name="map" />
                  {githubData.location}
                </a>
              </Card.Content>
            )}
            {githubData.twitter && (
              <Card.Content extra>
                <a href={twitterLink} alt="Twitter Link">
                  <Icon name="twitter" />
                  {githubData.twitter_username}
                </a>
              </Card.Content>
            )}
            {githubData.blog && (
              <Card.Content extra>
                <a href={githubData.blog}>
                  <Icon name="world" />
                  Visit Blog
                </a>
              </Card.Content>
            )}
            {githubData.company && (
              <Card.Content extra>
                <a alt="Company Link">
                  <Icon name="building" />
                  {githubData.company}
                </a>
              </Card.Content>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
