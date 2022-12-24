import React, { useContext, useState } from "react";
import { Table } from "semantic-ui-react";
import { MainContext } from "../../context";
import "./styles.css";

export default function RepoTable() {
  const {
    state: { reposData },
  } = useContext(MainContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(10);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = reposData.slice(indexOfFirstRepo, indexOfLastRepo);
  let pageNumbers = [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  for (let i = 1; i <= Math.ceil(reposData.length / reposPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Table celled size="large" sortable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Programming Language</Table.HeaderCell>
          <Table.HeaderCell>Stars</Table.HeaderCell>
          <Table.HeaderCell>Forks</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      {currentRepos.map(({ name, language, stargazers_count, html_url, forks }) => (
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <a href={html_url}>{name}</a>
            </Table.Cell>
            <Table.Cell>{language}</Table.Cell>
            <Table.Cell>{stargazers_count}</Table.Cell>
            <Table.Cell>{forks}</Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <div className="pagination-numbers">
              {pageNumbers.map(number => (
                <button key={number} className="pagination-buttons" onClick={() => paginate(number)}>
                  {number}
                </button>
              ))}
            </div>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
