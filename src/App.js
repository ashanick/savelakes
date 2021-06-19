import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from './containers/Home';
import Header from './components/Header'
import Hero from './components/Hero';
import AboutUs from './containers/AboutUs'
import Post from './containers/Post';
import LakeProfile from './containers/LakeProfile';
import HealthThreats from './containers/HealthThreats';
import BrilliantWork from './containers/BrilliantWork';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  return (
    <Router>
    <div className="App">
          <Header />
          <Hero />
          <Route path="/" exact component={Home}></Route>
          <Route path="/AboutUs" component={AboutUs}></Route>
          <Route path="/LakeProfile" component={LakeProfile}></Route>
          <Route path="/HealthThreats" component={HealthThreats}/>
          <Route path="/BrilliantWork" component={BrilliantWork} />
          <Route path="/Post/:id"  component = {Post}/>
    </div>
    </Router>
  )
}

export default App;