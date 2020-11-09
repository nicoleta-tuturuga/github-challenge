import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class searchUser extends Component {

  state = {
    userValue: ''
  }

  handleSubmitUserName = (event) => {
    this.setState({ userValue: event.target.value });

    console.log("value in state is ", this.state.userValue);
  }

  render() {

    let userInputValue = this.state.userValue;
    console.log("username is : ", userInputValue)

    return (
      <div>
        <h1>Screen 1</h1>
        <input type="text"
          value={this.state.userValue}
          onChange={this.handleSubmitUserName}
        />
        <Link to={`/displayRepo/${userInputValue}`}>
          <button>
            Find most successful repository
          </button>
        </Link>
      </div>
    )
  }
}

export default searchUser;