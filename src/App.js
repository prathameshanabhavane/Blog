import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from './home/Home';
import Contact from './contact/Contact';
import About from './about/About';
import Post from './posts/Post';
import NotFound from './errors/notFound';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/post" component={Post}></Route>
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
