import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchUser from './components/screen1/SearchUser';
import DisplayRepoList from './components/screen2/DisplayRepoList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Switch>
          <Route exact path='/' component={SearchUser} />
          <Route path='/displayRepo/:username' component={DisplayRepoList} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
