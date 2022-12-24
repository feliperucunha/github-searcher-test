import React, { useState, createContext, useEffect } from "react";

export const MainContext = createContext({});

export const MainProvider = ({ children }) => {
  const [githubData, setGithubData] = useState({});
  const [reposData, setReposData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(searchTerm, 'aaa')
        setGithubData(data);
        if (data?.message) {
          setApiError(data.message);
        } else {
          setApiError('');
        }
      });
  }, [searchTerm]);
  
  useEffect(() => {
    fetch(`https://api.github.com/users/${searchTerm}/repos`)
      .then((res) => res.json())
      .then((data) => {
        setReposData(data);
    });
  }, [searchTerm]);

  return (
    <MainContext.Provider
      value={{
        state: { 
          githubData,
          setGithubData,
          searchTerm,
          setSearchTerm,
          reposData,
          setReposData,
          apiError,
          setApiError
        },
        actions: {},
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;