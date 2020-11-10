import React, { Component } from 'react';

import '../sharedCss/shared.css';
import './RepositoryList.css';

import RepositoryItem from './RepositoryItem';


class RepositoryList extends Component {

  state = {
    error: false,
    isLoaded: false,
    repositories: []
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.username}/repos`)
      .then(response => {
        if (!response.ok) {
          throw new Error("error")
        } else {
          return response.json();
        }
      })
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
            error: true
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
          <RepositoryItem repo={repo} key={repo.id} />
        )
      })


    let pageContent;

    if (this.state.error) {
      pageContent = <h2 className="message">Something went wrong. This page doesn't exist.</h2>
    }
    else if (!this.state.isLoaded) {
      pageContent = <h2 className="message">Page is loading...Please wait</h2>
    } else if (this.state.isLoaded && this.state.repositories.length === 0) {
      pageContent = <h2 className="message">The user doesn't have any repositories yet or the user's repositories are private.</h2>
    }
    else {
      pageContent =
        <ul className="repository-card-list">
          {repository}
        </ul>
    }

    return (
      <div className="screen-container repository-list-screen ">
        <p>{this.props.match.params.username}'s repository</p>
        <div>{pageContent}</div>
      </div>
    )
  }
}

export default RepositoryList;