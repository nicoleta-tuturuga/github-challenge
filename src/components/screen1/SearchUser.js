import React from 'react';

import { Link } from 'react-router-dom';

const searchUser = () => {

  return (
    <div>
      <h1>Screen 1</h1>
      <input type="text" />
      <Link to='/displayRepo'>
        <button>Find most successful repository</button>
      </Link>
    </div>
  )
}

export default searchUser;