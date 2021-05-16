import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PostList from './components/PostList';
import ReadPostList from './components/ReadPostList';
import UpdatePostList from './components/UpdatePostList';
import DeletePostList from './components/DeletePostList';
import NewPostList from './components/NewPostList';

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Footer from './components/Footer';

function App() {
  return (
    //routing to different urls
    <Router>
      <div className="container">
        <ReactNotification />
        <Switch>
          <Route path="/" exact component={PostList} />
          <Route path="/index-view" component={PostList} />
          <Route path="/read-view/:index" component={ReadPostList} />
          <Route path="/update-view/:index" component={UpdatePostList} />
          <Route path="/delete-view/:index" component={DeletePostList} />
          <Route path="/create-view/" component={NewPostList} />
        </Switch>
        {/* footer on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
