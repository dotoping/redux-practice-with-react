import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux';

import Subscribers from './components/Subscribers';
import store from './redux/store';
import Display from './components/Display';
// import Views from './components/Views';
import Comments from './components/Comments';
import Users from './components/Users';

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/comments'>Comments</Link></li>
            <li><Link to='/subscriber'>Subscribers</Link></li>
            <li><Link to='/users'>UserList</Link></li>
          </ul>
        </nav>
      </div>
      <div><hr /></div>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Display} />
            <Route path='/comments' component={Comments} />
            <Route path='/subscriber' component={Subscribers} />
            <Route path='/users' component={Users} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
