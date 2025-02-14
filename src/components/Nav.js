import React, {useState} from 'react'
import {link} from './Page3'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function Nav(props) {

    const [state, setState] = useState(false)
    const toggle = () => setState(!state)
        
    return (
        <>
        <div className={`menu${state ? ' active' : ''}`}>
            <div className="nav-icon" onClick={toggle} 
                id="nav-icon"
                data-cursor-color="#fff" 
                onMouseEnter={props.changeColor} 
                onMouseLeave={props.changeColorOut}
                data-fixed-cursor='true'>
                <div className="topbar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
                <div className="middlebar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
                <div className="bottombar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
            </div>
            <nav style={state ? style.nav : {'none': 'none'}}>
                <ul onClick={(e) => {
                    setState(!state)                    
                    return e.target.tagName === 'A' ? window.scrollTo(0, 0) : false
                }}>
                    <li>
                        <Link to="/multi-page-website" data-cursor-color="#fff" 
                onMouseEnter={props.changeColor} 
                onMouseLeave={props.changeColorOut} >Home</Link>
                    </li>
                    <li>
                        <Link to="/skills" data-cursor-color="#fff" 
                onMouseEnter={props.changeColor} 
                onMouseLeave={props.changeColorOut} >Skills</Link>
                    </li>
                    <li>
                        <Link to="/page3" data-cursor-color="#fff" 
                onMouseEnter={props.changeColor} 
                onMouseLeave={props.changeColorOut} >Page3</Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}

const style = {
    nav: {
        'WebkitTransform': 'translate(0, 0)',
        'MsTransform': 'translate(0, 0)',
        "transform" : 'translate(0, 0)'
    }
}

export default Nav
