import React, {useState, useEffect} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Portfolio from './Portfolio';

function Home(props) {

  const [hello, setHello] = useState('')
  const [para, setPara] = useState('')
  const [unmount, setUnmount] = useState(false)

  let title = "Hello, my name is Sandip Saha.",
  i = 0,
  now = ''

  let description = "I am a passionate frontend developer. I like coding, playing video games, learning etc. I am not a good writter but I'm pretty good at coding. I am always hungry to learn useful things and improve myself. I am looking to obtain a position that will allow me utilize my technical skills, experience and willingness to learn in making an organization successful.",
  p = true
  useEffect(() => {
    document.title = 'Developer Sandip'
    const typeW = (text, set) => {
      const typewritter = setInterval(() => {
        now = now + text[i]
        set(now)
        i++
        let textLength = text.length
        if (i >= textLength) {
          if (p) {
            typeW(description, setPara)
            p = false
          }
          clearInterval(typewritter)
          i = 0
          now = ''
        }
      }, 50)
    }
    typeW(title, setHello)
  }, [])

  return (
    <>
      <header className="header">
        <h1>{hello}</h1>
        <p>{para}</p>
      </header>
      <Link to="portfolio"
        smooth={true}
        offset={-30}

        id="scroll-to"
        data-cursor-size="15"
        data-cursor-color="#fff"
        onMouseEnter={props.changeColor} 
        onMouseLeave={props.changeColorOut}
        data-fixed-cursor='true'>
          <FontAwesomeIcon icon={faChevronDown} />
      </Link>
      <Portfolio  
        data-cursor-color="#fff"
        changeColor={props.changeColor} 
        changeColorOut={props.changeColorOut} />
    </>
  )
}


export default Home
