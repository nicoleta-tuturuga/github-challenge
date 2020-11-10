import React, { Component } from 'react';

import '../sharedCss/shared.css';
import './DisplayRepoList.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class displayRepoList extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    error: null,
    isLoaded: false,
    repositories: []
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}/repos`)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            repositories: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {

    let repository = this.state.repositories
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10)
      .map(repo => {
        return (
          <li
            key={repo.id}
            className="repository-card list-item-style d-flex justify-content-between">
            <span>{repo.name}</span>
            <div>
              <span>{repo.stargazers_count}</span>
              <FontAwesomeIcon icon="star" color={"yellow"}></FontAwesomeIcon>
            </div>
          </li>
        )
      })

    console.log("repo sorted: ", repository)

    let pageContent;

    if (this.state.error) {
      pageContent = <h1>The page doesn't exist.</h1>
    } else if (!this.state.isLoaded) {
      pageContent = <h1>Page is loading...Please wait</h1>
    } else {
      pageContent =
        <ul>
          {repository}
        </ul>
    }

    return (
      <div className="screen-container repository-list-screen">
        <p>{this.props.match.params.username}'s repository</p>
        <div>{pageContent}</div>
      </div>
    )
  }

}

export default displayRepoList;