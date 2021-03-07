import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostList from './components/PostList';
import ReadPostList from './components/ReadPostList';
import UpdatePostList from './components/UpdatePostList';
import DeletePostList from './components/DeletePostList';
import NewPostList from './components/NewPostList';
import Try from './components/Try'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <Router>
      <div className="container">
        <ReactNotification />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/elements" component={PostList} />
          <Route path="/read-element/:index" component={ReadPostList} />
          <Route path="/update-element/:index" component={UpdatePostList} />
          <Route path="/delete-element/:index" component={DeletePostList} />
          <Route path="/new-element/" component={NewPostList} />
          <Route path="/try/" component={Try} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
