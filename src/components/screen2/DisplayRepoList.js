import React from 'react';

const displayRepoList = (props) => {

  return (
    <div>
      <h1>Screen 2</h1>
      <p>{props.match.params.username}'s repository</p>
      <ul>
        <li>the list elements goes here</li>
      </ul>
    </div>
  )
}

export default displayRepoList;