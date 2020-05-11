import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import {gsap} from 'gsap'
import './App.css';

import Home from './components/Home'
import Nav from './components/Nav'
import Skills from './components/Skills'
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
    {path: '/skills', name: 'Skills', Component: Skills},
    {path: '/page3', name: 'Page3', Component: Page3}
  ]

  const changeColor = (e) => {
    setCursorColor(e.target.getAttribute('data-cursor-color'))
    
  } 
  const changeColorOut = () => {
    setCursorColor('#fc0363')    
  }  
  
  return (
    <Router>
    <div className="App" onMouseMove={e => { console.log(e.clientX, e.clientY);{setCursor({x: e.clientX, y: e.clientY})} } }>
      {/* <Cursor y={cursor.y} x={cursor.x} color={cursorColor} /> */}
      <div className="cursor" style={{top: cursor.y + 'px', left: cursor.x  + 'px', borderColor: cursorColor}}></div>
      <Nav changeColor={changeColor} changeColorOut={changeColorOut} />
      {routes.map(({path, Component}) => (
        <Route key={path} path={path} exact>
          <div className="page">  
            <Component />
          </div>
        </Route>
      ))}
    </div>
    
    </Router>
  );
}

export default App; 
