import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

const App = () => {
  return (
    <div>
    <Link to="/users">Users</Link>
    <h1>Our App Component</h1>
    </div>
  );
};

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
};

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/users" component={Users} />
  </Router>),
  document.getElementById('container')
);
