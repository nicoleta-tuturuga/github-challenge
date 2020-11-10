import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchUser from './components/screen1/SearchUser';
import RepositoryList from './components/screen2/RepositoryList';
import DarkMode from './components/light-dark-mode/DarkMode';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faEye);

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <DarkMode />

        <Switch>
          <Route exact path='/' component={SearchUser} />
          <Route path='/displayRepo/:username' component={RepositoryList} />
        </Switch>

        <FontAwesomeIcon />

      </BrowserRouter>
    </div>
  );
}

export default App;
