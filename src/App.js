import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {gsap} from 'gsap'
import './App.css';

import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Page3 from './components/Page3'
import Cursor from './components/Cursor';

function App() {
    
  const [cursor, setCursor] = useState({
    x: 400,
    y: 400
  })
  const [cursorColor, setCursorColor] = useState('#fc0363')
  // const [cursorColor, setCursorColor] = useState('#fff')

  const routes = [
    {path: '/multi-page-website', name: 'Home', Component: Home},
    {path: '/about', name: 'About', Component: About},
    {path: '/page3', name: 'Page3', Component: Page3}
  ]

  const changeColor = (e) => {
    setCursorColor(e.target.getAttribute('data-cursor-color'))
    
  } 
  const changeColorOut = () => {
    setCursorColor('#fc0363')
    console.log('changed #000');
    
  }  
  const hey = (e) => console.log(e.target.getAttribute('datac'));
  
  return (
    <Router>
    <div className="App" onMouseMove={e => {setCursor({x: e.pageX, y: e.pageY})}}>
      <Nav changeColor={changeColor} changeColorOut={changeColorOut} />
      <Cursor y={cursor.y} x={cursor.x} color={cursorColor} />
      {routes.map(({path, Component}) => (
        <Route key={path} path={path} exact>
          <div className="page">  
            <Component />
          </div>
        </Route>
      ))}
    </div>
    {/* <Link to='/'>home</Link>
    <Link to='/about'>about</Link>
    <Link to='/page3'>page3</Link>
      <Route path='/' exact>
    {({match}) => (
      <CSSTransition 
        in={match != null} 
        timeout={400} 
        unmountOnExit
        onExit={onExit}
        onEnter={onEnter}
        classNames="my-node">
          <Home />
      </CSSTransition>
    )}
    </Route>
    <Route path='/about' exact>
    {({match}) => (
      <CSSTransition 
        in={match != null} 
        timeout={400} 
        unmountOnExit
        onExit={onExit}
        onEnter={onEnter}
        classNames="my-node">
          <About/>
      </CSSTransition>
    )}
    </Route>
    <Route path='/page3' exact> */}
    {/* {({match}) => (
      <CSSTransition 
        in={match != null} 
        timeout={400} 
        unmountOnExit
        onExit={onExit}
        onEnter={onEnter}
        classNames="my-node">
          <Page3/>
      </CSSTransition>
    )}
    </Route> */}

    {/* <button type="button" onClick={() => setInProp('home')}>
      Home
    </button>
    <button type="button" onClick={() => setInProp('about')}>
      About
    </button>
    <button type="button" onClick={() => setInProp('page3')}>
      Page3
    </button> */}

    {/* {inProp == 'home' && <Home/>}
    {inProp == 'about' && <About/>}
    {inProp == 'page3' && <Page3/>} */}
    
    </Router>
  );
}

export default App; 
