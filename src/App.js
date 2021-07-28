import React, {useState} from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

// import FloatBar from './components/FloatBar';
// import TopBar from './components/TopBar';
// import Home from './containers'
import Home from './containers/Home';
import Header from './components/Header'

import AboutUs from './containers/AboutUs'
import Post from './containers/Post';
import LakeProfile from './containers/LakeProfile';
import HealthThreats from './containers/HealthThreats';
import BrilliantWork from './containers/BrilliantWork';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';

function App(props) {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
    <div className="App">
      {/* <FloatBar isOpen={isOpen} toggle={toggle}/>
      <TopBar toggle={toggle} /> */}
      {/* <Hero /> */}
          <Header />
          <Hero />
          <Route path="/" exact component={Home}></Route>
          <Route path="/AboutUs" component={AboutUs}></Route>
          <Route path="/LakeProfile/:lakeName" component={LakeProfile}></Route>
          <Route path="/HealthThreats" component={HealthThreats}/>
          <Route path="/BrilliantWork" component={BrilliantWork} />
          <Route path="/Post/:id"  component = {Post}/>
    </div>
    </Router>
  )
}

export default App;