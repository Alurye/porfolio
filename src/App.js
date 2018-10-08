import React, { Component } from 'react';
import Header from './components/header';
import About from './components/about';
import Project from './components/project';
import {Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Header/>
            <Switch>
               <Route exact path="/home" />
                <Route exact path="/about" render={(props)=> <About {...props} />} />
                <Route exact path="/projects" render={(props)=> <Project {...props} />} />
            </Switch>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
