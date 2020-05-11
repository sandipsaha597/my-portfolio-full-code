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
                data-cursor-color="#fff" onMouseEnter={props.changeColor} onMouseLeave={props.changeColorOut}>
                <div className="topbar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
                <div className="middlebar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
                <div className="bottombar" data-cursor-color="#fff" onMouseEnter={props.changeColor}></div>
            </div>
            <nav style={state ? style.nav : {'none': 'none'}}>
                <ul onClick={() => setState(!state)}>
                    <li>
                        <Link to="/multi-page-website" >Home</Link>
                    </li>
                    <li>
                        <Link to="/skills" >Skills</Link>
                    </li>
                    <li>
                        <Link to="/page3" >Page3</Link>
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
