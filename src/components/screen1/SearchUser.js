import React, { Component } from 'react';

import '../sharedCss/shared.css';
import './SearchUser.css';

import { Link } from 'react-router-dom';

class searchUser extends Component {

  state = {
    userValue: ''
  }

  handleSubmitUserName = (event) => {
    this.setState({ userValue: event.target.value });
  }

  render() {

    let userInputValue = this.state.userValue;

    return (
      <div className="screen-container search-repository-screen">
        <div className="search-title d-flex flex-column">
          <span>enter a valid</span>
          <span className="search-title-span">Github username</span>
        </div>
        <div className="search-user-container d-flex flex-column align-items-center">
          <input
            className="search-user-input list-item-style"
            type="text"
            value={this.state.userValue}
            onChange={this.handleSubmitUserName}
            placeholder="Search repository..."
          />
          <Link to={`/displayRepo/${userInputValue}`}>
            <button
              className={
                "search-user-btn " +
                (userInputValue ? 'enabled-search-user-btn' : 'disabled-search-user-btn')
              }
              disabled={!userInputValue}
            >
              Find most successful repository
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default searchUser;