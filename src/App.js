import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './containers/Header';
import Footer from './containers/Footer';
import Index from './pages';
import './css/App.css';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Header/>
        <main className="app">
          <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
            <Route path="/project/:category/:name" component={Project}></Route>
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
      );
    }
}

export default App;