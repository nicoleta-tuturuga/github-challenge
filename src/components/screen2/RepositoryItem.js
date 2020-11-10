import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './RepositoryItem.css';

class repositoryItem extends Component {

  state = {
    isVisible: false
  }

  toggleVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {

    return (
      <div
        key={this.props.repo.id}
        onClick={this.toggleVisibility}>
        <li
          className="repository-card list-item-style">
          <span
            className={"close-user-details " +
              (this.state.isVisible ? 'user-details-visible' : 'user-details-hidden')}>
            x
          </span>
          <div className="d-flex justify-content-between">
            <span>{this.props.repo.name}</span>
            <span>{this.props.repo.stargazers_count ? this.props.repo.stargazers_count : ''}
              <FontAwesomeIcon
                icon="star"
                className="star-icon"
                color={this.props.repo.stargazers_count ? ' rgb(247, 250, 70)' : 'rgb(233, 233, 233)'}></FontAwesomeIcon>
            </span>
          </div>
          <div
            className={
              "user-details " +
              (this.state.isVisible ? 'user-details-visible' : 'user-details-hidden')}>
            <p>
              <FontAwesomeIcon
                icon="eye"
                className="eye-icon"></FontAwesomeIcon>
              {this.props.repo.watchers_count}
            </p>
            <p>
              {this.props.repo.language ? 'Programming language: ' + this.props.repo.language : ''}
            </p>
            <img
              className="user-avatar"
              src={this.props.repo.owner.avatar_url}
              alt="user-avatar" />
            <p><a href={this.props.repo.html_url} target="blank">See on Github</a></p>
          </div>
        </li>
      </div>
    )
  }
}

export default repositoryItem;