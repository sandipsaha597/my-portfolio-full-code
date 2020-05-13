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
    y: 400,
    width: 30 + 'px',
    height: 30 + 'px',
  })
  const [cursorColor, setCursorColor] = useState('#fc0363')
  const [locked, setLocked] = useState(false)

  const routes = [
    {path: '/multi-page-website', name: 'Home', Component: Home},
    {path: '/skills', name: 'Skills', Component: Skills},
    {path: '/page3', name: 'Page3', Component: Page3}
  ]

  const changeColor = (e) => {
    setCursorColor(e.target.getAttribute('data-cursor-color'))
    if (e.target.getAttribute('data-fixed-cursor') === 'true') {
      let navIcon = document.querySelector('.nav-icon')
      console.log(navIcon.getBoundingClientRect());
      let navIconCoor = navIcon.getBoundingClientRect()
      let cursorSize = 10
      if (navIconCoor.width >= navIconCoor.height) {
        cursorSize += navIconCoor.width
      } else {
        cursorSize += navIconCoor.height
      }
      setLocked(true)
      setCursor({x: navIconCoor.left + (navIconCoor.width / 2), y: navIconCoor.top + (navIconCoor.height / 2), width: cursorSize, height: cursorSize})
    }
    
  } 
  const changeColorOut = () => {
    setCursorColor('#fc0363')    
    setLocked(false)
  }  
  
  const mouseMove = (e) => {
    return locked ? false : setCursor({x: e.clientX, y: e.clientY})
  }
  
  return (
    <Router>
    <div className="App" onMouseMove={mouseMove} >
      {/* <Cursor y={cursor.y} x={cursor.x} color={cursorColor} /> */}
      <div className="cursor" style={{top: cursor.y + 'px', left: cursor.x  + 'px', borderColor: cursorColor, width: cursor.width, height: cursor.height }}></div>
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
